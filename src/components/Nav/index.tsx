import * as S from './styles'
import Image from 'next/image'
import Logo from '/public/img/icon-512.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5';
import Link from 'next/link'
import { useState, useEffect } from 'react';

function Nav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'auto';
  }, [visible]);

  return (
    <>
      <S.Wrapper
      >
        <S.Desktop>
          <li><Link href='#Price'>Precio</Link></li>
          <li><Link href='#Category'>Modalides</Link></li>
          <li>
            <Image
              src={Logo}
              alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
              width={100}
              height={100}
            />
          </li>
          <li><Link href='#Times'>Horarios</Link></li>
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
          <AiOutlineMenu size={35} onClick={() => setVisible(true)} />
        </S.Mobile>
      </S.Wrapper >
      {visible && (
        <S.MobileContent>
          <IoClose size={45} onClick={() => setVisible(false)} />
          <ul>
            <li><Link href='#Price' onClick={() => setVisible(false)} >Precio</Link></li>
            <li><Link href='#Category' onClick={() => setVisible(false)} >Modalides</Link></li>
            <li><Link href='#Times' onClick={() => setVisible(false)} >Horarios</Link></li>
            <li>
              <Link href="https://easy.trainingym.com/equilibriofitness/login">Login</Link>
            </li>
          </ul>
        </S.MobileContent>
      )
      }
    </>
  )
}


export default Nav
