import { useEffect, useState } from 'react';
import * as S from './styles'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ButtonAnimated from '../ButtonAnimated';
import Banner from '../../../public/img/Schedules/banner.webp'

import { RevealTitle } from '../utils/RevealTitle';
import { RevealSubTitle } from '../utils/RevealSubTitle';

function Schedules() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    const scheduleData = [
        {
            id: '01',
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
            id: '02',
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
            id: '03',
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
            id: '04',
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
            id: '05',
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
            id: '06',
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
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + 3;
    const [showFuncional, setShowFuncional] = useState(true);
    const [showMusculacion, setShowMusculacion] = useState(true);

    const handleNext = () => {
        if (
            selectedSchedule &&
            selectedSchedule.classes &&
            endIndex < selectedSchedule.classes.length
        ) {
            setStartIndex((prevIndex) => prevIndex + 3);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 3);
        }
    };

    useEffect(() => {
        setStartIndex(0);
    }, [selectedDay]);

    const filteredClasses = selectedSchedule?.classes?.filter((classData) => {
        if (showFuncional && showMusculacion) {
            return true;
        } else if (showFuncional) {
            return classData.className === 'Funcional';
        } else if (showMusculacion) {
            return classData.className === 'Musculación';
        }
        return false;
    });

    return (
        <S.Wrapper>
            <S.Banner src={Banner.src} id='Schedules'>
                <div>
                    <RevealTitle>
                        <h1>Necesitas un Entrenador Personal?</h1>
                    </RevealTitle>
                    <RevealSubTitle>
                        <h2>
                            <span>Llame: </span>
                            +34 613 413 279
                        </h2>
                    </RevealSubTitle>
                    <ButtonAnimated text='Contactanos' link='https://wa.me/+34613413279' />
                </div>
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
            {filteredClasses &&
                filteredClasses.slice(startIndex, endIndex).map((classData, index) => (
                    <S.Container key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                        }}
                    >
                        <li>
                            <p>Classname</p>
                            <h2>{classData.className}</h2>
                        </li>
                        <li>
                            <p>Time</p>
                            <h2>{classData.time}</h2>
                        </li>
                        <li>
                            <p>Trainer</p>
                            <h2>---</h2>
                        </li>
                        <li>
                            <S.Button>Join Now</S.Button>
                        </li>
                    </S.Container>
                ))}
            <S.WrapOptions>
                <S.OptionsContent>
                    <S.CheckboxContainer>
                        <label>
                            <input
                                type="checkbox"
                                checked={showFuncional}
                                onChange={() => setShowFuncional(!showFuncional)}
                            />
                            Funcional
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={showMusculacion}
                                onChange={() => setShowMusculacion(!showMusculacion)}
                            />
                            Musculación
                        </label>
                    </S.CheckboxContainer>
                    <S.WrapButtons>
                        <S.Button aria-label='Prev' onClick={handlePrevious} disabled={startIndex === 0}>
                            <FaArrowLeft size={17} />
                        </S.Button>
                        <S.Button
                            aria-label='Next'
                            onClick={handleNext}
                            disabled={!selectedSchedule || endIndex >= selectedSchedule.classes.length}
                        >
                            <FaArrowRight size={17} />
                        </S.Button>
                    </S.WrapButtons>
                </S.OptionsContent>
            </S.WrapOptions>
        </S.Wrapper>
    );
}

export default Schedules
