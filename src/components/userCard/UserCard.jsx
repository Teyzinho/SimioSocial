import React from "react";
import { Avatar } from "../pictures/Avatar";
import { styled } from "styled-components";
import { Button } from "../buttons/button";
import Typography from "../display/Typography";

const Username = styled.span`
  display: flex;
  gap: 5px;
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

const UserCard = ({ followBtn }) => {
  return (
    <UserCardContainer>
      <Avatar src="/images/profile.png" alt="avatar" width={50} height={50} />
      <div>
        <Username>
          <Typography variant="h4">Tey</Typography>
          <pTypography>@Tey</pTypography>
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
