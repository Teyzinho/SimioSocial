import React from 'react';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IconButton = ({ icon }) => {
  return <StyledIconButton>{icon}</StyledIconButton>;
};

export default IconButton;
