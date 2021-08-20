import React from 'react';
import styled from 'styled-components';
import { colors, GlobalStyles, device } from '../../styles';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const HeroMovileFirst = ({ english, engButtonText, buttonText, contactUrl }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <HeroBg>
          <VideoBg autoPlay loop muted /* src='https://portafoliosvideobackground.s3.amazonaws.com/video.mp4' */ type='video/mp4' />
        </HeroBg>
        <Grid>
          <TextArea>
            {english ?
              <H1>Hi!, I'm <Magenta>Gabriel Turrillas</Magenta>.
                I'm a Front end web developer.
                Let's work
                <Magenta> together</Magenta>!
              </H1>
              :
              <H1>Hola!, mi nombre es <Magenta>Gabriel Turrillas</Magenta>. Soy desarrollador web Front end.
                Trabajemos<Magenta> juntos</Magenta>!</H1>
            }
          </TextArea>
          <ButtonArea>
            <PrimaryButton english={english} engButtonText={engButtonText} buttonText={buttonText} contactUrl={contactUrl} />
          </ButtonArea>
        </Grid>
      </Container>
    </>
  )
}

export default HeroMovileFirst;

const Container = styled.div`
  position:relative;
  height:100vh;
`

const HeroBg = styled.div`
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100%;
  height:100%;
  overflow:hidden;
  z-index:0;
`

const VideoBg = styled.video`
  width:100%;
  height:100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colors.background};
`

const Grid = styled.div`
  display: grid;
  grid-template-rows:4fr 1fr;
  grid-template-areas:'TextArea'
                      'ButtonArea';
  height:100vh;
  color:white;
`

const TextArea = styled.div`
  display:flex;
  grid-area:TextArea;
  align-items:center;
  justify-content:center;
  z-index:999;
`

const H1 = styled.h1`
  font-size:1.4rem;
  text-align:center;
`

const Magenta = styled.span`
  color: ${colors.secondary};
`

const ButtonArea = styled.div`
  display:flex;
  grid-area:ButtonArea;
  align-items:center;
  justify-content:center;
  z-index:999;
`


