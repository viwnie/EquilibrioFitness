import * as S from './styles'
import Image from 'next/image'
import imgPeople from '../../../public/img/advantage/people.svg'
import imgFellings from '../../../public/img/advantage/fellings.svg'
import imgDocument from '../../../public/img/advantage/document.svg'

const Advantage = () => (
  <S.Wapper>
    <h2>Solo aquí encontrarás estas ventajas</h2>
    <S.Container>
      <div>
        <Image
          src={imgPeople}
          alt="Imagen que representa un grupo de 3 personas"
          width={100}
          height={100}
        />
        <span>Profesionales dispuestos a ayudarte.</span>
      </div>
      <div>
        <Image
          src={imgDocument}
          alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
          width={100}
          height={100}
        />
        <span>
          Un plan nutricional personalizado para tu evolucion fisica y mental.
        </span>
      </div>
      <div>
        <Image
          src={imgFellings}
          alt="Logo de  Equilibrio Fitness (es una imagen de un corazon con el nombre equilibrio fitness en el centro)"
          width={100}
          height={100}
        />
        <span>Tenemos un ambiente amigable y acogedor.</span>
      </div>
    </S.Container>
  </S.Wapper>
)

export default Advantage
