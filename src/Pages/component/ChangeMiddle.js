import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const ChangeMiddle = ({ move }) => {
  const [count, setCount] = useState('');
  const handleInput = (e) => {
    setCount(e.target.value);
  };
  const PLACEHOLDER = 'Put your script here 500~5,000 letters.';
  return (
    <Form>
      <Movement move={move}>
        <Input
          placeholder={PLACEHOLDER}
          onChange={(e) => handleInput(e)}
        ></Input>
        <Counter>{count.length} letters</Counter>
        <ConvertBtn disabled={count.length === 0 && true}>Convert</ConvertBtn>
      </Movement>
      <Footer move={move} />
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
`;
const Movement = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  top: -100vh;
  right: -100vw;
  transform: ${(props) => props.move && `translate(-110vw, 60vw)`};
  transition: all 2s;
`;
const Input = styled.textarea`
  padding: 2rem;
  min-height: 480px;
  min-width: 640px;
  border: 0.2rem solid #fff;
  color: #fff;
  outline: none;
  resize: none;
  background: #13141480;
  ::placeholder {
    display: block;
    color: white;
    text-align: center;
    font-size: 2rem;
  }
`;
const Counter = styled.div`
  color: white;
  text-align: right;
  margin: 1rem 0;
`;
const ConvertBtn = styled.button`
  margin: 0.5rem 0.5rem 0.5rem 46rem;
  padding: 0.9rem 2rem;
  font-size: 1.3rem;
  font-family: Nanum Myeongjo, serif;
  width: 137px;
  height: 65px;
  border-radius: 5px;
`;

export default ChangeMiddle;
