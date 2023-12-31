import styled, {css} from "styled-components";
import { device } from "@/style/Breakpoints";

export const SearchContainer = styled.div`
  position: relative;
  width: 450px;
  height: 35px;
  flex: 0 0 500px;

  & form {
    height: 100%;
    width: 100%;
  }

  & input {
    border-radius: 25px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `}

    height: 100%;
    padding-left: 16px;
    width:100%;

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

  @media ${device.md}{
    width: 50px;
    flex: 0 0 0;

    ${({ isOpen }) =>
      isOpen &&
      css`
        width:70%;
        position:absolute;
        left: 50%;
        transform: translate(-50%);
    `}

    & input{
      width:40px;

      ${({ isOpen }) =>
      isOpen &&
      css`
        width:100%;
    `}
    }
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

export const UlContainer = styled.ul`

  color: black;

  & li {
    width:100%;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.neutral};

    & a {
      padding:15px;

    }

    &:hover{
      filter: brightness(0.8);
    }
  }
`