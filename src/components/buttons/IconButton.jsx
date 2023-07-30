import styled from 'styled-components';
import { device } from "@/style/Breakpoints";

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${({ theme, color }) => color || theme.colors.primary};
  transition: all 0.2s;
  font-size: 0.8rem;

  & svg {
    width: ${({ width }) => width || "17px"};
    height: 17px;
    padding: ${({ padding }) => padding || "10px"};
    border-radius: 100%;

    @media ${device.sm} {
      width: ${({ width }) => width || "15px"};
      height: 15px;
      padding: ${({ padding }) => padding || "5px"};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    & svg {
      background-color: #0080001c;
    }
  }

  @media ${device.sm} {
    font-size: 0.8rem;
  }
  @media ${device.xs} {
    font-size: 0.6rem;
  }
`;

