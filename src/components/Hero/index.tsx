import * as S from './styles'
import heroImg from '../../../public/img/hero/Background.jpg'
import ButtonAnimated from '../ButtonAnimated'

import { Reveal } from '../utils/Reveal';
import { RevealTitle } from '../utils/RevealTitle';
import { RevealSubTitle } from '../utils/RevealSubTitle';

function Hero() {
  return (
    <>
      <S.Slide id='Home' src={heroImg.src}>
        <S.Content>
          <RevealTitle>
            <span>ENCUENTRA TU EQUILIBRIO</span>
          </RevealTitle>
          <RevealSubTitle>
            <h1>SUPERA TUS LÍMITES,</h1>
          </RevealSubTitle>
          <Reveal>
            <h2>TRANSFÓRMATE</h2>
          </Reveal>
          <ButtonAnimated href='#Price' text='Empezar Hoy !' id='Price' />
        </S.Content>
      </S.Slide>
    </>
  )
}

export default Hero
