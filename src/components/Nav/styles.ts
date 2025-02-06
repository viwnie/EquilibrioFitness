import styled, { css } from 'styled-components';
import Link from 'next/link'
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  width: 100%;
  height:10rem;
  background-color:black;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;

  padding: 2rem 3rem;

  position:fixed;
  z-index: 3;
`

export const Desktop = styled(motion.ul)`
  list-style-type: none;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  width:100rem;

  ul{
    width:100%;
    padding:1rem;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
  
  a{
    font-size:var(--fs-small);
    color:inherit;
    text-decoration:inherit;
    font-weight:lighter;
    :hover{
      cursor:pointer;
      color: #ec240f;
      transition: color 0.3s ease, font-size 0.3s ease;
      font-size: 17px;
    }
  }
  @media (max-width: 1110px) {
    display:none;
  }
`

export const User = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content:space-evenly;

  width:30rem;

  .mobileMenu{
    display:none;
  }
  div{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  @media (max-width: 1110px) {
    .mobileMenu{
    display:flex;
  }
  }
  @media (max-width: 510px) {
    div{
      display:none;
    }
    justify-content:end;
  }
`
export const UserBtn = styled.a`
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:3.5rem;
  background-color:rgba(236, 37, 15, 0.25);  
  color: #ffffff;
  border: 1px solid #ec240f;
  border-radius: 0.5rem;
  font-size:var(--fs-small);
  font-weight:var(--fw-small);
  text-decoration:none;
  padding: 1rem;
  margin-left: 5px;
    &:hover{
      cursor:pointer;
      color: #ffffff;
      background-color: #ec240f; 
      transition: color 0.3s ease, padding 0.3s ease;
      padding: 1.1rem;
    }
    &:focus {
    background: blue;
    padding: 1.2rem;
    background-color: #000000;
    }    
`
export const Mobile = styled(motion.div)`
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:center;

  width:100vw;
  height:100vh;

  background-color: whitesmoke;
  color:black;
  z-index:3;
  
  svg{
    position:fixed;
    top:3rem;
    right:2.5rem;
    :hover{
    color: #ec240f;
  }
  }
  ul{
    list-style:none;
    li{
      font-size:var(--fs-semi);
      font-weight:var(--fw-semi);
      a{
        text-decoration: none;
      }
      :hover{
    color: #ec240f;
  }
    }
  }
`
