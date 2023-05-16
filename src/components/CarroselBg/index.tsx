import * as S from './styles'
import Image01 from '../../../public/img/carrousel/Banner-01.jpg'
import Image02 from '../../../public/img/carrousel/musculacion.jpg'
import Image03 from '../../../public/img/carrousel/Banner-01.jpg'
import TitleAnimation from '../textAnimation/AnimatedTitle'
import Link from 'next/link'
import { Swiper } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Autoplay, Pagination, Navigation } from "swiper";

const land = [
  {
    id: 'obj01',
    image: Image01.src,
    text: 'El éxito no se da, se conquista.'
  },
  {
    id: 'obj02',
    image: Image02.src,
    text: 'Tú eres tu único límite.'
  },
  {
    id: 'obj03',
    image: Image03.src,
    text: 'Sé más fuerte que tus excusas.'
  }
];

function CarrouselBG() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {land.map((group) => (
          <S.Slide key={group.id} src={group.image}>
            <TitleAnimation background={true} text={group.text} />
            <S.Button><Link href={'#Price'}>Empezar Hoy !</Link></S.Button>
          </S.Slide>
        ))}
      </Swiper>
    </>
  )
}

export default CarrouselBG
