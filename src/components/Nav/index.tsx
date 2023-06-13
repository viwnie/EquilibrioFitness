import * as S from './styles'
import Image from 'next/image';

import Logo from '../../../public/img/nav/icon-512.png';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';


function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "auto";
  }, [visible]);

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <>
      <S.Wrapper>
        <ScrollLink style={{ cursor: "pointer" }} to="Home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
          <img style={{ width: '120px' }} src={Logo.src} alt="Logo de Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)" />
        </ScrollLink>
        <S.Desktop>
          <ul>
            <li>
              <ScrollLink href='#weAre' to="weAre" spy={true} smooth={true} offset={-280} duration={500} onClick={closeMenu}>
                Nosotros
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href='#Price' to="Price" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>
                Precio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href='#Category' to="Category" spy={true} smooth={true} offset={-140} duration={500} onClick={closeMenu}>
                Modalidades
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href='#Schedules' to="Schedules" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>
                Horarios
              </ScrollLink>
            </li>

            <li>
              <ScrollLink href='#Contact' to="Contact" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Contactanos
              </ScrollLink>
            </li>
          </ul>
        </S.Desktop>
        <S.User>
          <AiOutlineMenu className="mobileMenu" size={35} onClick={() => setVisible(true)} />
          <div>
            <Link aria-label='Usuario Login' href="https://easy.trainingym.com/equilibriofitness/login"><AiOutlineUser size={35} /></Link>
            <S.UserBtn href="https://easy.trainingym.com/equilibriofitness/register">Unete a Nosotros !</S.UserBtn>
          </div>
        </S.User>
      </S.Wrapper>
      <AnimatePresence>
        {visible && (
          <S.Mobile initial={{ x: "-100%" }}
            animate={{
              x: visible ? 0 : "-100%",
              transition: { type: "spring", stiffness: 100, damping: 20 }
            }}
            exit={{
              x: "-100%",
              transition: { type: "spring", stiffness: 100, damping: 20 }
            }}>
            <IoClose size={45} onClick={closeMenu} />
            <ul>
              <li>
                <ScrollLink href='#weAre' to="weAre" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>
                  Nosotros
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='#Price' to="Price" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu}>
                  Precio
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='#Category' to="Category" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                  Modalides
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='#Schedules' to="Schedules" spy={true} smooth={true} offset={140} duration={500} onClick={closeMenu}>
                  Horarios
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='#Contact' to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                  Contactanos
                </ScrollLink>
              </li>
              <li>
                <Link href="https://easy.trainingym.com/equilibriofitness/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li>
                <a href="https://easy.trainingym.com/equilibriofitness/register">Uniete a Nosotros!</a>
              </li>
            </ul>
          </S.Mobile>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
