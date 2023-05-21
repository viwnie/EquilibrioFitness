import * as S from './styles'
import imgPeople from '../../../public/img/advantage/people.svg'
import imgFeelings from '../../../public/img/advantage/feelings.svg'
import imgDocument from '../../../public/img/advantage/document.svg'
import TextAnimation from '../textAnimation/AnimatedText'
import TitleAnimation from '../textAnimation/AnimatedTitle'

const Cards = [
  {
    id: 'card01',
    image: imgPeople.src,
    alt: 'Imagen que representa un grupo de 3 personas',
    text: 'Profesionales dispuestos a ayudarte.',
    delay: 0.4
  },
  {
    id: 'card02',
    image: imgDocument.src,
    alt: 'Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)',
    text: 'Un plan nutricional personalizado para tu evolucion fisica y mental.',
    delay: 0.8
  },
  {
    id: 'card03',
    image: imgFeelings.src,
    alt: 'Logo de Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)',
    text: 'Tenemos un ambiente amigable y acogedor.',
    delay: 1
  }
];

const Advantage = () => {
  return (
    <S.Wapper>
      <S.Container>
        {Cards.map((card) => (
          <S.advantage
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: Number(`${card.delay}`),
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            key={card.id}>
            <TitleAnimation text={card.text} />
            <S.imageMotion
              src={card.image}
              width={100}
              height={100}
              alt={card.alt}
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
            <TextAnimation text={card.text} />
          </S.advantage>
        ))}
      </S.Container>
    </S.Wapper >
  )
}

export default Advantage
