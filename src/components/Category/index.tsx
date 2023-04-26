import * as S from './styles'

import Card1 from '../../../public/img/cards/card-01.jpg';
import Card2 from '../../../public/img/cards/cross-training.jpg';
import Card3 from '../../../public/img/cards/dance-mix.jpg';
import Card4 from '../../../public/img/cards/functional-training.jpg';
import Card5 from '../../../public/img/cards/musculacion-cardio.jpg';

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

function Category() {
  return (
    <S.Wrapper>
      <Swiper
        initialSlide={2}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <S.Slide><S.image src={Card1} alt="Card 1"></S.image> </S.Slide>
        <S.Slide><S.image src={Card2} alt="Card 2"></S.image></S.Slide>
        <S.Slide><S.image src={Card3} alt="Card 3"></S.image></S.Slide>
        <S.Slide><S.image src={Card4} alt="Card 4"></S.image></S.Slide>
        <S.Slide><S.image src={Card5} alt="Card 5"></S.image></S.Slide>
      </Swiper>
    </S.Wrapper>
  );
}
export default Category;
