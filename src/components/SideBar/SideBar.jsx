import { StySideBar, WrapSideBar } from "./SideBar.styles";
import { SideBarButton } from "../../../src/components/buttons/button";
import useModal from "@/src/features/modal/useModal";
import SideBarItem from "./SideBarItem";

import { AiOutlineHome } from "react-icons/Ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
import { BsChatLeftDots, BsBookmark } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const SideBar = () => {
  const profileImg = "/icons/person-circle.svg";

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

  return (
    <WrapSideBar>
      <StySideBar>
        {routes.map((item) => (
          <SideBarItem key={item.label} {...item} />
        ))}

        {/* Logar */}
        <SideBarButton onClick={openModal}>
          <CiLogout />
          <p>Logar</p>
        </SideBarButton>

        {/* Deslogar */}
        <SideBarButton>
          <CiLogout />
          <p>Deslogar</p>
        </SideBarButton>
      </StySideBar>
    </WrapSideBar>
  );
};

export default SideBar;
