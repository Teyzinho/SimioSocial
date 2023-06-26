import React, { useState } from "react";
import { StySideBar, WrapSideBar } from "./SideBar.styles";
import { SideBarButton } from "../../../src/components/buttons/button";
import Image from "next/image";
import Login from "../login/Login";
import { AiOutlineHome } from "react-icons/Ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
import { BsChatLeftDots, BsBookmark } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

const SideBar = () => {

    // Estado para controlar a exibição da modal de login
    const [showLoginModal, setShowLoginModal] = useState(false);

    // Função para abrir a modal de login
    const handleOpenLoginModal = () => {
      setShowLoginModal(true);
    };

    const handleCloseLoginModal = () => {
      setShowLoginModal(false);
    };

  return (
    <WrapSideBar>
      {showLoginModal && <Login handleCloseLoginModal={handleCloseLoginModal}/>}

      <StySideBar>
        {/* Pag Inicial */}
        <Link href="/">
          <SideBarButton>
            <AiOutlineHome />
            <p>Página Inicial</p>
          </SideBarButton>
        </Link>

        {/* Notificações */}
        <Link href="/notification">
          <SideBarButton>
            <IoMdNotificationsOutline />
            <p>Notificações</p>
          </SideBarButton>
        </Link>

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
        <Link href="/profile">
          <SideBarButton>
            <Image
              src="/icons/person-circle.svg"
              alt="profile-icon"
              width={30}
              height={30}
            />
            <p>Perfil</p>
          </SideBarButton>
        </Link>

        {/* Logar */}
        <SideBarButton onClick={handleOpenLoginModal}>
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
