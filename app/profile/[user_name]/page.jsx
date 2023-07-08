"use client";

import { useEffect, useState } from "react";

import { Button } from "@/src/components/buttons/button";
import Typography from "@/src/components/display/Typography";
import { Avatar } from "@/src/components/pictures/Avatar";
import Feed from "@/src/components/Feed/Feed";

import useFetchProfilePosts from "@/hooks/useFetchUserProfile";
import useFetchSavedPostsByUserName from "@/hooks/useFetchSavedByUserName";
import TabButton from "@/src/components/TabButton/TabButon";
import { useUser } from "@/hooks/useUser";

import {
  ProfileCard,
  ProfileBanner,
  ProfileInfo,
  ProfileTabButton,
} from "../components/profile.styles";
import useModal from "@/src/features/modal/useModal";
import useLoadImage from "@/hooks/useLoadImage";

const Profile = ({ params }) => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [isUser, setIsUser] = useState(false);
  const { user } = useUser();
  const {openModal} = useModal();

  const { feed, isLoadingData, profile } = useFetchProfilePosts(
    params.user_name
  );
  const { feed: savedFeed, isLoadingData: isLoadingSaved } =
    useFetchSavedPostsByUserName(params.user_name);

  useEffect(() => {
    if (user?.id === profile?.id) {
      setIsUser(true);
    }
  }, [user, profile]);

  const bannerImg = useLoadImage(profile?.banner_url)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFollowersClick = () => {
    console.log("seguidores");
  };

  const handleFollowingClick = () => {
    console.log("seguindo");
  };

  const handleEdit = () => {
    openModal("edit", {
      profile: profile
    })
  }

  return (
    <main>
      <ProfileCard>
        {/* Banner */}
        <ProfileBanner src={bannerImg ? bannerImg : "/images/banner.jpg"} alt="banner" />

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

{/* Botão seguir e editar perfil */}
        {isUser ? (
          <Button
            style={{
              marginLeft: "auto",
              marginRight: "10px",
              marginTop: "10px",
              width:"80px"
            }}

            onClick={handleEdit}
          >
            Editar Perfil
          </Button>
        ) : (
          <Button
            style={{
              marginLeft: "auto",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            Seguir
          </Button>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
            alignSelf: "flex-end",
            marginTop: "75px",
            marginRight: "15px",
          }}
        >
          {/* Seguidores */}
          <span style={{ display: "flex", gap: "8px", cursor: "pointer" }}>
            <Typography onClick={handleFollowersClick} variant="semi_bold">
              Seguidores
            </Typography>
            <Typography style={{ fontSize: "0.9rem" }}>20</Typography>
          </span>
          {/* Seguindo */}
          <span style={{ display: "flex", gap: "8px", cursor: "pointer" }}>
            <Typography onClick={handleFollowingClick} variant="semi_bold">
              Seguindo
            </Typography>
            <Typography style={{ fontSize: "0.9rem" }}>20</Typography>
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

      <div style={{ paddingTop: "26px" }}>
        {activeTab === "Posts" ? (
          <Feed feed={feed} isLoading={isLoadingData} />
        ) : (
          <Feed feed={savedFeed} isLoading={isLoadingSaved} />
        )}
      </div>
    </main>
  );
};

export default Profile;
