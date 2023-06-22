import { styled } from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: #0D0D0D;
  display: flex;
  color: white;
  align-items: center;
  position: sticky;
  top: 0;
  gap: 5px;
  padding: 5px 15px;
  z-index: 999;

  & h1{
    font-family: ${({theme}) => theme.fonts.roboto_condensed};
    font-style: normal;
    font-weight: 200;
    font-size: 28px;
  }
`;
