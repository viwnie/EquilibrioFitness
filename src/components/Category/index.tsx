import * as S from './styles';
import Card1 from '../../../public/img/cards/card-01.jpg';
import Card2 from '../../../public/img/cards/cross-training.jpg';
import Card3 from '../../../public/img/cards/dance-mix.jpg';
import Card4 from '../../../public/img/cards/functional-training.jpg';
import Card5 from '../../../public/img/cards/musculacion-cardio.jpg';
import { useEffect, useRef, useState } from 'react';

const cards = [Card1, Card2, Card3, Card4, Card5];

console.log(cards)
console.log(Card1)
function Category() {
  const carrousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (carrousel.current) {
      setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
    }
  }, [])


  return (
    <S.Carrousel>
      <S.Cards ref={carrousel} whileTap={{ cursor: 'grabbing' }}>
        <h2>Clases Personalizadas</h2>
        <S.Inner drag="x" dragConstraints={{ right: 0, left: -width }}>
          {cards.map((card, index) => (
            <S.Item  key={index}>
              <S.ItemImg bg={card.src}>
              </S.ItemImg>
            </S.Item>
          ))}
        </S.Inner>
      </S.Cards>
    </S.Carrousel>
  );
}

export default Category;
