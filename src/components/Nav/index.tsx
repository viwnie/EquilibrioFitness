import * as S from "./styles";
import Image from "next/image";
import Logo from "/public/img/icon-512.png";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";



function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "auto";
  }, [visible]);

  const closeMenu = () => {
    setVisible(false);
  };

  const scrollToSection = (section: string) => {
    closeMenu();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <S.Wrapper>
        <Link to="Home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
          <Image
            src={Logo}
            alt="Logo de Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
            width={120}
            height={120}
          />
        </Link>
        <S.Desktop>
          <ul>
            <li>
              <Link to="weAre" spy={true} smooth={true} offset={-280} duration={500} onClick={closeMenu}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="Price" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>
                Precio
              </Link>
            </li>
            <li>
              <Link to="Category" spy={true} smooth={true} offset={-140} duration={500} onClick={closeMenu}>
                Modalides
              </Link>
            </li>
            <li>
              <Link to="Schedules" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>
                Horarios
              </Link>
            </li>

            <li>
              <Link to="Contact" spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu}>
                Contactanos
              </Link>
            </li>
          </ul>
        </S.Desktop>
        <S.User>
          <AiOutlineMenu className="mobileMenu" size={35} onClick={() => setVisible(true)} />
          <div>
            <a href="https://easy.trainingym.com/equilibriofitness/login"><AiOutlineUser size={35} /></a>
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
                <Link to="weAre" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="Price" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu}>
                  Precio
                </Link>
              </li>
              <li>
                <Link to="Category" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                  Modalides
                </Link>
              </li>
              <li>
                <Link to="Schedules" spy={true} smooth={true} offset={140} duration={500} onClick={closeMenu}>
                  Horarios
                </Link>
              </li>
              <li>
                <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                  Contactanos
                </Link>
              </li>
              <li>
                <a href="https://easy.trainingym.com/equilibriofitness/login" onClick={closeMenu}>
                  Login
                </a>
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
