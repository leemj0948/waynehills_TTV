import React from 'react';
import styled from 'styled-components';

const BannerRight = (props) => {
  return (
    <Form>
      <Tag>Powered by Shutterstock</Tag>
    </Form>
  );
};
const Form = styled.div`
  position: absolute;
  right: 0;
  background-color: black;
  width: 5vw;
  height: 100vh;
  flex-grow: 1;
  flex-basis: 0;
  writing-mode: vertical-rl;
`;
const Tag = styled.p`
  padding: 0 2.5rem 3rem 0;
  writing-mode: vertical-rl;
  color: #fff;
  text-align: right;
`;

export default BannerRight;
