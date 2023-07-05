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
  padding: 5px 15px;
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

  &>:last-child{
    flex: 0 0 200px;
    margin-right: 52px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 450px;
  height: 35px;
  flex: 0 0 500px;

  & input {
    border-radius: 50px;
    height: 100%;
    padding-left: 16px;

    &::placeholder{
      padding-left: 16px;
    }

    &:focus {
      + label {
        opacity: 0;
      }
      &::placeholder{
      padding-left: 0px;
    }
    }
  }

  @media ${device.lg}{
    display: none;
  }
`;

export const GlassLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: gray;
  color: gray;
  opacity: ${({ show }) => (show ? 1 : 0)};

  svg {
    width: 100%;
    height: 100%;
  }
`;