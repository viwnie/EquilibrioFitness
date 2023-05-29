
import { useState, useEffect } from 'react'
import * as S from './styles'


function Schedules() {
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const [title, setTitle] = useState(days[0])

    function changeTitle(event: React.MouseEvent<HTMLButtonElement>) {
        setTitle((event.target as HTMLElement).innerText);
    }
    return (
    <S.Wrapper>
        {/* <S.Content>
            <h1>Horários</h1>
        </S.Content> */}
        <S.DayList>
            {days.map((day) => (
                <button key={day} onClick={changeTitle}>{day}</button>
            ))}
        </S.DayList>
      <S.Container>
        <li><p>Classname</p>
            <h2>Fitness</h2>
        </li>
        <li>time
            <h2>9:00am - 10:00am</h2>
        </li>
        <li><p>trainer</p>
            <h2>
                David Vila
            </h2>
        </li>
        <li><S.Button>Join Now</S.Button></li>
      </S.Container>
      <S.Container>
        <li><p>Classname</p>
            <h2>Fitness</h2>
        </li>
        <li>time
            <h2>9:00am - 10:00am</h2>
        </li>
        <li>trainer
            <h2>
                David Vila
            </h2>
        </li>
        <li><S.Button>Join Now</S.Button></li>
      </S.Container>
      <S.Container>
        <li>Classname
            <h2>Fitness</h2>
        </li>
        <li>time
            <h2>9:00am - 10:00am</h2>
        </li>
        <li>trainer
            <h2>
                David Vila
            </h2>
        </li>
        <li><S.Button>Join Now</S.Button></li>
      </S.Container>
      <S.Container>
        <li>Classname
            <h2>Fitness</h2>
        </li>
        <li>time
            <h2>9:00am - 10:00am</h2>
        </li>
        <li>trainer
            <h2>
                David Vila
            </h2>
        </li>
        <li><S.Button>Join Now</S.Button></li>
      </S.Container>
    </S.Wrapper>
 )
}

export default Schedules
