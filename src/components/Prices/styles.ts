import styled, { css } from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CardProps {
  color: string,
  shadow: string
}
interface LogoMobile {
  top: string,
  right: string
}

export const Wrapper = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: var(--fs-big);
    color: black;
  }
  h2{
    font-size: var(--fs-hero);
    color: var(--red);
  }

  @media (max-width: 830px) {
    h1{
      font-size: var(--fs-small);
    }
    h2{
      font-size: var(--fs-big);
    }
  }
 
`

export const HiddenButton = styled.div`
  @media (max-width: 830px) {
   display:none;
  }
`

export const webPrices = styled(motion.div)`
  border-radius: 1rem;
  background-color: white;
  margin: 4rem 0;
  max-width: 110rem;
  width: 80%;
  height: 48rem;
  padding: 2rem 4rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  table {
    border-collapse: collapse;
    height: 98%;
    width: 100%;
    color: #454545;
    margin-top: 1rem;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 300;
    text-align: center;
    tbody {
      tr {
        td {
          border-top: 1px solid #cccccc;
        }
      }
    }

    th {
      h3 {
        text-align: center;
        padding-bottom: 1rem;
        font-size: 3rem;
      }
    }
    td {
      text-align: center;
      h2 {
        text-align: center;
        font-size: 2.7rem;
        color: rgba(0, 170, 37, 1);

        span {
          padding-left: 0.5rem;
          font-size: 1.5rem;
          color: rgba(69, 69, 69, 1);
        }
      }
    }
    .tableTitle {
      text-align: center;
      max-width: 14.5rem;
    }
  }
  @media (max-width: 830px) {
    display:none;
  }
`
export const Premium = styled.h3`
  color: red;
`

export const mobileWrap = styled.div`
  margin-top: 3rem;
  max-width: 100%;
  align-items:center;
  justify-content:center;
  display: grid;
  position:relative;
  @media (min-width: 831px) {
    display:none;
  }
`
/*card mobile*/ 
export const mobilePrices = styled(motion.div) <CardProps>`
  ${({ color, shadow }) =>
    css`
      box-shadow: 0px 2px 40px 2px ${shadow};
      svg, h2{
      color: ${color};
    }
    a{
      background-color: ${color};
    }
    `}
  margin: 4rem 0rem 0rem 0rem;
  padding: 3rem;
  min-height: 35rem;
  background-color:white;
  border-radius: 2rem;
  color:black;
  ul{
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    list-style: none;
    li{
      padding-top: 1rem;
    }
  }
`
export const mobileTitle = styled.div`
  padding: 1rem 1rem 0rem 0rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
`
export const mobileLogo = styled(Image) <LogoMobile>`
 position:absolute;
 ${({ top, right }) =>
    css`
      top: ${top};
      right: ${right};
      `
  }`

export const mobileBuy = styled.div`
  margin-top: 6rem;
  height: 3rem;
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  

  a{
    color: white;
    height: 100%;
    text-decoration: none;
    font-weight: 550;
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  span{
    color: #00AA25;
    font-weight: 700;
    font-size: 2.5rem;
  }
`

export const Button = styled.button`
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    color: rgba(222, 222, 222, 1);
    width: 20rem;
    background-color: #CC0301;
    padding: 1.2rem;
    border-radius: 1rem;
    a {
    color: white;
    text-decoration: none;
    
    font-weight: 550;
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    }
    &:hover {
    cursor: pointer;
    color: #ffdbe1;
    background-color: #000;
  }
`

