import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles/sylesVariables'

const Hero = ({ english }) => {
  return (
    <Containter>
      {console.log(english)}
      <HeroBg>
        <VideoBg autoPlay loop muted src='https://portafoliosvideobackground.s3.amazonaws.com/video.mp4' type='video/mp4' />
      </HeroBg>
      <Grid>
        <TextArea>
          {english ?
            <HeroH1>Hi!, I'm <Magenta>Gabriel Turrillas</Magenta>.
              I'm a full-stack web developer.
              Let's work
              <Magenta> together</Magenta>!
            </HeroH1>
            :
            <HeroH1>Hola!, mi nombre es <Magenta>Gabriel Turrillas</Magenta>. Soy desarrollador web full-stack.
              Trabajemos<Magenta> juntos</Magenta>!</HeroH1>
          }
        </TextArea>
        <ButtonArea>
          <ContactButton to='/contact'>
            {english ? 'Contact' : 'Contacto'}
          </ContactButton>
        </ButtonArea>
      </Grid>
    </Containter>
  );
}

export default Hero;

const ContactButton = styled(Link)`
  padding: 1rem 2rem;
  color: black;
  height:fit-content;
  width:fit-content;
  background:${colors.prmary};
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-family: 'Encode Sans Expanded', sans-serif;
  &:hover {
    background:${colors.prmary};
    transition: .5s;
  }
  &:active {
    transform: scale(0.9);
    background: ${colors.prmary};
  }
  @media screen and (max-width: 480px) {
    font-size:10px;
    padding: 10px 1rem;
  }
`

const Magenta = styled.span`
  color: ${colors.secondary};
`

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-family: 'Encode Sans Expanded', sans-serif;
  margin:0 15rem;
  @media screen and (max-width:1050px) {
    margin:1rem;
  }
  @media screen and (max-width: 768px){
    font-size: 2rem;
  }
  @media screen and (max-width: 433px){
    font-size: 20px;
  }
`

const TextArea = styled.div`
  display:flex;
  justify-content:center;
  margin-top:15rem;
  align-items:center;
  color:white;
  z-index:1;
  @media screen and (max-width: 768px){
    margin-top:10rem;
  }
`
const ButtonArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:start;
  color:white;
  z-index:1;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  z-index: 1;
  height: 100vh;
  width:100%;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index:0;
`;

const Containter = styled.div`
    position:relative;
    height: 100vh;
  `
