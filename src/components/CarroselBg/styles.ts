import styled from 'styled-components'
import { SwiperSlide } from "swiper/react";

interface ImageProps {
  src: string
}

export const Wrapper = styled.div`
  .mySwiper {
    width: 100%;
    height: 100%;
  }
`;


export const test = styled.div`
  width: 99vw;
  height: 110vh;
  background-color:black;

`
export const Slide = styled(SwiperSlide) <ImageProps>`
  position: relative;
  width: 100vw;
  height: 110vh;

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
    z-index: -1;
  }

  background: linear-gradient(to top, rgb(90, 0, 0),rgba(0, 0, 0, 1));
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

