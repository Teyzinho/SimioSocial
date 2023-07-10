import Typography from "@/src/components/display/Typography";
import { Avatar } from "@/src/components/pictures/Avatar";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FollowButton from "../followButton/FollowButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const WhoFollowUser = ({profile , user}) => {

  return (
    <Wrapper>
      <div style={{ display: "flex" ,alignItems: "center",gap:"5px"}}>
        <Avatar
          src={profile.avatar_url}
          alt="profile"
          width={50}
          height={50}
        />
        <div>
          <Link href={`/profile/${profile.full_name}`}>
            <Typography variant="semi_bold">{profile.full_name}</Typography>
          </Link>
          <Typography variant="weak">{profile.full_name}</Typography>
        </div>
      </div>
      <FollowButton userId={user?.id} followId={profile.id}/>
    </Wrapper>
  );
};

export default WhoFollowUser;
