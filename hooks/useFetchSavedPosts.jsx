import useModal from "@/src/features/modal/useModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useUser } from "./useUser";
import { useRouter } from "next/navigation";

const useFetchSavedPosts = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const supabase = useSupabaseClient();
  const { user, isLoading } = useUser();
  const [feed, setFeed] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    if (!user && !isLoading) {
      router.replace("/");
      openModal("auth");
    }
  }, [user, isLoading, router, openModal]);

  useEffect(() => {
    const fetchFeed = async () => {
      setIsLoadingData(true);

      try {
        const { data, error } = await supabase
          .from("saved_posts")
          .select("*, posts(*)")
          .order("created_at", { ascending: false })
          .eq("user_id", user?.id);

        if (error) {
          console.log("Error fetching feed", error);
        } else {
          setFeed(data);
        }
      } catch (error) {
        console.log("Error fetching feed", error);
      }

      setIsLoadingData(false);
    };

    if (user && !isLoading) {
      fetchFeed();
    }
  }, [supabase, user, isLoading]);

  return { feed: feed.map((item) => ({ ...item.posts })), isLoadingData };
};

export default useFetchSavedPosts;
