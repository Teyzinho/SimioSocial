import React from "react";
import { FiHeart, FiShare, FiBookmark } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IconButton } from "../buttons/IconButton";
import { StyledPostReactions } from "./Post.styles";
import LikeButton from "../likeButton/LikeButton";
import CommentButton from "../commentButton/CommentButton";

const PostReactions = ({
  postId
}) => {
  return (
    <StyledPostReactions>
      {/* Headt Button */}
      <LikeButton postId={postId}/>
    {/* Comment */}
      <CommentButton postId={postId}/>
      
    {/* Share */}
      <IconButton color="white">
        <FiShare />
      </IconButton>
    {/* Save */}
      <IconButton color="white">
        <FiBookmark />
      </IconButton>
    </StyledPostReactions>
  );
};

export default PostReactions;
