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

const WhoFollowUser = () => {
  return (
    <Wrapper>
      <div style={{ display: "flex" ,alignItems: "center",gap:"5px"}}>
        <Avatar
          src="/images/profile.png"
          alt="profile"
          width={50}
          height={50}
        />
        <div>
          <Link href="">
            <Typography variant="semi_bold">Tey</Typography>
          </Link>
          <Typography variant="weak">@Tey</Typography>
        </div>
      </div>
      <Button bgcolor="transparent">Seguir</Button>
    </Wrapper>
  );
};

export default WhoFollowUser;
