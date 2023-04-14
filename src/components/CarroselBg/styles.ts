import styled, { css } from 'styled-components'

interface ImageProps {
  src: string
}

export const Carrousel = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: black;
  display: flex;
`

export const Image = styled.div<ImageProps>`
  ${({ src }) =>
    css`
      background-image: url(${src});
    `}
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;
`
