import React from 'react';
import styled from 'styled-components';

const Footer = ({ move }) => {
  return (
    <Footers move={move}>
      <Team>
        <p>Team of Use</p>
      </Team>
      <Adress>
        B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic of
        Korea <br /> <br /> Founder : John (Yi.su.min)
        <br /> Email : waynehills.ventures@gmail.com
      </Adress>
    </Footers>
  );
};

const Footers = styled.div`
  display: flex;
  margin: 3vw 0 5vw;
  padding-top: ${(props) => (props.move && '85vh') || '20vh'};
  color: white;
`;
const Team = styled.div`
  width: 20%;
  padding-left: 1.5vw;
  font-size: 12.8px;
  font-weight: 500;
  p {
    width: 72px;
    border-bottom: solid 3px white;
    font-weight: 700;
  }
`;
const Adress = styled.div`
  font-size: 0.8rem;
`;

export default Footer;
