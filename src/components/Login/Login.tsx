import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Form/Input';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { emailValidation } from '../../utils/helpers';
import { Colors } from '../../styles/Colors';
import { IField } from '../../utils/types';

const loginInputs: IField[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email...',
    icon: 'email',
    error: 'Your email has no sense',
    autoComplete: 'off',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password...',
    icon: 'eye.js',
    secure: true,
    type: 'password',
    autoComplete: 'new-password',
  },
]

export const Login = () => {

  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [valid, setValid] = useState(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({...state, [e.target.id]: e.target.value})
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValid(emailValidation(state.email))
    alert(`email: ${state.email}, password: ${state.password}`)
  }

  return (
    <Container>
      <Title>Login</Title>
      <div className={"content"}>
        <form onSubmit={onSubmit}>
          {loginInputs.map(item => (
            <Input
              key={item.name}
              onChange={onChange}
              isValid={valid}
              { ...item }
            />)
          )}
          <div className={"button_container"}>
            <Button
              children={"Login"}
              type={"submit"}
            />
          </div>
        </form>
        <div className={"description"}>
          <p>Don't have an account?</p>
          <a>Sign Up</a>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 20px;
  
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    width: 100%;
  }
  
  form {
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 10px;
  }
  
  .button_container {
    width: 100%;
    padding: 10px 60px;
  }
  
  .description {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    color: ${Colors.darkBlue};
    margin: 0 auto;
    
    a {
      color: ${Colors.blue};
    }
  }
`;
