//npm install date-fns
import { formatDistanceToNow } from 'date-fns';

import React, { useEffect, useState } from "react";
import { Avatar } from "../pictures/Avatar";
import styled from "styled-components";
import { Button } from "../buttons/button";
import Typography from "../display/Typography";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useGetProfileById from "@/hooks/useGetProfileById";
import { useRouter } from 'next/navigation';

const Username = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const UserCardContainer = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 5px;
  align-items: center;
  cursor: pointer;

  & button {
    margin-left: 15px;
  }

  &:hover {
    ${Username} ${Typography}[variant="semi_bold"] {
      text-decoration: underline;
    }
  }
`;

const UserCard = ({ followBtn, userId , time}) => {
  const router = useRouter();

  if(!userId){
    return null;
  }
  
  const user = useGetProfileById(userId);

  const createdDate = new Date(time);
  const timeAgo = formatDistanceToNow(createdDate, { addSuffix: false });

  const handleClick = () => {
    router.replace(`/profile/${user.full_name}`)
  }

  return (
    <UserCardContainer>
      <Avatar src={user?.avatar_url} alt="avatar" width={40} height={40} />
      <div>
        <Username onClick={handleClick}>
          <Typography variant="semi_bold" >{user?.full_name}</Typography>
          <Typography style={{fontSize:"0.9rem"}}>@{user?.full_name}</Typography>
        </Username>
        <Typography variant="weak" style={{ marginTop: "4px" }}>
          {timeAgo}
        </Typography>
      </div>
      {followBtn && <Button>Seguir</Button>}
    </UserCardContainer>
  );
};

export default UserCard;
