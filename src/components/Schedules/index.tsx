
import { useState, useEffect } from 'react'
import * as S from './styles'
import Musculacion from '../../../public/img/cards/musculacion-cardio.jpg'
import FuncionalHit from '../../../public/img/cards/functional-training.jpg'
import DanceMix from '../../../public/img/cards/dance-mix.jpg'
import Balance from '../../../public/img/cards/cross-training.jpg'
import DanceMix2 from '../../../public/Schedules/danceMix.png'
import Balanco from '../../../public/Schedules/Balance.png'
import TitleAnimation from '../textAnimation/AnimatedTitle'

function Schedules() {
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const [title, setTitle] = useState(days[0])


    function changeTitle(event: React.MouseEvent<HTMLButtonElement>) {
        setTitle((event.target as HTMLElement).innerText);
    }

    return (<S.Wrapper id='Times'
    >
        <TitleAnimation text='Horarios' />
        <S.DayList>
            {days.map((day) => (
                <button key={day} onClick={changeTitle}>{day}</button>
            ))}
        </S.DayList>
        <S.Container>
            <S.Content>
                <div>
                    <ul>
                        <S.Lista src={DanceMix2.src} >
                            {title !== 'Sabado' && 'Musculacion\n07:00 - 8:15'}
                            {title == 'Sabado' && 'Musculacion\n8:00 - 9:15'}
                        </S.Lista>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : DanceMix2.src} >{title !== 'Sabado' ? 'Musculacion\n14:30 - 15:45' : 'Musculacion\n11:45 - 13:00'}
                        </S.Lista>
                        {title !== 'Sabado' && <>
                            <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n07:00 - 07:45'}</S.Lista>
                            <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n17:00 - 17:45'} </S.Lista></>}
                    </ul>
                    <ul>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : DanceMix2.src}>{title !== 'Sabado' && 'Musculacion\n8:15 - 9:30'}
                            {title == 'Sabado' && 'Musculacion\n9:15 - 10:30'}
                        </S.Lista>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : Balanco.src}>{title !== 'Sabado' && 'Musculacion\n15:45 - 17:00'}
                            {title == 'Sabado' && 'Funcional Hit\n11:00 - 11:45'}
                        </S.Lista>
                        {title !== 'Sabado' && <>
                            <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n08:00 - 08:45'} </S.Lista>
                            <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n18:00 - 18:45'} </S.Lista></>
                        }                    </ul>
                    <ul>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : DanceMix2.src}>{title !== 'Sabado' && 'Musculacion\n9:30 - 10:45'}
                            {title == 'Sabado' && 'Musculacion\n10:30 - 11:45'}
                        </S.Lista>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : FuncionalHit.src}>{title !== 'Sabado' ? 'Musculacion\n17:00 - 18:15' : 'Funcional Hit\n10:00 - 10:45'}</S.Lista>

                        {title !== 'Sabado' && <><S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n09:00 - 09:45'}</S.Lista>
                            <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n19:00 - 19:45'}</S.Lista></>}

                    </ul>
                </div>
                {title !== 'Sabado' && <div>
                    <ul>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion\n10:45 - 12:00'}
                        </S.Lista>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion\n18:15 - 19:30'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n13:15 - 14:00'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n20:00 - 20:45'}</S.Lista>
                    </ul>
                    <ul>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion\n12:00 - 13:15'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion\n19:30 - 20:45'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n16:00 - 16:45'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' ? Balanco.src : ''}>{title !== 'Sabado' && 'Funcional Hit\n20:55 - 21:40'}</S.Lista>
                    </ul>
                    <ul>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion\n13:15 - 14:30'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' ? DanceMix2.src : ''}>{title !== 'Sabado' && 'Musculacion\n20:45 - 22:00'}</S.Lista>
                        <S.Lista src={title !== 'Sabado' && title !== 'Viernes' ? Balance.src : ''}>
                            {title == 'Lunes' && 'Balance\n10:15 - 11:00' || title == 'Miercoles' && 'Balance\n10:15 - 11:00'}
                            {title == 'Martes' && 'Balance\n18:00 - 18:45' || title == 'Jueves' && 'Balance\n18:00 - 18:45'}
                        </S.Lista>
                        <S.Lista src={title !== 'Sabado' && title !== 'Viernes' ? DanceMix.src : ''}>
                            {title == 'Lunes' && 'Dance Mix\n19:15 - 20:00' || title == 'Miercoles' && 'Dance Mix\n19:15 - 20:00'}
                            {title == 'Martes' && 'Dance Mix\n09:15 - 10:00' || title == 'Jueves' && 'Dance Mix\n09:15 - 10:00'}
                        </S.Lista>
                    </ul>
                </div>}
            </S.Content>
        </S.Container>
    </S.Wrapper >)
}

export default Schedules
