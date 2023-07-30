import { device } from "@/style/Breakpoints";
import styled from "styled-components";

export const WrapSideBar = styled.div`
    flex: 0 0 225px;
    position: relative;

    @media ${device.lg}{
        width: fit-content;
        flex: 0 0 65px;
    }
    @media ${device.sm}{
        position: fixed;
        bottom: 0;
        z-index: 9999;
    }
`

export const StySideBar = styled.div`
    position: fixed;
    height: 100%;
    width: 225px;
    border-right: 3px solid;
    border-color: ${({theme}) => theme.colors.secondary};
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    padding-top: 12px;

    & > :last-child{
        margin-top: auto;
        margin-bottom: 100px;
    }

    & svg{
        width: 35px;
        height: 35px;
    }

    @media ${device.lg}{
        width: fit-content;
        & p{
            display: none;
        }
    }
    @media ${device.sm}{
        border: none;
        padding: 0;
        bottom: 0;
        height: fit-content;
        width: 100%;
        justify-content: space-around;
        background-color: ${({theme}) => theme.colors.neutral};
        
        flex-direction: row;
        & > :last-child{
            margin-bottom: 0;

    }
    }
`