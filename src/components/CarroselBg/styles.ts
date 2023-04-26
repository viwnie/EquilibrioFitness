import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface ImageProps {
  src: string
}

export const Carrousel = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: black;
  display: flex;
  position: relative;
  button{
    background-color: var(--red);
    height: 20px;
    font-size: 10px;
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    text-align: center;
    color: white;
  }

  button:hover{
    background-color: #24243e
  }
`

export const Image = styled(motion.div)<ImageProps>`
  ${({ src }) =>
    css`
      background-image: url(${src});
    `}
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;
`

export const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  color: #fff;
`

export const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: #fff;
  
  `