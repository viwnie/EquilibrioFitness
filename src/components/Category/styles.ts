import styled, { css } from 'styled-components'
interface ImageProps {
  src: string
}

export const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height:10%;
  background-color:red;
  padding:2rem;
  @media (max-width: 800px) {
    display:flex;
    flex-direction:column;
  }
`

export const Image = styled.div<ImageProps>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;
  width:48%;
  height:40rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:black;
`


