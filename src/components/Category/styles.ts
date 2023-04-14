import styled from 'styled-components'
import { motion } from "framer-motion";
import Image from 'next/image';

interface CardProps {
  bg: string
}

export const Carrousel = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Cards = styled(motion.div)`
  width:100%;
  cursor: grab;
  overflow: hidden;
  h2{
    color: var(--title);
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 45px;
  }
`

export const Inner = styled(motion.div)`
  display:flex;
  width:100%;
  justify-content:center;
`

export const Item = styled(motion.div)`
  height: calc(10rem + 15vw);
  min-width: 20rem;
  min-height: 10rem;
  width: calc(20rem + 20vw);
  padding: 14px;
`

export const ItemImg = styled.div<CardProps>`
  width: 100%;
  height: 90%;
  background-image:${(props) => `url("${props.bg}")`};
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  border-radius:12px;
  pointer-events:none;

`

