"use client";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/Ai";
import useModal from "@/src/features/modal/useModal";

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react"
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const LoginContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: #00000040;
`;

const LoginModal = styled.div`
  position: relative;
  width: 400px;
  height: fit-content;
  border-radius: 5px;
  /* background-color: ${({ theme }) => theme.colors.neutral}; */
  background-color: #212226;
  padding: 25px 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: white;
`;

const AuthModal = ({ onClose }) => {

  // const supabase = createClientComponentClient()
  const supabaseClient = useSupabaseClient();
  const {session} = useSessionContext();
  const router = useRouter();


  useEffect(() => {
    if(session){
      onClose();
    }
    
  },[session, router, onClose]);


  return (
    <LoginContainer>
      <LoginModal>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        <div>
          <Auth
            supabaseClient={supabaseClient}
            appearance={{
              theme:ThemeSupa
            }}
            theme="dark"
            providers={["google"]}
        />
        </div>
      </LoginModal>
    </LoginContainer>
  );
};

export default AuthModal;
