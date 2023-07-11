import styled from "styled-components";
import { device } from "@/style/Breakpoints";

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 5px 16px;
  z-index: 999;

  & h1 {
    font-family: ${({ theme }) => theme.fonts.roboto_condensed};
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
  }

  & a {
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
  }

  @media ${device.md} {
    justify-content: end;
    gap:12px;

    &>:first-child{
      margin-right: auto;
    }
  }

  &>:last-child{
    flex: 0 0 200px;
    margin-right: 52px;

    @media ${device.md} {
      margin-right: 0px;
  }
  }
`;