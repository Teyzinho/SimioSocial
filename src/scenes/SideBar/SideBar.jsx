import React from "react";
import { StySideBar, WrapSideBar } from "./SideBar.styles";
import { SideBarButton } from "../../../src/components/buttons/button";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/Ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
import { BsChatLeftDots, BsBookmark } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

const SideBar = () => {
  return (
    <WrapSideBar>
      <StySideBar>
        {/* Pag Inicial */}
        <Link href="/">
          <SideBarButton>
            <AiOutlineHome />
            <p>Página Inicial</p>
          </SideBarButton>
        </Link>

        {/* Notificações */}
        <SideBarButton>
          <IoMdNotificationsOutline />
          <p>Notificações</p>
        </SideBarButton>

        {/* Mensagens */}
        <SideBarButton>
          <BsChatLeftDots />
          <p>Mensagens</p>
        </SideBarButton>

        {/* Posts Salvos */}
        <SideBarButton>
          <BsBookmark />
          <p>Posts Salvos</p>
        </SideBarButton>

        {/* Perfil */}
        <SideBarButton>
          <Image
            src="/icons/person-circle.svg"
            alt="profile-icon"
            width={30}
            height={30}
          />
          <p>Perfil</p>
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
