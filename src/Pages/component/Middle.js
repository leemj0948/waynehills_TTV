import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const Middle = (props) => {
  return (
    <Form>
      <CopyWrite>
        The easiest way
        <br /> to make a video
      </CopyWrite>
      <Btn>Start</Btn>
      <Footer />
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: 30%;
  width: 60%;
  height: 100vh;
  background-color: black;
  color: white;
  box-sizing: border-box;
`;

const CopyWrite = styled.h1`
  white-space: nowrap;
  font-size: 6.6rem;
  padding: 3rem 0 0;
  font-family: Nanum Myeongjo, serif;
  font-weight: 700;
`;
const Btn = styled.button`
  margin: 1.3rem;
  padding: 1.2rem 2rem;
  width: 12%;
  height: 4.5vw;
  font-size: 1.3rem;
  font-weight: 800;
  font-family: Nanum Myeongjo, serif;
  background-color: white;
  border-radius: 5px;
  color: black;
  text-align: center;
  cursor: pointer;

  :active {
    ransform: translate3d(0, 0, 0);
    transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),
      box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Middle;
