import React from "react";
import { FiHeart, FiShare, FiBookmark } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IconButton } from "../buttons/IconButton";
import { StyledPostReactions } from "./Post.styles";
import LikeButton from "../likeButton/LikeButton";

const PostReactions = ({
  postId
}) => {
  return (
    <StyledPostReactions>
      {/* Headt Button */}
      <LikeButton postId={postId}/>
    {/* Comment */}
      <IconButton color="white">
        <FaRegComment />
        20
      </IconButton>
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
