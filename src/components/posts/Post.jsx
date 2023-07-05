"use client";
import React, { useEffect, useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import styled from "styled-components";
import { PostHeader } from "./Post.styles";
import UserCard from "../userCard/UserCard";
import PostReactions from "./PostReactions";
import { device } from "@/style/Breakpoints";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const PostCard = styled.div`
  margin-left:15px; /* gutter size */
  background-clip: padding-box;

  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #73737361;
  background-color: ${({ theme }) => theme.colors.neutral};

  @media ${device.sm} {
    margin-left:5px;
    margin-bottom: 5px;
  } 
`;

const PostImg = styled.img`
  object-fit: cover;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Post = ({ data }) => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [imgPath, setImgPath] = useState("");

  const fetchPost = async () => {
    const { data: imageData } = supabase.storage
      .from("images")
      .getPublicUrl(data.image_url);
    setImgPath(imageData.publicUrl);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handlePostClick = () => {
    console.log("Post click");
    router.push(`/post/${data.id}`);
  };

  const handleDotsClick = () => {
    console.log("Dots click");
  };


  return (
    <PostCard>
      {/* Header */}
      <PostHeader>
        {/* profile */}
        <UserCard userId={data.user_id} time={data.created_at}/>

        {/* Button 3 dots */}
        <IconButton onClick={handleDotsClick}>
          <BiDotsHorizontalRounded />
        </IconButton>
      </PostHeader>

      {/* Image */}
      <div onClick={handlePostClick}>
        <PostImg src={imgPath} alt="PostImg" />
      </div>

      {/* Post Reactions  */}
      <PostReactions
        postId={data.id}
      />
    </PostCard>
  );
};

export default Post;
