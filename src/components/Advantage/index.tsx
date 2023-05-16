import * as S from './styles'
import imgPeople from '../../../public/img/advantage/people.svg'
import imgFeelings from '../../../public/img/advantage/feelings.svg'
import imgDocument from '../../../public/img/advantage/document.svg'
import TextAnimation from '../textAnimation/AnimatedText'
import TitleAnimation from '../textAnimation/AnimatedTitle'

const Advantage = () => {
  return (
    <S.Wapper>
      <TitleAnimation text='Solo aquí encontrarás estas ventajas' />
      <S.Container id='Price'>
        <S.advantage>
          <S.imageMotion
            src={imgPeople.src}
            width={100}
            height={100}
            alt="Imagen que representa un grupo de 3 personas"
            animate={{
              y: [-10, 1, -10],
              transition: {
                delay: 0.5,
                duration: 3,
                yoyo: Infinity,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}

          />
          <TextAnimation text='Profesionales dispuestos a ayudarte.' />
        </S.advantage>
        <S.advantage>
          <S.imageMotion
            src={imgDocument.src}
            width={100}
            height={100}
            alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
            animate={{
              y: [-10, 1, -10],
              transition: {
                delay: 0.2,
                duration: 3,
                yoyo: Infinity,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <TextAnimation text='Un plan nutricional personalizado para tu evolucion fisica y mental.' />
        </S.advantage>
        <S.advantage>
          <S.imageMotion
            src={imgFeelings.src}
            alt="Logo de Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
            width={100}
            height={100}
            animate={{
              y: [-10, 1, -10],
              transition: {
                delay: 0.5,
                duration: 3,
                yoyo: Infinity,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <TextAnimation text='Tenemos un ambiente amigable y acogedor.' />
        </S.advantage>
      </S.Container>
    </S.Wapper >
  )
}

export default Advantage
