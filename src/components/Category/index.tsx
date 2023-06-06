import * as S from './styles'
import Card1 from '../../../public/img/cards/card-01.jpg';
import Card2 from '../../../public/img/cards/cross-training.jpg';

function Category() {
  return (
    <S.Wrapper id='Category'>
      <h1>Nuevo Fitness</h1>
      <h2>Personalizado Murcia</h2>
      <S.Grid>
      <S.Image src={Card2.src}>
        <h1>Funcional</h1>
      </S.Image>
      <S.Image src={Card1.src}>
        <h1>Musculacion</h1>
      </S.Image>
      </S.Grid>
    </S.Wrapper>
  );
}
export default Category;
