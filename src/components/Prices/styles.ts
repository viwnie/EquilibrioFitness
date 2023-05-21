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
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    button{
    display: flex;
    margin-top: 6.4rem;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;
    }
`

export const Title = styled.h2`
  color: var(--title);
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 4.5rem;
`

export const webPrices = styled(motion.div)`
  margin-top: 4rem;
  background-color: white;
  max-width: 125rem;
  width: 55%;
  height: 50rem;
  border-radius: 2rem;
  padding: 1rem 1rem;
  table {
    border-collapse: collapse;
    height: 98%;
    width: 100%;
    background-color: white;
    color: #454545;
    margin-top: 10px;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 300;
    text-align: center;
    tbody {
      tr {
        td {
          border-top: 1px solid rgba(202, 202, 202, 1);
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
        margin: 2rem;
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
      text-align: start;
      max-width: 14.5rem;
    }
  }
  box-shadow: 0px 4px 40px 21px rgba(255, 0, 0, 0.26);
  @media (max-width: 830px) {
    display:none;
  }
`
export const Premium = styled.h3`
  color: red;
`

export const mobileWrap = styled.div`
  height: 90rem;
  max-width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  display: grid;
  position:relative;
  @media (min-width: 831px) {
    display:none;
  }
`
export const mobilePrices = styled(motion.div) <CardProps>`
  ${({ color, shadow }) =>
    css`
      box-shadow: 0px 4px 40px 21px ${shadow};
      svg, h2{
      color: ${color};
    }
    a{
      background-color: ${color};
    }
    `}
  width: 30rem;
  padding-left: 2rem;
  height: 40rem;
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
    }
    `}
`
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
    height: 2.8rem;
    width: 10rem;
    font-weight: 550;
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-weight: bold;
    width: 20rem;
    font-size: 1.7rem;
    background: #CC0301;
    padding: 1.2rem;
    border-radius: 10px;
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

