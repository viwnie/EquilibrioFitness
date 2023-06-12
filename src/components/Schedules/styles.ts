import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

interface ImageProps {
  src: string
}

export const Wrapper = styled.div`
  min-height: 65rem;
  display: grid;
  gap: 2rem;
  width: 100%;
`

export const Container = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  list-style: none;
  background: #f2f2f2;
  min-height: 10rem;
  width: 80%;
  margin: auto;
  li{
    width: 20%;
    color: black;
    display: grid;
    align-items: center;
    justify-content: center;
    p{
      font-size: var(--fs-small);
      color: #A0A0A0;
    }
    h2{
      font-size: var(--fs-medium);
    }
  }
  @media (max-width: 850px) {
    height: 30rem;
    width: 90%;
    display: grid;
    justify-content: center;
    align-items: center;
    li{
      width: 30rem;
    }
   
  }
`

export const WrapOptions = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;

  color:black;
  @media (max-width: 850px) {
    width: 90%;
    justify-content:center;
  }
`
export const OptionsContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:80%;
    @media (max-width:850px) {
      justify-content:center;
}
    `

export const CheckboxContainer = styled.div`

label{
  min-width:25rem;
  margin-left:0.5rem;
  input{
    margin-right:0.5rem;
  }
}
@media (max-width:850px) {
  display:none;
}

`

export const WrapButtons = styled.div`
  display:flex;


  button{
      margin-left:1rem;
      border-radius:1rem;
    }

  @media (max-width:850px) {
    align-items:center;
    justify-content:center;
}
`

export const DayList = styled.div`
  height: 10rem;
  width: 65%;
  margin: auto;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 4rem;
  button {
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    color: black;
    font-weight: 700;
    width: 9rem;
    font-size: var(--fs-small);
    border: solid 1px #eaeaea;
    padding: 1.2rem;
    border-radius: 2rem;
  }
  button:hover{
    cursor: pointer;
    color: #fff;
    background-color: red;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: 90%;
    margin-bottom: 4rem;
    height: 15rem;
  }
  
`

export const Button = styled.button`
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    color: rgba(222, 222, 222, 1);
    font-weight: bold;
    height: 4rem;
    width: 12rem;
    font-size: var(--fs-small);
    background: #2c2c31;
    /* margin-left: 13rem; */
    border-radius: 2rem;
    &:hover {
    cursor: pointer;
    color: #ffdbe1;
    background-color: red;
  }
`

export const Banner = styled.div<ImageProps>`
  display: flex;
  flex-direction:column;
  padding-left:20rem;
  justify-content: center;

  height: 25rem;
  width: 100%;

  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;

  margin-top: 10rem;
  color: white;

  h1{
    font-size: var(--fs-semi);
  }
  h2{
    margin-top:1rem;
    margin-bottom:1rem;
    font-size: var(--fs-big);
    span{
      color:red;
      font-size: var(--fw-medium);
  }
  }

  @media (max-width: 800px) {
    padding-left:10%;
    h1{
    font-size: var(--fs-big);
  }
  h2{
    font-size: var(--fs-medium);
    span{
      color:red;
    font-size: var(--fw-small);
  }
  }
  }

`