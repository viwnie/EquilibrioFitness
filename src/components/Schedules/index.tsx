
import { useState } from 'react';
import * as S from './styles'

function Schedules() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    const scheduleData = [
        {
            day: 'Lunes',
            classes: [
                { time: '07:00 - 07:45', className: 'Funcional' },
                { time: '07:00 - 08:15', className: 'Musculación' },
                { time: '08:00 - 08:45', className: 'Funcional' },
                { time: '08:15 - 09:30', className: 'Musculación' },
                { time: '09:15 - 10:00', className: 'Funcional' },
                { time: '09:30 - 10:45', className: 'Musculación' },
                { time: '10:45 - 12:00', className: 'Musculación' },
                { time: '12:00 - 13:15', className: 'Musculación' },
                { time: '13:15 - 14:00', className: 'Funcional' },
                { time: '13:15 - 14:30', className: 'Musculación' },
                { time: '14:30 - 15:45', className: 'Musculación' },
                { time: '15:45 - 17:00', className: 'Musculación' },
                { time: '16:00 - 16:45', className: 'Funcional' },
                { time: '17:00 - 17:45', className: 'Funcional' },
                { time: '17:00 - 18:15', className: 'Musculación' },
                { time: '18:00 - 18:45', className: 'Funcional' },
                { time: '18:15 - 19:30', className: 'Musculación' },
                { time: '19:00 - 19:45', className: 'Funcional' },
                { time: '19:30 - 20:45', className: 'Musculación' },
                { time: '20:00 - 20:45', className: 'Funcional' },
                { time: '20:45 - 22:00', className: 'Musculación' },
                { time: '20:55 - 21:40', className: 'Funcional' }
            ]
        },
        {
            day: 'Martes',
            classes: [
                { time: '07:00 - 07:45', className: 'Funcional' },
                { time: '07:00 - 08:15', className: 'Musculación' },
                { time: '08:15 - 09:30', className: 'Musculación' },
                { time: '09:15 - 10:00', className: 'Funcional' },
                { time: '09:30 - 10:45', className: 'Musculación' },
                { time: '10:45 - 12:00', className: 'Musculación' },
                { time: '12:00 - 13:15', className: 'Musculación' },
                { time: '13:15 - 14:00', className: 'Funcional' },
                { time: '13:15 - 14:30', className: 'Musculación' },
                { time: '14:00 - 14:45', className: 'Funcional' },
                { time: '14:30 - 15:45', className: 'Musculación' }
            ]
        },
        {
            day: 'Miércoles',
            classes: [
                { time: '07:00 - 07:45', className: 'Funcional' },
                { time: '07:00 - 08:15', className: 'Musculación' },
                { time: '08:15 - 09:30', className: 'Musculación' },
                { time: '09:15 - 10:00', className: 'Funcional' },
                { time: '09:30 - 10:45', className: 'Musculación' },
                { time: '10:45 - 12:00', className: 'Musculación' },
                { time: '12:00 - 13:15', className: 'Musculación' },
                { time: '13:15 - 14:00', className: 'Funcional' },
                { time: '13:15 - 14:30', className: 'Musculación' },
                { time: '14:30 - 15:45', className: 'Musculación' }
            ]
        },
        {
            day: 'Jueves',
            classes: [
                { time: '07:00 - 07:45', className: 'Funcional' },
                { time: '07:00 - 08:15', className: 'Musculación' },
                { time: '08:15 - 09:30', className: 'Musculación' },
                { time: '09:15 - 10:00', className: 'Funcional' },
                { time: '09:30 - 10:45', className: 'Musculación' },
                { time: '10:45 - 12:00', className: 'Musculación' },
                { time: '12:00 - 13:15', className: 'Musculación' },
                { time: '13:15 - 14:00', className: 'Funcional' },
                { time: '13:15 - 14:30', className: 'Musculación' },
                { time: '14:00 - 14:45', className: 'Funcional' },
                { time: '14:30 - 15:45', className: 'Musculación' }
            ]
        },
        {
            day: 'Viernes',
            classes: [
                { time: '07:00 - 07:45', className: 'Funcional' },
                { time: '07:00 - 08:15', className: 'Musculación' },
                { time: '08:00 - 08:45', className: 'Funcional' },
                { time: '08:15 - 09:30', className: 'Musculación' },
                { time: '09:15 - 10:00', className: 'Funcional' },
                { time: '09:30 - 10:45', className: 'Musculación' },
                { time: '10:45 - 12:00', className: 'Musculación' },
                { time: '12:00 - 13:15', className: 'Musculación' },
                { time: '13:15 - 14:00', className: 'Funcional' },
                { time: '13:15 - 14:30', className: 'Musculación' },
                { time: '14:30 - 15:45', className: 'Musculación' },
                { time: '15:45 - 17:00', className: 'Musculación' },
                { time: '16:00 - 16:45', className: 'Funcional' },
                { time: '17:00 - 17:45', className: 'Funcional' },
                { time: '17:00 - 18:15', className: 'Musculación' },
                { time: '18:00 - 18:45', className: 'Funcional' },
                { time: '18:15 - 19:30', className: 'Musculación' },
                { time: '19:00 - 19:45', className: 'Funcional' },
                { time: '19:30 - 20:45', className: 'Musculación' },
                { time: '20:00 - 20:45', className: 'Funcional' },
                { time: '20:45 - 22:00', className: 'Musculación' },
                { time: '20:55 - 21:40', className: 'Funcional' }
            ]
        },
        {
            day: 'Sábado',
            classes: [
                { time: '08:45 - 09:15', className: 'Musculación' },
                { time: '09:15 - 10:30', className: 'Musculación' },
                { time: '10:00 - 10:45', className: 'Funcional' },
                { time: '10:30 - 11:45', className: 'Musculación' },
                { time: '11:00 - 11:45', className: 'Funcional' },
                { time: '11:45 - 13:00', className: 'Musculación' }
            ]
        }
    ];

    const [selectedDay, setSelectedDay] = useState('Lunes');
    const selectedSchedule = scheduleData.find((schedule) => schedule.day === selectedDay);

    return (
        <S.Wrapper>
            <S.Banner>
                <h1>Banner Is Coming</h1>
            </S.Banner>
            <S.DayList>
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={selectedDay === day ? 'active' : ''}
                    >
                        {day}
                    </button>
                ))}
            </S.DayList>

            {selectedSchedule && selectedSchedule.classes.map((classData, index) => (
                <>
                    <S.Container>
                        <li key={index}>
                            <p>Classname</p>
                            <h2>{classData.className}</h2>
                        </li>
                        <li><p>Time</p>
                            <h2>{classData.time}</h2>
                        </li>
                        <li><p>Trainer</p>
                            <h2>
                                ---
                            </h2>
                        </li>
                        <li><S.Button>Join Now</S.Button></li>
                    </S.Container>
                </>
            ))}

        </S.Wrapper>
    );
}

export default Schedules
