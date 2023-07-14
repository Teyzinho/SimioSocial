"use client"

import { FiShare } from "react-icons/fi";
import { IconButton } from "../buttons/IconButton";
import { StyledPostReactions } from "./Post.styles";
import LikeButton from "../likeButton/LikeButton";
import CommentButton from "../commentButton/CommentButton";
import SavePostButton from "../savePostButton/SavePostButton";

const PostReactions = ({
  postId,
  user
}) => {
  return (
    <StyledPostReactions>
      {/* Headt Button */}
      <LikeButton postId={postId} user={user}/>
    {/* Comment */}
      <CommentButton postId={postId}/>
      
    {/* Share */}
      <IconButton color="white">
        <FiShare />
      </IconButton>
    {/* Save */}
      <SavePostButton postId={postId} user={user}/>
    </StyledPostReactions>
  );
};

export default PostReactions;
