import React from 'react';
import styled from 'styled-components';

const MyCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 600px;
  margin:  0 auto;
`

const Card = (props) => {
  return (
    <MyCard className={`${props.className}`}>{props.children}</MyCard>
  );
};

export default Card;
