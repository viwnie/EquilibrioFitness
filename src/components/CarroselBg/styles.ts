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
  position: relative;
  width: 100vw;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: 45% top;
    background-repeat: no-repeat;
    opacity: 0.7;
    background-blend-mode: overlay;
    z-index: -1; /* Posiciona a camada extra atrás do conteúdo */
  }

  background: linear-gradient(to top, rgb(90, 0, 0),rgba(0, 0, 0, 1));
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
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
  font-size: 2.5rem;
  margin-bottom: 5rem;
  @media (max-width: 550px) {
    font-size: 1.7rem;
    margin-bottom: 20rem;
  }
  
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

export const Button = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;

  border-radius: 5rem;
  width:20rem;
  margin-top:3rem;

  background-color: var(--red);
  font-family: var(--mont);
  a{
    font-weight: 200;
    font-size: 1.5rem;
    text-decoration: none;
  }
  @media (max-width: 550px) {
    font-size: 2rem;
    width:12rem;
    margin-top:20rem;
  }
`