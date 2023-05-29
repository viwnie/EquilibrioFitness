import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import advg from '../../../public/img/advantage/backgroundADV.jpg'

interface ImageProps {
  src: string
}

export const Wapper = styled(motion.div)`
  transition: 0.7s;
  background-image: url(${advg.src});
  background-position: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  padding-bottom: 5rem;
  width:100%;
  min-height:100rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h2{
    font-size: var(--fs-medium);
    color: black;
  }
`

export const Container = styled.div`
  position: absolute;
  width: 123rem;
  z-index: 1;
  top: 100vh;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 1240px) {
    position: relative;
    top: 0;
    flex-direction:column;
    max-width: 90vw;
  }
  
`


export const imageMotion = styled(motion(Image)) <ImageProps>`
${({ src }) =>
    css`
      src:${src};
    `}
`

export const advantage = styled(motion.div)`
  background: white;
  height: 32rem;
  width: 38rem;
  border-radius: 5rem 0rem 5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  font-size: 0.5rem;
  box-shadow: 0px 0px 20px 10px rgba(150, 150, 150, 0.5);
  :hover {
    background: black;
    transition: 1s;
    span{
      color: white;
    }
  }
  @media (max-width: 1240px) {
    margin-top:1.2rem;
  }
  @media (max-width: 392px) {
    width: 90%;
  }
`