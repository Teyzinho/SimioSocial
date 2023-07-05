import styled from "styled-components";
import { device } from "@/style/Breakpoints";

export const WhoFollowCard = styled.div`
    width: 290px;
    height: 300px;
    flex: 0 0 290px;
    border: 3px solid ${({theme}) => theme.colors.secondary};
    border-radius: 5px;

    @media ${device.xl} {
        display: none;
        flex: 0 0 0;
  }

`
export const WhoFollowWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-right: 24px;
    margin-top: 24px;

    @media ${device.xl} {
        display: none;
  }
`