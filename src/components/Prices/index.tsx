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

import Link from 'next/link'

const info = []

const cards = [
  {
    id: 'card1',
    title: 'Premium',
    logo: { mobileLogo01 },
    price: '55€',
    color: '#D00000',
    verified: { mobileVerified01 }
  },
  {
    id: 'card2',
    title: 'Economy',
    logo: { mobileLogo02 },
    price: '45€',
    color: '#7F28ED',
    verified: { mobileVerified02 }
  },
];

const Prices = () => (
  <S.Wrapper>
    <S.Title>Planes</S.Title>
    <S.webPrices>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>Economy</h3>
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
            <td className="tableTitle">Valorazion Inicial</td>
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
          </tr>
          <tr>
            <td className="tableTitle">Musculacion / Cardio</td>
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
            <td className="tableTitle">Balance</td>
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
            <td className="tableTitle">Dance Mix</td>
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
            <td className="tableTitle">Funcional / Hit</td>
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
                45€ <span>/ mes</span>
              </h2>
            </td>
            <td>
              <h2>
                55€<span>/ mes</span>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </S.webPrices>
    <S.mobileWrap>
      {cards.map((card) => (
        <S.mobilePrices key={card.id}>
          <S.mobileTitle>
            <h2>{card.title}</h2>
            {/* <Image src='../../../public/img/prices/mobilePrices/logo02.svg' alt={card.title} /> */}
          </S.mobileTitle>
          <ul>
            <li><FaCheck size={12} /> Acesso ilimitado</li>
            <li><FaCheck size={12} /> Valorazion Inicial</li>
            <li><FaCheck size={12} /> Plan Nutricional</li>
            <li><FaCheck size={12} /> Programa Personalizado</li>
            <li><FaCheck size={12} /> Musculacion/Cardio</li>
            <li><FaCheck size={12} /> Balance</li>
            <li><FaCheck size={12} /> Dance Mix</li>
            <li><FaCheck size={12} /> Funcional/HIIT</li>
          </ul>
          <S.mobileBuy>
            <span>{card.price}</span>
            <Link href={card.title === "Premium" ? 'https://easy.trainingym.com/equilibriofitness/info/s/0EL/5q37' : 'https://easy.trainingym.com/equilibriofitness/info/s/w04/pnlN'}>Comprar</Link>
          </S.mobileBuy>
        </S.mobilePrices>
      ))}
    </S.mobileWrap>

    <button>¡Elige tu plan ahora!</button>
  </S.Wrapper >
)

export default Prices
