"use client"

import { StySideBar, WrapSideBar } from "./SideBar.styles";
import { SideBarButton } from "../../../src/components/buttons/button";
import useModal from "@/src/features/modal/useModal";
import SideBarItem from "./SideBarItem";

import { AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatLeftDots, BsBookmark } from "react-icons/bs";
import { CiLogout,CiLogin } from "react-icons/ci";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import useGetProfileById from "@/hooks/useGetProfileById";

const SideBar = () => {
  const supabase = useSupabaseClient()
  const router = useRouter();
  const [profileImg, setProfileImg] = useState("/icons/person-circle.svg");
  const pathName = usePathname();
  const { user , isLoading} = useUser();
  const profile = useGetProfileById(user?.id);
  const routes = useMemo(() => [
    {
      icon: AiOutlineHome,
      label: "Página Inicial",
      active: pathName === "/",
      href: "/",
    },
    // {
    //   icon: IoMdNotificationsOutline,
    //   label: "Notificações",
    //   active: pathName === "/notification",
    //   href: "/notification",
    // },
    // {
    //   icon: BsChatLeftDots,
    //   label: "Mensagens",
    //   active: pathName === "/messages",
    //   href: "/messages",
    // },
    {
      icon: BsBookmark,
      label: "Posts Salvos",
      active: pathName === "/saved_posts",
      href: "/saved_posts",
    },
    user && {
      icon: user?.user_metadata.avatar_url || profileImg,
      label: "Perfil",
      active: pathName === `/profile/${profile?.full_name}`,
      href: `/profile/${profile?.full_name}`,
    },
  ].filter(Boolean), [pathName, user, profileImg, profile]);

  const { openModal } = useModal();

  const logout = async () => {
    await supabase.auth.signOut();
    setProfileImg("/icons/person-circle.svg"); // Redefinir a imagem do perfil imediatamente
    router.replace("/");
  }

  const logIn = () =>{
    openModal("auth");
  }
  
  return (
    <WrapSideBar>
      <StySideBar>
        {routes.map((item) => (
          <SideBarItem key={item.label} {...item} />
        ))}

        {/* Logar e Deslogar*/}

        {user ? (
          <SideBarButton onClick={logout}>
            <CiLogout />
            <p>Deslogar</p>
          </SideBarButton>
        ) : (
          <SideBarButton onClick={logIn}>
            <CiLogin />
            <p>Logar</p>
          </SideBarButton>
        )}

      </StySideBar>
    </WrapSideBar>
  );
};

export default SideBar;
