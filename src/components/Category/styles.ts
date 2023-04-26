import styled from 'styled-components';
import { SwiperSlide } from "swiper/react";
import Image from 'next/image';

export const Wrapper = styled.div`
  .mySwiper {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const Slide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  max-width: 30rem;
  max-height: 30rem;
`;
export const image = styled(Image)`
    width:100%;
    height:100%;
`