import styled, { css } from 'styled-components';
import { device } from '@/style/Breakpoints';

export const SideBarButton = styled.button`

    ${({active}) => active && css`
        background-color: #008000b3;
        color:white;
        transform: scale(1.05);
    `};

    border: none;
    border-radius: 5px;

    width: 225px;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 5px;

    font-family: ${({theme}) => theme.fonts.roboto_condenced};
    font-size: 1.25rem;
    padding-left: 15px;

    transition: all 0.2s;

    &:hover{
        background-color: #008000b3;
        transform: scale(1.05);
        color: white;
    }

    @media ${device.lg}{
      width:fit-content;
      padding-right: 15px;
    }
`

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 30px;
    background-color: ${({theme,bgcolor}) => bgcolor || theme.colors.secondary};
    color: ${ ({ theme, bgcolor }) => bgcolor ? theme.colors.secondary :  "#fff" };

    ${({ bgcolor }) =>
    bgcolor &&
    css`
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: #fff;
      }
    `}
`