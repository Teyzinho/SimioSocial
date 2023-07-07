"use client";

import useFetchSavedPosts from "@/hooks/useFetchSavedPosts";
import Feed from "@/src/components/Feed/Feed";

const Saved_Posts = () => {

  const {feed} = useFetchSavedPosts();

  console.log("feed", feed)

  return (
    <main>
      Saved_Posts
      
      <Feed feed={feed} />
    </main>
  );
};

export default Saved_Posts;
