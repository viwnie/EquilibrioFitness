import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

interface ImageProps {
  src: string
}

export const Wrapper = styled.div`
  min-height: 65rem;
  display: flex;
  flex-direction: column;
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
  width: 85%;
  margin: auto;
  border-radius: 2rem;

  li{
    width: 20%;
    color: black;
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0 20px;

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
      width: 80%;
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
  margin-right: 2rem;
  input{
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
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
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
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
    width: 15rem;
    font-size: var(--fs-small);
    border: solid 1px #eaeaea;
    padding: 1.4rem;
    border-radius: 3rem;

  &:hover{
    cursor: pointer;
    color: #ffffff;
    background-color: #D90E15;
    transition: background-color 0.3s ease, padding 0.3s ease;
    padding: 1.6rem;
    border-radius: 3rem;
  }

  &.active {
    background-color: #D90E15;
    border: 1px solid #D90E15;
    border-radius: 3rem;
    color: #ffffff;
    paddind: 1.6rem;
  }

  &:active {
    background-color: #990e13;
    border: 1px solid #990e13;
  }
}

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 4rem;
    height: 100%;
    justify-content: center;
  }
  @media (min-width: 501px) and (max-width: 1060px) {
    justify-content: center;
  }
  
`

export const Button = styled.button`
    all: unset;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #313134;
    color: #f2f2f2;
    font-weight: bold;
    height: 4rem;
    width: 12rem;
    font-size: var(--fs-small);
    /* margin-left: 13rem; */
    border-radius: 2rem;
    
  &:hover {
    cursor: pointer;
    background-color:#000000;
  }

  &:focus {
    background-color: #D90E15;
    color: #fff;
  }

  &:active {
    background-color: #990e13;
  }

  &:disabled {
    background-color: #D90E15;
    opacity: 0.6;
    cursor: default;
  }
`

export const Banner = styled.div<ImageProps>`
  display: flex;
  flex-direction:column;
  padding-left: 13rem;
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
      color: #D90E15;
      font-size: var(--fw-medium);
  }
  }

  @media (max-width: 800px) {
    padding-left: 2rem;
    h1{
    font-size: var(--fs-big);
  }
  h2{
    font-size: var(--fs-medium);
    span{
      color: #D90E15;
    font-size: var(--fw-small);
  }
  }
  }

`