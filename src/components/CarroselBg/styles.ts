import styled, { css } from 'styled-components'
import { SwiperSlide } from "swiper/react";

interface ImageProps {
  src: string
}
interface Land {
  groupTextSize: number
}

export const Wrapper = styled.div`
  .mySwiper {
    width: 100%;
    height: 100%;
  }
`;

export const Slide = styled(SwiperSlide) <ImageProps>`
  ${({ src }) =>
    css`
      background-image: url(${src});
    `}
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 45% top;
  background-repeat: no-repeat;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
 @keyframes typing {
  from {
    width: 0
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}
`;

export const animatedText = styled.div <Land>`
${({ groupTextSize }) =>
    css`
      animation: typing 2s steps(${groupTextSize}), blink .5s step-end infinite alternate;
      width: ${groupTextSize}ch;
    `}
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 3vw;
`;

export const Button = styled.button`
  margin-top: 10rem;
  background-color: var(--red);
  border-radius: 5rem;
  width: 20rem;
  height: 4rem;
  text-align: center;
  a{
    font-weight: 200;
    text-decoration: none;
  }
`