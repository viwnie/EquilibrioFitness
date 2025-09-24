import * as S from './styles'
import { FaCheck, FaUsers, FaDumbbell, FaBolt } from 'react-icons/fa'
import { RevealTitle } from '../utils/RevealTitle'
import { RevealSubTitle } from '../utils/RevealSubTitle'
import ButtonAnimated from '../ButtonAnimated'

const Prices = () => {
  const plans = [
    {
      id: 'reducidos',
      title: 'Grupos Reducidos',
      subtitle: '(2-5 pers.)',
      icon: <FaUsers />,
      color: '#4ECDC4',
      features: [
        '2 días/semana + 1 Sprint Session: 80€',
        '3 días/semana + 1 Sprint Session: 110€',
        'Máximo 5 personas por grupo',
        'Atención personalizada',
        'Parking gratuito (2 horas)'
      ],
      highlight: false
    },
    {
      id: 'funcional',
      title: 'Funcional',
      subtitle: '(Máx. 12 pers.)',
      icon: <FaDumbbell />,
      color: '#FF6B6B',
      features: [
        '2 días/semana: 55€',
        '3 días/semana: 65€',
        'Ilimitado + Sprint Sessions: 75€',
        'Clases dinámicas y variadas',
        'Parking gratuito (2 horas)'
      ],
      highlight: true
    },
    {
      id: 'sprint',
      title: 'Sprint Sessions',
      subtitle: '(ABS-HIIT-MOBILITY)',
      icon: <FaBolt />,
      color: '#FFE66D',
      features: [
        '3 sesiones: 40€',
        '5 sesiones: 55€',
        'Sesiones independientes',
        'Entrenamiento de alta intensidad',
        'Parking gratuito (2 horas)'
      ],
      highlight: false
    }
  ]

  return (
    <S.Wrapper id="Price">
      <S.Header>
        <RevealSubTitle>
          <h1>Nuestros</h1>
        </RevealSubTitle>
        <RevealTitle>
          <h2>Planes</h2>
        </RevealTitle>
        <S.Subtitle>
          Elige el plan que mejor se adapte a tus necesidades y objetivos
        </S.Subtitle>
      </S.Header>

      <S.PlansContainer>
        {plans.map((plan, index) => (
          <S.PlanCard
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            color={plan.color}
            highlight={plan.highlight}
          >
            {plan.highlight && <S.PopularBadge>¡Más Popular!</S.PopularBadge>}
            
            <S.PlanIcon color={plan.color}>
              {plan.icon}
            </S.PlanIcon>
            
            <S.PlanTitle>
              {plan.title}
              <span>{plan.subtitle}</span>
            </S.PlanTitle>

            <S.FeaturesList>
              {plan.features.map((feature, featureIndex) => (
                <S.FeatureItem key={featureIndex}>
                  <FaCheck />
                  {feature}
                </S.FeatureItem>
              ))}
            </S.FeaturesList>
          </S.PlanCard>
        ))}
      </S.PlansContainer>
      <S.HiddenButton>
        <ButtonAnimated text='¡Elige tu plan!' link='https://easy.trainingym.com/equilibriofitness'></ButtonAnimated>
      </S.HiddenButton>
    </S.Wrapper>
  )
}

export default Prices
