import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 4rem;
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

export const DayList = styled.div`
  min-width: 70%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
  button {
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    color: rgba(222, 222, 222, 1);
    font-weight: bold;
    width:10%;
    font-size: 1.7rem;
    background: #CC0301;
    padding: 1.2rem;
    border-radius: 10px;
  }
  button:hover{
    cursor: pointer;
    color: #ffdbe1;
    background-color: #660000;
  }
  @media (max-width: 550px) {
    button{
      width:8%;
      font-size: 1.2rem;
    }
  }
`
interface ImageProps {
  src: string
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:center;
  div{
    display:flex;
    align-items:center;
    justify-content:center;
    width: 40%;
    height: 70%;
  }
  @media (max-width: 970px) {
    div{
    width: 90%;
    height: 70%;
  }
  }
  ul{
    list-style: none;
    border-collapse: collapse;
    width: 100%;
    color: #454545;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 300;
    text-align: center;
  }
  @media (max-width: 700px) {
    ul{
      width:100px;
    }
  }
`


export const Container = styled.div`
  width: 90%;
  border-radius: 2rem;
  padding: 1rem 1rem;
`

export const Lista = styled.li<ImageProps>`
  ${({ src }) =>
    css`
      background-image: url(${src});
      background-blend-mode: overlay;
    `}
    min-width: 103px;
  white-space: pre-line;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1; 
  color: #fff;
  background-position: 45% top;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content:center;
  height: 10rem;
  border-top: 1px solid #cacaca;
  border-right: 1px solid #cacaca;
  font-size: 1.5rem;
  padding-left: 5px;
  :hover{
    color:red;
    cursor: pointer;
  }
`;

