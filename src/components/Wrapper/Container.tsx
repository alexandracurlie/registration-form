import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import { Login } from '../Login/Login';

export const Container = () => {

  return (
    <Wrapper>
      <div className={"column column_left"}></div>
      <div className={"column"}>
        <Login />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  height: 70%;
  border: 1px solid ${Colors.blue};
  border-radius: 20px;
  background-color: ${Colors.gray};
  overflow: hidden;
  
  .column {
    flex: 1;
    background-color: ${Colors.gray};
  }
  
  .column_left {
    background-color: ${Colors.blue};
  }
`;
