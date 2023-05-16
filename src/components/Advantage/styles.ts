import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageProps {
  src: string
}

export const Wapper = styled(motion.div)`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  
`

export const Container = styled.div`
  max-width: 90vw;
  min-width: 65vw;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 550px) {
    flex-direction:column;
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

export const advantage = styled.div`
  width: 21%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    width: 70%;
  }
`