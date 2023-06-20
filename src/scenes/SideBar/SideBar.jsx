import React from "react";
import { StySideBar } from "./SideBar.styles";
import { SideBarButton } from "@/src/components/buttons/button";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/Ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
import {BsChatLeftDots,BsBookmark} from 'react-icons/bs'
import {CiLogout} from 'react-icons/ci'

const SideBar = () => {
  return (
    <div>
      <StySideBar>
        {/* Pag Inicial */}
        <SideBarButton>
          <AiOutlineHome />
          Página Inicial
        </SideBarButton>
        {/* Notificações */}
        <SideBarButton>
          <IoMdNotificationsOutline />
          Notificações
        </SideBarButton>
        {/* Mensagens */}
        <SideBarButton>
          <BsChatLeftDots/>
          Mensagens
        </SideBarButton>
        {/* Posts Salvos */}
        <SideBarButton>
          <BsBookmark/>
          Posts Salvos
        </SideBarButton>
        {/* Perfil */}
        <SideBarButton>
          <Image
            src="/icons/person-circle.svg"
            alt="profile-icon"
            width={30}
            height={30}
          />
          Perfil
        </SideBarButton>
        {/* Deslogar */}
        <SideBarButton>
          <CiLogout/>
          Deslogar
        </SideBarButton>
      </StySideBar>
    </div>
  );
};

export default SideBar;
