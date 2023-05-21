import styled, { css } from 'styled-components'
import { SwiperSlide } from "swiper/react";
import Image from 'next/image';

interface ImageProps {
  src: string
}

export const Wrapper = styled.div`
  padding-top:13rem;
  .mySwiper {
    width: 90%;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  h2 {
    color: var(--title);
    font-family: var(--mont);
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 4.5rem;
  }
`;

export const Slide = styled(SwiperSlide) <ImageProps>`
  ${({ src }) =>
    css`
      background-image: url(${src});
      background-blend-mode: overlay;
    `}
  background-color: rgba(0, 0, 0, 0.5);
  background-position: center;
  background-size: cover;
  background-clip: padding-box;

  display:flex;
  align-items:center;
  justify-content:center;
  width: clamp(20rem, 50%, 50rem);
  height: clamp(30rem, 10rem, 50rem);
  border-radius:1.5rem;
`;