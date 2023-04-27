import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 100px;
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
  min-width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
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
`
interface ImageProps {
  src: string
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  ul{
    list-style: none;
    border-collapse: collapse;
    height: 98%;
    width: 100%;
    background: transparent;
    color: #454545;
    margin-top: 10px;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 300;
    text-align: center;
  }
`


export const Container = styled.div`
  background: #000000b2;
  max-width: 125rem;
  width: 90%;
  height: 48rem;
  border-radius: 2rem;
  padding: 1rem 1rem;
  h1{
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--title);
  }
`

export const Lista = styled.li<ImageProps>`
  ${({ src }) =>
    css`
      background-image: url(${src});
      background-blend-mode: overlay;
    `}
  background-color: rgba(0, 0, 0, 0.5); /* adicione a cor cinza semi-transparente */
  opacity: 1; /* ajuste a opacidade para permitir que a imagem de fundo seja vista */
  color: #fff;
  background-position: 45% top;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 10rem;
  border-top: 1px solid #cacaca;
  border-right: 1px solid #cacaca;
  font-size: 1.5rem;
  padding-left: 5px;
`;

