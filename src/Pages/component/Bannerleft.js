import React from 'react';
import styled from 'styled-components';

const Bannerleft = (props) => {
  return (
    <Form>
      <Logo src="http://ttv.waynehills.co/assets/logo.png" />
      <Login>Login</Login>
      <DashBood>DashBood(Beta)</DashBood>
    </Form>
  );
};
const Form = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3vw 0 0 3vw;
  width: 30%;
  height: 100vh;
  background-color: black;
  color: white;
`;
const Logo = styled.img`
  width: 200px;
  height: 57px;
  cursor: pointer;
`;
const Login = styled.div`
  margin: 5vw 0 4vw 1vw;
  cursor: pointer;
`;
const DashBood = styled.div`
  margin-left: 1vw;
  cursor: pointer;
`;

export default Bannerleft;
