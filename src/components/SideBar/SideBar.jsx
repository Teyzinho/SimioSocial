import { StySideBar, WrapSideBar } from "./SideBar.styles";
import { SideBarButton } from "../../../src/components/buttons/button";
import useModal from "@/src/features/modal/useModal";
import SideBarItem from "./SideBarItem";

import { AiOutlineHome } from "react-icons/Ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
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
  const { user } = useUser();
  const profile = useGetProfileById(user?.id);
  const routes = useMemo(() => [
    {
      icon: AiOutlineHome,
      label: "Página Inicial",
      active: pathName === "/",
      href: "/",
    },
    {
      icon: IoMdNotificationsOutline,
      label: "Notificações",
      active: pathName === "/notification",
      href: "/notification",
    },
    {
      icon: BsChatLeftDots,
      label: "Mensagens",
      active: pathName === "/messages",
      href: "/messages",
    },
    {
      icon: BsBookmark,
      label: "Posts Salvos",
      active: pathName === "/saved_posts",
      href: "/saved_posts",
    },
    {
      icon: (user?.user_metadata.avatar_url || profileImg),
      label: "Perfil",
      active: pathName === "/profile",
      href: "/profile",
    },
  ]);
  const { openModal } = useModal();

  const logout = async () => {
    await supabase.auth.signOut();
    setProfileImg("/icons/person-circle.svg"); // Redefinir a imagem do perfil imediatamente
    router.refresh();
  }
  
  console.log(profile?.avatar_url)

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
          <SideBarButton onClick={openModal}>
            <CiLogin />
            <p>Logar</p>
          </SideBarButton>
        )}

      </StySideBar>
    </WrapSideBar>
  );
};

export default SideBar;
