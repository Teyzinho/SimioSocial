import { Button } from "@/src/components/buttons/button";
import Typography from "@/src/components/display/Typography";
import { Avatar } from "@/src/components/pictures/Avatar";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const WhoFollowUser = ({user}) => {
  return (
    <Wrapper>
      <div style={{ display: "flex" ,alignItems: "center",gap:"5px"}}>
        <Avatar
          src={user.avatar_url}
          alt="profile"
          width={50}
          height={50}
        />
        <div>
          <Link href={`/profile/${user.full_name}`}>
            <Typography variant="semi_bold">{user.full_name}</Typography>
          </Link>
          <Typography variant="weak">{user.full_name}</Typography>
        </div>
      </div>
      <Button bgcolor="transparent">Seguir</Button>
    </Wrapper>
  );
};

export default WhoFollowUser;
