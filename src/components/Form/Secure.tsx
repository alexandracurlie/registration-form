import React from 'react';
import { Eye, EyeOff } from '../../images/svg';
import styled from 'styled-components';

type Props = {
  show: boolean;
  onClick: () => void;
}

export const Secure = ({show, onClick}: Props) => {

  return(
    <Container onClick={onClick}>
      {show ? <Eye /> : <EyeOff />}
    </Container>
  )
}

const Container = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
`;
