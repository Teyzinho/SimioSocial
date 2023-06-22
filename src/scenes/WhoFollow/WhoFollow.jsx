import React from "react";
import { WhoFollowCard , WhoFollowWrapper } from "./WhoFollow.Styles";
import WhoFollowUser from "./WhoFollowUser";

const WhoFollow = () => {
  return (
    <WhoFollowWrapper>
      <WhoFollowCard>
        <WhoFollowUser/>
        <WhoFollowUser/>
      </WhoFollowCard>
    </WhoFollowWrapper>
  );
};

export default WhoFollow;
