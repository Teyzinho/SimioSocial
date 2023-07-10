"use client"
import Feed from "@/src/components/Feed/Feed"
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const Search = ({ searchParams }) => {
    const supabase = useSupabaseClient();
    const [feed, setFeed] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchFeed = async () => {
        try {
          const { data: posts, error } = await supabase
            .from("posts")
            .select("*");
  
          if (error) {
            console.log("Error fetching posts:", error);
            setIsLoading(false);
            return;
          }
  
          const filteredPosts = posts.filter((post) => {
            const { title, tags } = post;
            const lowerSearch = searchParams.search.toLowerCase();
  
            return (
              title.toLowerCase().includes(lowerSearch) ||
              tags.some((tag) => tag.toLowerCase().includes(lowerSearch))
            );
          });
  
          setFeed(filteredPosts);
          setIsLoading(false);
        } catch (error) {
          console.log("Error fetching posts:", error);
          setIsLoading(false);
        }
      };
  
      fetchFeed();
    }, [supabase, searchParams]);
  
    return (
      <div>
        <Feed feed={feed} isLoading={isLoading} title={`Pesquisa por: ${searchParams.search}`}/>
      </div>
    );
  };
  
  export default Search;