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
  FeedContainer,
} from "../components/profile.styles";
import useModal from "@/src/features/modal/useModal";
import useLoadImage from "@/hooks/useLoadImage";
import FollowButton from "@/src/components/followButton/FollowButton";
import useFetchFollowers from "@/hooks/useFetchFollowers";
import useFetchFollowing from "@/hooks/useFetchFollowing";
import Loading from "@/src/components/loading/Loading";

const Profile = ({ params }) => {

  const decodedUsername = decodeURIComponent(params.user_name);
  console.log("username", decodedUsername);

  const [activeTab, setActiveTab] = useState("Posts");
  const [isUser, setIsUser] = useState(false);
  const { user, isLoading } = useUser();
  const { openModal } = useModal();

  const { feed, isLoadingData, profile } = useFetchProfilePosts(
    decodedUsername
  );
  const { feed: savedFeed, isLoadingData: isLoadingSaved } =
    useFetchSavedPostsByUserName(decodedUsername);

  useEffect(() => {
    if (user?.id === profile?.id) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user, profile]);

  const bannerImg = useLoadImage(profile?.banner_url);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEdit = () => {
    openModal("edit", {
      profile: profile,
    });
  };

  const followersAmount = useFetchFollowers(profile?.id)
  const followingAmount = useFetchFollowing(profile?.id)

  if (isLoading || isLoadingData) {
    return <Loading/>;
  }

  return (
    <main>
      <ProfileCard>
        {/* Banner */}
        <ProfileBanner
          src={bannerImg ? bannerImg : "/images/banner.jpg"}
          alt="banner"
        />

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
              width: "80px",
            }}
            onClick={handleEdit}
          >
            Editar Perfil
          </Button>
        ) : (
          <div style={{
            marginLeft: "auto",
            marginRight: "10px",
            marginTop: "10px",
            width: "80px",
          }}>
            <FollowButton
              userId={user?.id}
              followId={profile?.id}
            />
          </div>

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
            <Typography variant="semi_bold">
              Seguidores
            </Typography>
            <Typography style={{ fontSize: "0.9rem" }}>{followersAmount}</Typography>
          </span>
          {/* Seguindo */}
          <span style={{ display: "flex", gap: "8px", cursor: "pointer" }}>
            <Typography variant="semi_bold">
              Seguindo
            </Typography>
            <Typography style={{ fontSize: "0.9rem" }}>{followingAmount}</Typography>
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
        <FeedContainer>
          {activeTab === "Posts" ? (
            <Feed
              feed={feed}
              isLoading={isLoadingData}
              title={feed.length === 0 ? "Sem Posts Ainda" : "Posts"}
            />
          ) : (
            <Feed
              feed={savedFeed}
              isLoading={isLoadingSaved}
              title={savedFeed.length === 0 ? "Sem Posts Salvos" : "Salvos"}
            />
          )}
        </FeedContainer>
      </div>
    </main>
  );
};

export default Profile;
