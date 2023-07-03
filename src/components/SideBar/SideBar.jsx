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

const SideBar = () => {
  const session = useSession();
  const supabase = useSupabaseClient()
  const [profile, setProfile] = useState(null)
  const router = useRouter();

  // const profileImg = "/icons/person-circle.svg";
  // const profileImg = (profile?.avatar_url ?  profile?.avatar_url : "/icons/person-circle.svg");

  const [profileImg, setProfileImg] = useState("/icons/person-circle.svg");


  const pathName = usePathname();
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
      icon: profileImg,
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

  useEffect(() => {
    if(session){
      supabase.from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .then(result => {
        if(result.data.length){
          setProfile(result.data[0])
        }
      })
    }
  }, [session])

  useEffect(() => {
    const avatarUrl = profile?.avatar_url || "/icons/person-circle.svg";
    setProfileImg(avatarUrl);
  }, [profile]);

  return (
    <WrapSideBar>
      <StySideBar>
        {routes.map((item) => (
          <SideBarItem key={item.label} {...item} />
        ))}

        {/* Logar e Deslogar*/}

        {session ? (
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
