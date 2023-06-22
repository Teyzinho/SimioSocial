"use client";
import { Button } from "@/src/components/buttons/button";
import Typography from "@/src/components/display/Typography";
import { Avatar } from "@/src/components/pictures/Avatar";
import Feed from "@/src/scenes/Feed/Feed";
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ProfileCard = styled.div`
  width:90%;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.neutral};
  margin: auto;
  margin-top: 42px;
  border-radius: 5px;
  position: relative;
`;

const ProfileBanner = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileTabButton = styled.div`
    position: absolute;
    bottom: -36px;
`

const TabButtonContainer = styled.button`
  background-color: ${({ active }) => (active ? "lightblue" : "transparent")};
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

const TabButton = ({ label, active, onClick }) => {
  return (
    <TabButtonContainer active={active} onClick={onClick}>
      {label}
    </TabButtonContainer>
  );
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ProfileCard>
        {/* Banner */}
        <ProfileBanner src="/images/banner.jpg" alt="banner" />

        {/* Perfil Info */}
        <ProfileInfo>
          <Avatar
            src="/images/profile.png"
            alt="banner"
            width={150}
            height={150}
          />
          <Typography variant="h4">Tey</Typography>
          <Typography>@Tey</Typography>
        </ProfileInfo>

        <Button style={{
            marginLeft:"auto",
            marginRight:"10px",
            marginTop:"10px"
        }}>
            Seguir
        </Button>

        <div style={{
            display:"flex",
            justifyContent:"flex-end",
            gap:"16px",
            alignSelf:"flex-end",
            marginTop:"75px",
            marginRight:"15px"
        }}>
            <span style={{display:"flex", gap:"8px",}}>
                <Typography variant="semi_bold">
                    Seguidores
                </Typography>
                <Typography style={{fontSize:"0.9rem"}}>
                    20
                </Typography>
            </span>
            <span style={{display:"flex", gap:"8px",}}>
                <Typography variant="semi_bold">
                    Seguindo
                </Typography>
                <Typography style={{fontSize:"0.9rem"}}>
                    20
                </Typography>
            </span>
        </div>

        <ProfileTabButton>
          <TabButton
            label="Posts"
            active={activeTab === "Posts"}
            onClick={() => handleTabClick("Posts")}
          />
          <TabButton
            label="Itens Salvos"
            active={activeTab === "Itens Salvos"}
            onClick={() => handleTabClick("Itens Salvos")}
          />
        </ProfileTabButton>
      </ProfileCard>
    
    <div style={{paddingTop:"26px"}}>
      <Feed />
    </div>

    </div>
  );
};

export default Profile;
