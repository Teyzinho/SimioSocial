import { styled } from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  color: white;
  align-items: center;
  
`;
