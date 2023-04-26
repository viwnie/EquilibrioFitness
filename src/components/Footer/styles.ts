import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 10rem;
  padding: 2rem 20rem;
  background-color: #f0eff4;
  h2 {
    color: red;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    text-align: start;
  }
  @media (max-width: 1024px) {
    padding: 1rem 3rem;
    margin: 0;
  }

  @media (max-width: 1024px) {
    padding: 1rem 6rem;
    margin-top: 6rem;
  }
  
`

export const Lista = styled.ul`
  list-style-type: none;
  color: black;
  font-size: 1.4rem;
  padding-top: 1rem;
  li {
    svg{
      color: var(--red);
    }
    padding-top: 1.2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1rem;
    padding-top: 1rem;
  }

`

export const Container = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 768px) {
    padding: 1rem;
    margin: 0;
    iframe{
      width: 240px;
      height: 200px;
    }
  }
 
`

