import styled from 'styled-components'
import motion from 'framer-motion'

interface ImageProps {
  src: string
}

export const Slide = styled.div<ImageProps>`
  width: 100vw;
  height: 115vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const Content = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:flex-end;

`


