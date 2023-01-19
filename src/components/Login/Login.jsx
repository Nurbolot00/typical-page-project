import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import { useEffect } from 'react';
import styled from 'styled-components';


const LoginCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 500px;
  margin:  0 auto;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`

const ControlContainer = styled.div`
     margin: 1rem 0;
     display: flex;
     align-items: stretch;
     flex-direction: column;

     @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
}
`

const ControlInput = styled.input`
 display: block;
 flex: 3;
 font: inherit;
 padding: 0.35rem 0.35rem;
 border-radius: 6px;  
 border: 1px solid #ccc;

 &:focus {
  outline: none;
  border-color: #4f005f;
  background: #f6dbfc;
}
`

const ControlLabel = styled.label`
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
  display: block;
`

const ControlActions = styled.div`
     text-align: center;
`

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  useEffect(()=>{
    setFormIsValid(
       enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
      setFormIsValid(
        enteredPassword.trim().length > 6 && enteredEmail.includes('@')
      );
  },[enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <LoginCard>
      <form onSubmit={submitHandler}>
        <ControlContainer>
          <ControlLabel htmlFor="email">E-Mail</ControlLabel>
          { emailIsValid ===false ? <ControlInput
            style={{borderColor: 'red',
                background: '#fbdada'}}
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          /> : <ControlInput
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />}
        </ControlContainer>
        <ControlContainer>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          {passwordIsValid === false ? <ControlInput
            style={{borderColor: 'red',
            background: '#fbdada'}}
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          /> : <ControlInput
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />}
        </ControlContainer>
        <ControlActions>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </ControlActions>
      </form>
    </LoginCard>
  );
};

export default Login;
