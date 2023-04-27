import styled from 'styled-components';
import { SwiperSlide } from "swiper/react";
import Image from 'next/image';

export const Wrapper = styled.div`
  .mySwiper {
    width: 50%;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  h2 {
    color: var(--title);
    font-family: var(--mont);
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 45px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Slide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  max-width: 50rem;
  max-height:50rem;
  border-radius:1.5rem;
`;
export const image = styled(Image)`
    width:100%;
    height:100%;
    border-radius:1.5rem;
`