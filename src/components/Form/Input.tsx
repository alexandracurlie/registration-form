import React, { useState } from 'react';
import { Colors } from '../../styles/Colors';
import { Secure } from './Secure';
import { IField } from '../../utils/types';
import styled from 'styled-components';

export const Input = ({label, name, type, placeholder, secure, autoComplete='off', onChange, isValid, error}: IField) => {

  const [password, setPassword] = useState(false);

  const toggleSecure = () => {
    setPassword(!password);

    const input = document.getElementById(name) as HTMLInputElement;
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  return (
    <Container>
      <label htmlFor={name}> {label}
        <div className={"wrapper"}>
          <input
            placeholder={placeholder}
            defaultValue={''}
            type={type}
            id={name}
            autoComplete={ autoComplete }
            onChange={onChange}
          />
          {secure && <Secure show={password} onClick={toggleSecure}/>}
        </div>
        <div className={'error'}>
          {!isValid && <p>{error}</p>}
        </div>
      </label>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  
  label {
    display: flex;
    flex-direction: column;
    color: ${Colors.blue};
  }
  
  .wrapper {
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${Colors.darkGray};
    border: 1px solid ${Colors.blue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  input {
    border-radius: 10px;
    background-color: ${Colors.darkGray};
    color: ${Colors.blue};
    border: none;
    padding: 15px 50px 15px 15px;
    font-family: inherit;
    width: 100%;
    outline: none;
    
    &::placeholder {
      color: ${Colors.darkBlue};
    }
  }
  
  .error {
    align-self: center;
    margin-top: 10px;
    height: 20px;
  }
`;
