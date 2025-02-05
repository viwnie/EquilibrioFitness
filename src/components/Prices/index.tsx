import * as S from './styles'
import Image from 'next/image'

import webVerified from '../../../public/img/status/verified.svg'
import webUnVerified from '../../../public/img/status/unVerified.svg'

import mobileVerified01 from '../../../public/img/prices/mobilePrices/verify01.svg'
import mobileVerified02 from '../../../public/img/prices/mobilePrices/verify02.svg'
import mobileUnVerified from '../../../public/img/prices/mobilePrices/cancelled.svg'

import mobileLogo01 from '../../../public/img/prices/mobilePrices/logo01.svg'
import mobileLogo02 from '../../../public/img/prices/mobilePrices/logo02.svg'

import { FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { RevealTitle } from '../utils/RevealTitle';
import { RevealSubTitle } from '../utils/RevealSubTitle';


import ButtonAnimated from '../ButtonAnimated'

import Link from 'next/link'

const cards = [
  {
    id: 'card1',
    title: 'Premium',
    logo: mobileLogo01.src,
    price: '65€',
    color: '#D00000',
    shadow: 'rgba(0, 0, 0, 0.2)',
    verified: { mobileVerified01 },
    top: '0',
    right: '0'
  },
  {
    id: 'card2',
    title: 'Standard',
    logo: mobileLogo02.src,
    price: '50€',
    color: '#7F28ED',
    shadow: 'rgba(0, 0, 0, 0.2)',
    verified: { mobileVerified02 },
    top: '-1',
    right: '0'
  },
  {
    id: 'card3',
    title: 'Reducida',
    logo: mobileLogo02.src,
    price: '40€',
    color: '#7F28ED',
    shadow: 'rgba(0, 0, 0, 0.2)',
    verified: { mobileVerified02 },
    top: '-1',
    right: '0'
  },
];

const Prices = () => (
  <S.Wrapper id='Price'
  >
    <RevealSubTitle>
      <h1>Nuestros</h1>
    </RevealSubTitle>
    <RevealTitle>
      <h2>Planes</h2>
    </RevealTitle>
    <S.webPrices
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}
    >
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>Reducida</h3>
            </th>
            <th>
              <h3>Standard</h3>
            </th>
            <th>
              <S.Premium>Premium</S.Premium>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableTitle">Acesso ilimitado</td>
            <td>
            <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Programa Personalizado</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Plan Nutricional</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Parking Gratuito</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Musculación/cardio</td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td className="tableTitle">Funcional/HIIT</td>
            <td>
              <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webUnVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={webVerified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <h2>
                40€ <span>/ mes</span>
              </h2>
            </td>
            <td>
              <h2>
                50€<span>/ mes</span>
              </h2>
            </td>
            <td>
              <h2>
                65€<span>/ mes</span>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </S.webPrices>
    <S.mobileWrap
    >
      {cards.map((card) => (
        <S.mobilePrices
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          color={card.color} shadow={card.shadow} key={card.id}>
          <S.mobileTitle>
            <h2>{card.title}</h2>
          </S.mobileTitle>
          <ul>
            <li>{ card.title === 'Reducida' ? <Image src={mobileUnVerified.src} alt='X' width={12} height={12} /> : <FaCheck size={12} />} Acesso ilimitado</li>
            <li><FaCheck size={12} /> Programa personalizado</li>
            <li><FaCheck size={12} /> Plan Nutricional</li>
            <li><FaCheck size={12} /> Parking Gratuito</li>
            <li><FaCheck size={12} /> Musculación/cardio</li>
            <li>{card.title === 'Standard' || card.title === 'Reducida' ? <Image src={mobileUnVerified.src} alt='X' width={12} height={12} /> : <FaCheck size={12} />} Funcional/HIIT</li>
          </ul>
          <S.mobileBuy>
            <span>{card.price}</span>
            <Link href={card.title === "Premium" ? 'https://easy.trainingym.com/equilibriofitness/info/s/0EL/5q37' : 'https://easy.trainingym.com/equilibriofitness/info/s/w04/pnlN'}>Comprar</Link>
          </S.mobileBuy>
        </S.mobilePrices>
      ))}
    </S.mobileWrap>
    <S.HiddenButton><ButtonAnimated text='!Elige tu plan' link='https://easy.trainingym.com/equilibriofitness'></ButtonAnimated></S.HiddenButton>
  </S.Wrapper >
)

export default Prices
