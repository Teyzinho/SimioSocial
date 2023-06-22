import React from "react";
import UserCard from "../userCard/UserCard";
import Typography from "../display/Typography";
import { styled } from "styled-components";
import { IconButton } from "../buttons/IconButton";
import { FiHeart } from "react-icons/fi";

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 16px;
`;

const UserCardWrapper = styled.div`
  flex: 0 0 auto;
`;

const CommentContent = styled.div`
  flex: 1;
  padding-top: 6px;
`;

const Comment = () => {
  return (
    <CommentWrapper>
      <UserCardWrapper>
        <UserCard />
      </UserCardWrapper>

      <CommentContent>
        <Typography variant="comment">
          E perseverança, somos capazes de superar qualquer adversidade que se
          apresente em nosso caminho.
        </Typography>
        <div style={{display:"flex", marginTop:"8px", gap:"5px"}}>
          <Typography variant="semi_bold">Responder</Typography>

          <IconButton padding="0" width="18px">
            <FiHeart />
            20
          </IconButton>
        </div>
      </CommentContent>
    </CommentWrapper>
  );
};

export default Comment;
