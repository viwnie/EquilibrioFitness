import * as S from './styles'
import { FaCalendarWeek, FaPhone, FaMapMarkedAlt, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

import { RevealTitle } from '../utils/RevealTitle';

const Footer = () => (
  <>
    <S.Wrapper id='Contact'
    >
      <RevealTitle>
        <h2>Equilibro Fitness</h2>
      </RevealTitle>
      <S.Container>
        <S.Lista>
          <li>
            <FaCalendarWeek size={15} /> Lunes a Viernes de 7:00 a 22:00
          </li>
          <li>
            <FaCalendarWeek size={15} /> Sábados de 8:00 a 13:00
          </li>
          <li>
            <a href="https://wa.me/+34613413279">
              <FaPhone size={15} /> Teléfono: +34 613 413 279
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/88EdeKRYSo2VpFxL7" target="_blank">
              <FaMapMarkedAlt size={15} /> Dirección: C/Estación, 27, CP 30500 Molina de Segura (Murcia)
            </a>
          </li>
          <li>
            <a href="mailto:clientes@equilibriofitness.com">
              <FaArrowRight size={15} /> clientes@equilibriofitness.com
            </a>
          </li>
          <li>
            <FaArrowRight size={15} /> Aviso Legal
          </li>
          <li>
            <FaArrowRight size={15} /> Condiciones Generales
          </li>
        </S.Lista>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1570.8708478951605!2d-1.2133413150950194!3d38.05310464082934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd647fce14430b1b%3A0x3dab54319c257111!2sEquil%C3%ADbrio%20Fitness!5e0!3m2!1ses!2ses!4v1686685398433!5m2!1ses!2ses" loading="lazy"></iframe>
      </S.Container>
    </S.Wrapper>
    <S.Dev>
      <span>Developed by: <Link href="https://www.linkedin.com/in/viniciodev/">Vinicio</Link> and <Link href="https://www.linkedin.com/in/reendev/">Renan</Link></span>
    </S.Dev>
  </>
)

export default Footer
