"use client";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
  width: 400px;
  height: 600px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.neutral};
`;

const Login = ({handleCloseLoginModal}) => {


  return (
    <LoginContainer>
      <LoginModal>
        <button onClick={handleCloseLoginModal}>
            <AiOutlineClose />
        </button>

        <div>

        </div>
      </LoginModal>
    </LoginContainer>
  );
};

export default Login;
