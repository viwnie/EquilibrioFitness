import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  margin: 0 auto;
  padding: 4rem 14rem;
  background-color: #f0eff4;
  display: flex;
  flex-direction: column;
  align-items: normal;
  width: 100%;
  h2 {
    color: red;
    font-family: var(--mont);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    text-align: start;
  }
  @media (max-width: 1063px) {
    padding: 2rem;
    h2 {
      font-size: 3rem;
    }
}
`
export const Container = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 670px) {
  flex-direction:column;
  iframe{
    width:100%;
    height:15%;
  }
}
`

export const Lista = styled.ul`
  list-style-type: none;
  color: black;
  font-size: 1.6rem;
  padding-top: 1rem;
  margin-right: 0.5rem;
  li {
        svg{
      color: var(--red);
    }
    padding-top: 1.2rem;
  }

a {
text-decoration: none;
}

a:hover {
  svg {
    color: #292929;
}
  color: #292929;
  transition: color 0.3s ease, font-size 0.3s ease;
  font-size: 17px;
}

  }
  @media (max-width: 670px) {
    margin-bottom: 5rem;
    }
`
export const Dev = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 2.5rem;
background-color: #000;
width: 100%;
span{
  font-size: 1.3rem;
  color: #fff;
  a{
    text-decoration: none;
    font-size: 1.3rem;
    color: var(--red);
  }
}
`