import React, { memo, useState } from 'react';
import { Colors } from '../../styles/Colors';
import { Secure } from './Secure';
import { IField } from '../../utils/types';
import styled from 'styled-components';

export const Input = memo(({label, name, type, placeholder, secure, autoComplete='off', onChange, isValid, error}: IField) => {

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
            id={name}
            type={type}
            placeholder={placeholder}
            defaultValue={""}
            autoComplete={ autoComplete }
            onChange={onChange}
          />
          {secure && <Secure show={password} onClick={toggleSecure}/>}
        </div>
        <div className={"error"}>
          {!isValid && <p>{error}</p>}
        </div>
      </label>
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  
  label {
    display: flex;
    flex-direction: column;
    color: ${Colors.blue};
  }
  
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 10px;
    border: 1px solid ${Colors.blue};
    border-radius: 10px;
    background-color: ${Colors.darkGray};
  }

  input {
    width: 100%;
    padding: 15px 50px 15px 15px;
    background-color: ${Colors.darkGray};
    color: ${Colors.blue};
    border: none;
    border-radius: 10px;
    font-family: inherit;
    outline: none;
    
    &::placeholder {
      color: ${Colors.darkBlue};
    }
  }
  
  .error {
    height: 20px;
    margin-top: 10px;
    align-self: center;
  }
`;
