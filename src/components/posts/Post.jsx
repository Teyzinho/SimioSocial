"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostHeader } from "./Post.styles";
import UserCard from "../userCard/UserCard";
import PostReactions from "./PostReactions";
import { device } from "@/style/Breakpoints";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import DotsButton from "../dotsButton/DotsButton";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

const PostCard = styled.div`
  margin-left:16px; /* gutter size */
  background-clip: padding-box;

  margin-bottom: 16px;
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
  const {user} = useUser();

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

  return (
    <PostCard>
      {/* Header */}
      <PostHeader>
        {/* profile */}
        <UserCard userId={data.user_id} time={data.created_at}/>

        {/* Button 3 dots */}
        <DotsButton userId={user?.id} post={data}/>

      </PostHeader>

      {/* Image */}
      <Link href={`/post/${data.id}`}>
        <PostImg src={imgPath} alt="PostImg" />
      </Link>

      {/* Post Reactions  */}
      <PostReactions
        postId={data.id}
        user={user}
      />
    </PostCard>
  );
};

export default Post;
