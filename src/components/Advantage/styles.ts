import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageProps {
  src: string
}

export const Wapper = styled(motion.div)`
  padding-bottom: 5rem;
  width:100%;
  height:40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h2{
    font-size:2.3rem;
    color:white;
  }
  @media (max-width: 825px) {
    h2{
    font-size:1.8rem;
  }
  }
`

export const Container = styled.div`
  position: absolute;
  width: 60%;
  z-index: 1;
  top:90rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 825px) {
    flex-direction:column;
    max-width: 90vw;
  }
`


export const imageMotion = styled(motion(Image)) <ImageProps>`
${({ src }) =>
    css`
      src:${src};
    `}
  margin-bottom: 2rem;
  @media (max-width: 550px) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`

export const advantage = styled(motion.div)`
  height: 35rem;
  width:35rem;
  border-radius: 5rem 0rem 5rem 0rem;
  background-color:black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  font-size: 0.5rem;
  @media (max-width: 825px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`