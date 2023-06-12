import * as S from './styles'
import Musculacion from '../../../public/img/cards/musculacion.jpg';
import Funcional from '../../../public/img/cards/funcional.jpg';

import { Reveal } from '../utils/Reveal';
import { RevealTitle } from '../utils/RevealTitle';
import { RevealSubTitle } from '../utils/RevealSubTitle';

function Category() {
  return (
    <S.Wrapper id='Category'>
      <RevealSubTitle>
        <h1>Nuevo Fitness</h1>
      </RevealSubTitle>
      <RevealTitle>
        <h2>Personalizado Murcia</h2>
      </RevealTitle>
      <S.Grid  initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}>
        <S.Image src={Funcional.src}>
            <h1>Funcional</h1>
        </S.Image>
        <S.Image src={Musculacion.src}>
            <h1>Musculación</h1>
        </S.Image>
      </S.Grid>
    </S.Wrapper >
  );
}
export default Category;
