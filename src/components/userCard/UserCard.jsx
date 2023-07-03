import React, { useEffect, useState } from "react";
import { Avatar } from "../pictures/Avatar";
import styled from "styled-components";
import { Button } from "../buttons/button";
import Typography from "../display/Typography";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

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
  const supabase = useSupabaseClient();
  const [userData, setUserData] = useState([]);


  if(!userId){
    return null;
  }
  
  const fetchUser = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)

      if (error) {
        console.log("Error fetching:", error);
      } else {
        setUserData(data);
      }
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (userData.length === 0) {
    return null; 
  }

  const user = userData[0]

  return (
    <UserCardContainer>
      <Avatar src={user.avatar_url} alt="avatar" width={50} height={50} />
      <div>
        <Username>
          <Typography variant="h4">{user.full_name}</Typography>
          <Typography>{user.full_name}</Typography>
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
