import * as S from './styles'
import Image from 'next/image'
import Logo from '/public/img/icon-512.png'
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => (
  <S.Wrapper>
    <S.Desktop>
      <li>Precio</li>
      <li>Modalides</li>
      <li>Horarios</li>
      <li>
        <Image
          src={Logo}
          alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
          width={100}
          height={100}
        />
      </li>
      <li>Gimnsaio</li>
      <li>Horarios</li>
      <li>
        <S.BtnLogin href="https://easy.trainingym.com/equilibriofitness/login">
          Login
        </S.BtnLogin>
      </li>
    </S.Desktop>

    <S.Mobile>
      <Image
        src={Logo}
        alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
        width={100}
        height={100}
      />
      <AiOutlineMenu size={35} />
    </S.Mobile>

  </S.Wrapper>
)

export default Nav
