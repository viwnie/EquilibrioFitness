import * as S from './styles'
import heroImg from '../../../public/img/hero/Background.jpg'
import TitleAnimation from '../textAnimation/AnimatedTitle'
import ButtonAnimated from '../ButtonAnimated'

function Hero() {
  return (
    <>
      <S.Slide src={heroImg.src}>
        <S.Content>
          <span>MAKE YOUR BODY</span>
          <h1>FIT & PERFECT</h1>
          <h2>FIND YOUR ENERGY</h2>
          <ButtonAnimated text='Empezar Hoy !' link='https://easy.trainingym.com/equilibriofitness' />
        </S.Content>
      </S.Slide>
    </>
  )
}

export default Hero
