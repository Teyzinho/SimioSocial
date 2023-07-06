import { styled } from "styled-components";

export const ToogleMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  position: absolute;
  color: #fff;
  right: 0;
  border-radius: 5px;
  overflow: hidden;
  z-index: 99;

  & li {
    padding: 15px 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    min-width: 100px;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
