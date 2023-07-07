"use client";

import useFetchSavedPosts from "@/hooks/useFetchSavedPosts";
import Feed from "@/src/components/Feed/Feed";

const Saved_Posts = () => {

  const {feed , isLoadingData} = useFetchSavedPosts();

  return (
    <main>
      Saved_Posts
      
      <Feed feed={feed} isLoading={isLoadingData}/>
    </main>
  );
};

export default Saved_Posts;
