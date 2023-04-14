import * as S from './styles'
import Image from 'next/image'
import verified from '../../../public/img/status/verified.svg'
import unVerified from '../../../public/img/status/unVerified.svg'
import Logo from '../../../public/img/logo.svg'

const Prices = () => (
  <S.Wrapper>
    <S.Title>Planes</S.Title>
    <S.Container>
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
                src={verified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={verified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={verified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={verified}
                alt="icono de Activo ( V )"
                width={30}
                height={30}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={unVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={unVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={unVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={verified}
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
                src={unVerified}
                alt="Icono de inactivo ( X )"
                width={22}
                height={22}
              />
            </td>
            <td>
              <Image
                src={verified}
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
    </S.Container>
    <S.Containerbtn>
      <button>¡Elige tu plan ahora!</button>
    </S.Containerbtn>
  </S.Wrapper>
)

export default Prices
