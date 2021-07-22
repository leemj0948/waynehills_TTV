import React from 'react';
import styled from 'styled-components';
import Bannerleft from './component/Bannerleft';
import BannerRight from './component/BannerRight';
import ChangeMiddle from './component/ChangeMiddle';
import Middle from './component/Middle';

const main = (props) => {
  return (
    <Background>
      <Bannerleft />
      <BannerRight />
      <Title>TTV A.I</Title>
      {/* <Middle /> */}
      <ChangeMiddle />
    </Background>
  );
};
const Background = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
`;
const Title = styled.div`
  margin-left: 30%;
  padding-top: 5vw;
  width: 100%;
  height: 10vw;
  color: white;
`;

export default main;
