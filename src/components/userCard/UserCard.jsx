import React from "react";
import { Avatar } from "../pictures/Avatar";
import { styled } from "styled-components";

const UserCardContainer = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 5px;
`;

const Username = styled.span`
  display: flex;
  gap: 5px;
`;

const UserCard = () => {
  return (
    <UserCardContainer>
      <Avatar src="/images/profile.png" alt="avatar" width={50} height={50} />
      <div>
        <Username>
          <h3>Tey</h3>
          <p>@Tey</p>
        </Username>
        <p>2h atrás</p>
      </div>
    </UserCardContainer>
  );
};

export default UserCard;
