//npm install date-fns
import { formatDistanceToNow } from 'date-fns';
import { device } from '@/style/Breakpoints';

import React, { useEffect, useState } from "react";
import { Avatar } from "../pictures/Avatar";
import styled from "styled-components";
import Typography from "../display/Typography";
import useGetProfileById from "@/hooks/useGetProfileById";
import { useRouter } from 'next/navigation';
import FollowButton from '../followButton/FollowButton';

const Username = styled.span`
  display: flex;
  gap: 5px;
`;

const UsernameTitle = styled.p`
  /* max-width:110px; */
  max-width:6vw;
  width:fit-content;
  /* min-width:75px; */
  font-weight:600;

  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;

  @media ${device.sm} {
    max-width:20vw;
  }
`

const UsernameName = styled.p`
  /* max-width:75px; */
  max-width:4vw;
  min-width:60px;
  font-size: 0.9rem;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
`

const UserCardContainer = styled.div`
  width:100%;
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

const UserCard = ({ followBtn, userId , time ,profileId}) => {
  const router = useRouter();
  const user = useGetProfileById(userId);

  if(!userId){
    return null;
  }
  

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
          <UsernameTitle>{user?.full_name}</UsernameTitle>
          <UsernameName >@{user?.full_name}</UsernameName>
        </Username>
        <Typography variant="weak" style={{ marginTop: "4px" }}>
          {timeAgo}
        </Typography>
      </div>
      {followBtn && <FollowButton followId={userId} userId={profileId}/>}
    </UserCardContainer>
  );
};

export default UserCard;
