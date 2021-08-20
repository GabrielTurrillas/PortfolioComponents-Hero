import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, GlobalStyles } from '../../styles';

const PrimaryButton = ({ english, engButtonText, buttonText, contactUrl }) => {
  return (
    <>
      {console.log('contactUrl', contactUrl)}
      <GlobalStyles />
      <Container to={contactUrl}>
        {english ? engButtonText : buttonText}
      </Container>
    </>
  )
}

export default PrimaryButton

const Container = styled(Link)`
  text-decoration:none;
  background:${colors.prmary};
  width:fit-content;
  height:fit-content;
  padding: 1rem 2rem;
  border-radius:50px;
  color:black;
  font-weight:bold;
  &:hover {
    transform: scale(1.1);
    transition: .5s;
  }
  &:active {
    transform: scale(0.9);
    background: ${colors.prmary};
  }
`
