import styled, {css} from 'styled-components';
import Link from 'next/link'
import { motion } from "framer-motion";



export const Wrapper = styled(motion.nav)`
  width: 90%;
  max-width:120rem;
  height: 8rem;
  background: #000000b2;
  border-radius: 50px;
  margin-top: 17px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
    @media (max-width: 700px) {
    background: transparent;
  }
`

export const Desktop = styled(motion.ul)`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  li {
    a{
     text-decoration: none;
    }
    :hover {
    color: var(--red);
  }
    font-size: 1.7rem;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`
export const BtnLogin = styled(Link)`
  padding: 0.7rem;
  text-decoration: none;
  background-color: white;
  color:black;
  border-radius: 2rem;
  :hover{
    color:var(--red);
  }
`

export const test = styled(motion.a)`

`


export const Mobile = styled.div`
  display: none;
  
  @media (max-width: 700px) {
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
`

export const MobileContent = styled.div`
    width:100%;
    height:100vh;

    position:fixed;
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    z-index:2;

    background-color: rgba(217, 0, 0, 0.16);
    backdrop-filter: blur(5px); 

    svg {
    position: absolute;
    top: 4.5rem;
    right: 3rem;
   }

    ul{
      list-style: none;
      font-size: 2rem;
      font-weight: 700;

      li{
        margin-top:2rem;
      }
    }
    a{
      text-decoration: none;
      color: var(--white);
    }

`