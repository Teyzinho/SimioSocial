"use client";

import useFetchSavedPosts from "@/hooks/useFetchSavedPosts";
import Feed from "@/src/components/Feed/Feed";

const Saved_Posts = () => {

  const {feed , isLoadingData} = useFetchSavedPosts();

  return (
    <main>
      <Feed feed={feed} isLoading={isLoadingData} title={"Posts Salvos"}/>
    </main>
  );
};

export default Saved_Posts;
