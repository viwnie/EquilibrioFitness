import * as S from './styles'
import { useState } from 'react'

import { Reveal } from '../utils/Reveal';
import { RevealTitle } from '../utils/RevealTitle';





const CalculatorIMC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [imc, setIMC] = useState<string>('');
  const [peso, setPeso] = useState<string>('')


  const calculateIMC = () => {
    const heightInMeters = parseFloat(height) / 100;
    const calculatedIMC = parseFloat(weight) / (heightInMeters * heightInMeters);
    setIMC(calculatedIMC.toFixed(2).toString());
    if(isNaN(calculatedIMC)) {
      return setIMC('')
    }
    if (calculatedIMC < 18.5) {
      return setPeso('Bajo peso')
    }
    else if (calculatedIMC >= 18.5 && calculatedIMC <= 24.9) {
      return setPeso('Saludable')
    }
    else if (calculatedIMC >= 25 && calculatedIMC <= 29.9) {
      return setPeso('Sobrepeso')
    }
    else if(calculatedIMC > 30) {
      return setPeso('Obesidad')
    }
   
    else {
      return ''
    }
  };
  return (
    <S.Wrapper>
      <S.GridItem>
        <S.Column>
          <RevealTitle>
          <S.Title>Calculadora De <span>IMC</span></S.Title>
          </RevealTitle>
          <Reveal>
          <span>Esta calculadora realizará el cálculo de tu IMC (Índice de Masa Corporal) con el fin de brindarte una apreciación básica sobre si tu peso se encuentra dentro de parámetros saludables.</span>
          </Reveal>
          <S.IMCDiv>
            <div>
              <input type="text" placeholder="Altura/cm" value={height}
                onChange={(e) => setHeight(e.target.value)} />
              <S.Text> Tu IMC es:  <span>{imc}</span></S.Text>
            </div>
            <div>
              <input type="text" placeholder="Peso/kg" value={weight}
                onChange={(e) => setWeight(e.target.value)} />
              <S.Text> Tu peso es:  <span>{peso}</span></S.Text>
            </div>
          </S.IMCDiv>
          <S.Row> <S.Button onClick={calculateIMC} >Calcular IMC</S.Button></S.Row>
        </S.Column>
      </S.GridItem>
      <S.GridBG>

        <S.Table>
          <thead>
            <tr style={{ color: "red" }}>
              <th>IMC</th>
              <th>Valores Referencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menos de 18.5</td>
              <td>Bajo peso</td>

            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Saludable</td>
            </tr>
            <tr><td>25 - 29.9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr><td>30 - Arriba</td>
              <td>Obesidad</td>
            </tr>


          </tbody>
        </S.Table>
      </S.GridBG>
    </S.Wrapper>
  )
}

export default CalculatorIMC