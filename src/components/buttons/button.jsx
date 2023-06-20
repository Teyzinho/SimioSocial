import { styled } from "styled-components";

export const SideBarButton = styled.button`
    border: none;
    border-radius: 5px;

    width: 225px;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 5px;

    font-family: ${({theme}) => theme.fonts.roboto_condenced};
    font-size: 1.5rem;
    padding-left: 15px;

    transition: all 0.2s;

    &:hover{
        background-color: #008000b3;
        transform: scale(1.05);
        color: white;
    }
    
`