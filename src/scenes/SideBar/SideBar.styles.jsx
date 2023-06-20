import { styled } from "styled-components";

export const StySideBar = styled.div`
    position: sticky;
    height: 100%;
    width: 250px;
    border-right: 3px solid;
    border-color: ${({theme}) => theme.colors.secondary};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    padding-top: 12px;

    & svg{
        width: 35px;
        height: 35px;
    }
`