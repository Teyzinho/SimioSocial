"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { FaRegComment } from "react-icons/fa";

const CommentButton = ({ postId }) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const [commentAmount, setCommentAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("comments")
        .select("*")
        .eq("post_id", postId);

      if (error) {
        console.log("error fetching comment", error);
      } else {
        setCommentAmount(data.length);
      }
    };
    fetchData()
  });

  const handleClick = () => {
    router.push(`/post/${postId}`)
  }

  return (
    <IconButton
        onClick={handleClick}
        color="white"
    >
        <FaRegComment />
        {commentAmount}
    </IconButton>
  );
};

export default CommentButton;
