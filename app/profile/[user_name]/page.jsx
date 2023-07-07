"use client";

import { Button } from "@/src/components/buttons/button";
import Typography from "@/src/components/display/Typography";
import { Avatar } from "@/src/components/pictures/Avatar";
import Feed from "@/src/components/Feed/Feed";
import styled from "styled-components";
import { useState } from "react";
import useFetchProfilePosts from "@/hooks/useFetchUserProfile";
import useGetProfileById from "@/hooks/useGetProfileById";
import useFetchSavedPosts from "@/hooks/useFetchSavedPosts";
import useFetchSavedPostsByUserName from "@/hooks/useFetchSavedByUserName";

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
    <TabButtonContainer active={active ? "true" : undefined} onClick={onClick}>
      {label}
    </TabButtonContainer>
  );
};

const Profile = ({params}) => {

  const [activeTab, setActiveTab] = useState("Posts");
  const {feed , isLoadingData , profile} = useFetchProfilePosts(params.user_name);
  const {feed: savedFeed, isLoadingData: isLoadingSaved} = useFetchSavedPostsByUserName(params.user_name)

  console.log(params.user_name)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFollowersClick = () =>{
    console.log("seguidores")
  }

  const handleFollowingClick = () =>{
    console.log("seguindo")
  }

  return (
    <main>
      <ProfileCard>
        {/* Banner */}
        <ProfileBanner src="/images/banner.jpg" alt="banner" />

        {/* Perfil Info */}
        <ProfileInfo>
          <Avatar
            src={profile?.avatar_url}
            alt="banner"
            width={150}
            height={150}
          />
          <Typography variant="h4">{profile?.full_name}</Typography>
          <Typography>{profile?.full_name}</Typography>
        </ProfileInfo>

        <Button 
        style={{
            marginLeft:"auto",
            marginRight:"10px",
            marginTop:"10px"
        }}
        >
            Seguir
        </Button>

        <div 
        style={{
            display:"flex",
            justifyContent:"flex-end",
            gap:"16px",
            alignSelf:"flex-end",
            marginTop:"75px",
            marginRight:"15px"
        }}>
          {/* Seguidores */}
            <span 
              style={{display:"flex", gap:"8px", cursor:"pointer"}}
            >
                <Typography 
                  onClick={handleFollowersClick}
                variant="semi_bold"
                >
                    Seguidores
                </Typography>
                <Typography style={{fontSize:"0.9rem"}}>
                    20
                </Typography>
            </span>
            {/* Seguindo */}
            <span 
              style={{display:"flex", gap:"8px",cursor:"pointer"}}
            >
                <Typography 
                  onClick={handleFollowingClick}
                variant="semi_bold">
                    Seguindo
                </Typography>
                <Typography 
                  style={{fontSize:"0.9rem"}}
                >
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
    
    <div 
      style={{paddingTop:"26px"}}
    >
      {activeTab === "Posts"
        ?
          <Feed feed={feed} isLoading={isLoadingData}/>
        :
          <Feed feed={savedFeed} isLoading={isLoadingSaved}/>
      }
      
    </div>

    </main>
  );
};

export default Profile;
