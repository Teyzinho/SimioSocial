import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import Typography from "../display/Typography";
import styled from "styled-components";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { Avatar } from "../pictures/Avatar";

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

const Comment = ({ postId }) => {
  const { supabaseClient } = useSessionContext();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      const { data, error } = await supabaseClient
        .from("comments")
        .select("*")
        .eq("post_id", postId);

      if (error) {
        console.log("error fetching comments", error);
      }

      setComment(data);
    };

    fetchComment();
  }, [postId]);

  return (
    <CommentWrapper>
      <UserCardWrapper>
        <UserCard />
      </UserCardWrapper>

      <CommentContent>
        {comment.length !== 0 ? (
          <>
            {comment.map((item) => {
              return (
                <div key={item.id}>
                  <UserCard userId={item.user_id} time={item.created_at}/>
                  <Typography variant="comment"  style={{paddingLeft:"50px"}}>
                    {item.content}
                  </Typography>
                </div>
              );
            })}
          </>
        ) : (
          <Typography variant="comment">Não há comentarios</Typography>
        )}
      </CommentContent>
    </CommentWrapper>
  );
};

export default Comment;
