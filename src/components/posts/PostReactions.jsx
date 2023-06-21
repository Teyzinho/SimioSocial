import React from "react";
import { FiHeart, FiShare, FiBookmark } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IconButton } from "../buttons/IconButton";
import { StyledPostReactions } from "./Post.styles";

const PostReactions = ({
  handleLikeClick,
  handleCommentClick,
  handleShareClick,
  handleSaveClick,
}) => {
  return (
    <StyledPostReactions>
      {/* Headt Button */}
      <IconButton color="white" onClick={handleLikeClick}>
        <FiHeart />
        20
      </IconButton>
    {/* Comment */}
      <IconButton color="white" onClick={handleCommentClick}>
        <FaRegComment />
        20
      </IconButton>
    {/* Share */}
      <IconButton color="white" onClick={handleShareClick}>
        <FiShare />
        20
      </IconButton>
    {/* Save */}
      <IconButton color="white" onClick={handleSaveClick}>
        <FiBookmark />
        20
      </IconButton>
    </StyledPostReactions>
  );
};

export default PostReactions;
