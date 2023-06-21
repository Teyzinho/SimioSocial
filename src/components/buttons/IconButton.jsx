import styled from 'styled-components';

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${({ theme, color }) => color || theme.colors.primary};
  transition: all 0.2s;

  & svg{
    width: 25px;
    height: 25px;
    padding: 10px;
    border-radius: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    & svg{
        background-color: #0080001c;
    }
  }
`;
