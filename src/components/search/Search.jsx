import { RxMagnifyingGlass } from "react-icons/rx";
import { Input } from "../inputs/input";
import { useEffect, useRef, useState } from "react";

import { GlassLabel, SearchContainer, UlContainer } from "./Seatch.styles";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { Avatar } from "../pictures/Avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Search = () => {

  const router = useRouter();
  const supabase = useSupabaseClient();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef()

  useEffect(() => {
    if (isOpen) {
      const fetchSearch = async () => {
        setIsLoading(true);

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .ilike("full_name", `%${inputValue}%`);

        const { data: postData, error: postError } = await supabase
          .from("posts")
          .select("*");

        const filteredData = postData.filter((item) => {
          return item.tags.some((tag) =>
            tag.toLowerCase().includes(inputValue.toLowerCase())
          );
        });

        console.log("filteredData", filteredData);

        if (profileError || postError) {
          toast.error("error fetchSearch");
          console.log("error fetchSearch", postError);
          setIsLoading(false);
        }
        const combinedResults = [...profileData, ...filteredData];
        setSearchResults(combinedResults);
        setIsLoading(false);
      };

      fetchSearch();
    }
  }, [inputValue, isOpen]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRouter = (event) => {
    event.preventDefault();
    router.push(`/search/?search=${inputValue}`);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SearchContainer isOpen={isOpen} ref={ref}>
      <form onSubmit={handleRouter}>
        <Input
          id="search"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
          type="search"
          onFocus={handleFocus}
          autoComplete="off"
        />
        {isOpen && (
          <UlContainer>
            {isLoading ? (
              <li>Loading...</li>
            ) : (
              searchResults.slice(0, 10).map((item) => (
                <>
                  {item.avatar_url ? (
                    <li key={item.id} onClick={close}>
                      <Link
                        href={`/profile/${item.full_name}`}
                        style={{
                          width:"100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#000",
                        }}
                      >
                        <Avatar src={item.avatar_url} />
                        <p>{item.full_name}</p>
                      </Link>
                    </li>
                  ) : (
                    item.tags
                      .filter((tag) =>
                        tag.toLowerCase().includes(inputValue.toLowerCase())
                      )
                      .map((tag) => (
                        <li key={`${item.id}${tag}`} onClick={close}>
                          <Link
                            href={`/search/?search=${tag}`}
                            style={{
                              width:"100%",
                              height:"100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              color: "#000",
                            }}
                          >
                            <RxMagnifyingGlass />
                            <p>{tag}</p>
                          </Link>
                        </li>
                      ))
                  )}
                </>
              ))
            )}
          </UlContainer>
        )}
        <GlassLabel htmlFor="search" show={isOpen ? undefined : "true"}>
          <RxMagnifyingGlass />
        </GlassLabel>
      </form>
    </SearchContainer>
  );
};

export default Search;
