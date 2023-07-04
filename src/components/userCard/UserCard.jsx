import React, { useEffect, useState } from "react";
import { Avatar } from "../pictures/Avatar";
import styled from "styled-components";
import { Button } from "../buttons/button";
import Typography from "../display/Typography";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useGetProfileById from "@/hooks/useGetProfileById";

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
    ${Username} ${Typography}[variant="h4"] {
      text-decoration: underline;
    }
  }
`;

const UserCard = ({ followBtn, userId }) => {
  if(!userId){
    return null;
  }
  
  const user = useGetProfileById(userId);

  return (
    <UserCardContainer>
      <Avatar src={user?.avatar_url} alt="avatar" width={50} height={50} />
      <div>
        <Username>
          <Typography variant="h4">{user?.full_name}</Typography>
          <Typography>{user?.full_name}</Typography>
        </Username>
        <Typography variant="weak" style={{ marginTop: "4px" }}>
          2h atrás
        </Typography>
      </div>
      {followBtn && <Button>Seguir</Button>}
    </UserCardContainer>
  );
};

export default UserCard;
