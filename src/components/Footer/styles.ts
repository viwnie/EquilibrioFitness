import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 10rem;
  padding: 2rem 35rem;
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
`

export const Container = styled.div`
display: flex;
justify-content: space-between;

`
