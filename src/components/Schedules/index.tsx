
import { useState, useEffect } from 'react'
import * as S from './styles'
import Musculacion from '../../../public/img/cards/musculacion-cardio.jpg'
import FuncionalHit from '../../../public/img/cards/functional-training.jpg'
import DanceMix from '../../../public/img/cards/dance-mix.jpg'
import Balance from '../../../public/img/cards/cross-training.jpg'
import DanceMix2 from '../../../public/Schedules/danceMix.jpg'
import Balanco from '../../../public/Schedules/Balance.png'


function Schedules() {
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const [title, setTitle] = useState(days[0])


    function changeTitle(event: React.MouseEvent<HTMLButtonElement>) {
        setTitle((event.target as HTMLElement).innerText);
    }

    return (<S.Wrapper>
        <S.Title>Horarios</S.Title>
        <S.DayList>
            {days.map((day) => (
                <button key={day} onClick={changeTitle}>{day}</button>
            ))}
        </S.DayList>
        <S.Container>
            <h1>{title}</h1>
            <S.Content  >
                <ul>
                    <S.Lista src={DanceMix2.src} >
                        {title !== 'Sabado' && 'Musculacion 07:00 - 8:15'}
                        {title == 'Sabado' && 'Musculacion 8:00 - 9:15'}
                    </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : Balanco.src} >{title !== 'Sabado' ? 'Musculacion 14:30 - 15:45' : 'Funcional Hit 10:00 - 10:45'}
                    </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 07:00 - 07:45'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 17:00 - 17:45'} </S.Lista>
                </ul>
                <ul>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : DanceMix2.src}>{title !== 'Sabado' && 'Musculacion 8:15 - 9:30'}
                        {title == 'Sabado' && 'Musculacion 9:15 - 10:30'}
                    </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : Balanco.src}>{title !== 'Sabado' && 'Musculacion 15:45 - 17:00'}
                        {title == 'Sabado' && 'Funcional Hit 11:00 - 11:45'}
                    </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 08:00 - 08:45'} </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 18:00 - 18:45'} </S.Lista>
                </ul>
                <ul>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : DanceMix2.src}>{title !== 'Sabado' && 'Musculacion 9:30 - 10:45'}
                        {title == 'Sabado' && 'Musculacion 10:30 - 11:45'}
                    </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion 17:00 - 18:15'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 09:00 - 09:45'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 19:00 - 19:45'}</S.Lista>
                </ul>
                <ul>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : DanceMix2.src}>{title !== 'Sabado' && 'Musculacion 10:45 - 12:00'}
                        {title == 'Sabado' && 'Musculacion 11:45 - 13:00'}
                    </S.Lista>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion 18:15 - 19:30'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 13:15 - 14:00'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 20:00 - 20:45'}</S.Lista>
                </ul>
                <ul>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion 12:00 - 13:15'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion 19:30 - 20:45'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 16:00 - 16:45'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit 20:55 - 21:40'}</S.Lista>
                </ul>
                <ul>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion 13:15 - 14:30'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion 20:45 - 22:00'}</S.Lista>
                    <S.Lista src={title !== 'Sabado' && title !== 'Viernes' ? Balance.src : ''}>
                        {title == 'Lunes' && 'Balance  10:15 - 11:00' || title == 'Miercoles' && 'Balance  10:15 - 11:00'}
                        {title == 'Martes' && 'Balance  18:00 - 18:45' || title == 'Jueves' && 'Balance  18:00 - 18:45'}
                    </S.Lista>
                    <S.Lista  src={title !== 'Sabado' && title !== 'Viernes' ? DanceMix.src : ''}>
                        {title == 'Lunes' && 'Dance Mix 19:15 - 20:00' || title == 'Miercoles' && 'Dance Mix 19:15 - 20:00'}
                        {title == 'Martes' && 'Dance Mix 09:15 - 10:00' || title == 'Jueves' && 'Dance Mix 09:15 - 10:00'}
                    </S.Lista>
                </ul>
            </S.Content>
        </S.Container>
    </S.Wrapper >)
}

export default Schedules
