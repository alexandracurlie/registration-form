import React, { memo } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export type ITitle = {
  children: string;
}

export const Title = memo(({children}: ITitle) => {
  return (
    <StTitle>
      {children}
    </StTitle>
  )
})

const StTitle = styled.h1`
  color: ${Colors.blue};
  font-weight: bold;
  letter-spacing: 1px;
`;
