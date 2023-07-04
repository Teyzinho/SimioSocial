"use client";
import React, { useEffect, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { BiDotsHorizontalRounded } from "react-icons/bi";

import { PostHeader } from "./Post.styles";
import UserCard from "../userCard/UserCard";
import PostReactions from "./PostReactions";
import { IconButton } from "../buttons/IconButton";
import Comment from "../Comment/Comment";
import Typography from "../display/Typography";
import { Avatar } from "../pictures/Avatar";
import { Input } from "../inputs/input";
import { Button } from "../buttons/button";
import getPostById from "@/hooks/getPostById";

import {
  StyledFullPost,
  FullPostImgWrapper,
  FullPostImg,
  FullPostContent,
  Wrapper,
} from "./FullPost.styles";
import useLoadImage from "@/hooks/useLoadImage";

const FullPost = ({ postId }) => {
  const { post, loading, error } = getPostById(postId);
  const {session} = useSessionContext();
  console.log(session)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const image_url = useLoadImage(post.image_url)

  const handleLikeClick = () => {
    console.log("Like click");
  };

  const handleCommentClick = () => {
    console.log("Comment click");
  };

  const handleShareClick = () => {
    console.log("Share click");
  };

  const handleSaveClick = () => {
    console.log("Save click");
  };

  const handlePostClick = () => {
    console.log("Post click");
  };

  const handleDotsClick = () => {
    console.log("Dots click");
  };

  return (
    <main>
      <StyledFullPost>
        {/* Img */}
        <FullPostImgWrapper>
          <FullPostImg src={image_url} />
        </FullPostImgWrapper>

        {/* Post Content */}
        <FullPostContent>
          <Wrapper>
            {/* Header */}
            <PostHeader>
              {/* Prodifile */}
              <UserCard followBtn={true} userId={post.user_id}/>
              {/* Button 3 dots */}
              <IconButton onClick={handleDotsClick}>
                <BiDotsHorizontalRounded />
              </IconButton>
            </PostHeader>
            <div>
              <Typography variant="h2">{post.title}</Typography>

              <Typography variant="desc" style={{ paddingTop: "16px" }}>
                {post.description}
              </Typography>
            </div>
            {/* Comentários */}
            <Typography variant="h3" style={{ marginTop: "16px" }}>
              Comentários
            </Typography>
            <div>
              <Comment />
            </div>
          </Wrapper>

          <div>
            <PostReactions
              handleLikeClick={handleLikeClick}
              handleCommentClick={handleCommentClick}
              handleShareClick={handleShareClick}
              handleSaveClick={handleSaveClick}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                
                alt="profile-pct"
                width={50}
                height={50}
              />
              <Input placeholder="Deixe um comentário" />
              <Button>Comentar</Button>
            </div>
          </div>
        </FullPostContent>
      </StyledFullPost>
    </main>
  );
};

export default FullPost;
