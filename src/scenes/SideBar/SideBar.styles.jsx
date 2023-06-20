import { styled } from "styled-components";

export const StySideBar = styled.div`
    position: fixed;
    height: 100%;
    width: 250px;
    border-right: 3px solid;
    border-color: ${({theme}) => theme.colors.secondary};
`