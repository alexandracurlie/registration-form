import React, { memo } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import { IButton } from '../../utils/types';

export const Button = memo(({children = 'Next', type = 'submit', onClick}: IButton) => {

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  )
})

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: ${Colors.blue};
  color: ${Colors.darkGray};
  border-radius: 10px;
  font-weight: bold;
`;
