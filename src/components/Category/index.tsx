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
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const cards = [Card1, Card2, Card3, Card4, Card5]

function Category() {
  return (

      <S.Wrapper>
        <h2>Clases  Personalizadas</h2>
        <Swiper
          initialSlide={2}
          rewind={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
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
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {cards.map((card) => (
            <S.Slide key={card.src}><S.image src={card} alt="Card 1" /> </S.Slide>
          ))}
        </Swiper>
      </S.Wrapper>
  );
}
export default Category;
