"use client";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { PostHeader } from "./Post.styles";
import UserCard from "../userCard/UserCard";
import PostReactions from "./PostReactions";
import Comment from "../Comment/Comment";
import Typography from "../display/Typography";
import getPostById from "@/hooks/getPostById";
import { useUser } from "@/hooks/useUser";

import {
  StyledFullPost,
  FullPostImgWrapper,
  FullPostImg,
  FullPostContent,
  Wrapper,
} from "./FullPost.styles";
import useLoadImage from "@/hooks/useLoadImage";
import DotsButton from "../dotsButton/DotsButton";
import AddComment from "../addComment/AddComment";

const FullPost = ({ postId }) => {
  const { post, loading, error } = getPostById(postId);
  const {user} = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const image_url = useLoadImage(post.image_url)

  const handlePostClick = () => {
    console.log("Post click");
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
              <UserCard followBtn={true} userId={post.user_id} time={post?.created_at} profileId={user.id}/>
              {/* Button 3 dots */}
              <DotsButton userId={user?.id} post={post}/>
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
              <Comment postId={post?.id}/>
            </div>
          </Wrapper>

          <div>
            <PostReactions
              postId={postId}
              user={user}
            />
            <AddComment user={user} postId={post.id}/>

          </div>
        </FullPostContent>
      </StyledFullPost>
    </main>
  );
};

export default FullPost;
