"use client";
import React from "react";
import styled from "styled-components";
import { PostHeader } from "./Post.styles";
import UserCard from "../userCard/UserCard";
import PostReactions from "./PostReactions";
import { IconButton } from "../buttons/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Comment from "../Comment/Comment";
import Typography from "../display/Typography";
import { Avatar } from "../pictures/Avatar";
import { Input } from "../inputs/input";
import { Button } from "../buttons/button";
import { device } from "@/style/Breakpoints";
import Feed from "@/src/components/Feed/Feed";

const StyledFullPost = styled.div`
  width: 1000px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral};
  min-height: 500px;
  margin: auto;
  margin-top: 56px;
  border-radius: 5px;
  overflow: hidden;

  @media ${device.md}{
    width: 600px;
    flex-direction: column;
  }
  @media ${device.sm} {
    width: 95%;
    flex-direction: column;
  }
  @media ${device.xs} {
    width: 100%;
    flex-direction: column;
  }
`;

const FullPostImgWrapper = styled.div`
  width: 100%;
`;

const FullPostImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const FullPostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > :last-child {
    margin-top: auto;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  padding: 16px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FullPost = () => {
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
        <FullPostImg src="/images/post1.png" />
      </FullPostImgWrapper>

      {/* Post Content */}
      <FullPostContent>
        <Wrapper>
          {/* Header */}
          <PostHeader>
            {/* Prodifile */}
            <UserCard followBtn={true} />
            {/* Button 3 dots */}
            <IconButton onClick={handleDotsClick}>
              <BiDotsHorizontalRounded />
            </IconButton>
          </PostHeader>
          <div>
            <Typography variant="h2">Hello World!</Typography>

            <Typography variant="desc" style={{ paddingTop: "16px" }}>
              A vida é uma jornada repleta de desafios e conquistas. Às vezes,
              nos deparamos com obstáculos que parecem insuperáveis, mas é
              nesses momentos que descobrimos nossa força interior. Com
              determinação e perseverança, somos capazes de superar qualquer
              adversidade que se apresente em nosso caminho.
            </Typography>
          </div>
          {/* Comentários */}
          <Typography variant="h3" style={{marginTop:"16px"}}>
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
              src="/images/profile.png"
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

    <Feed />
    </main>
  );
};

export default FullPost;
