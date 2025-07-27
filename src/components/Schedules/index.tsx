import { useEffect, useState } from 'react';
import * as S from './styles'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ButtonAnimated from '../ButtonAnimated';
import Banner from '../../../public/img/Schedules/banner.webp'

import { RevealTitle } from '../utils/RevealTitle';
import { RevealSubTitle } from '../utils/RevealSubTitle';
import { motion } from "framer-motion";


function Schedules() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    const categorys = ['Funcional', 'HIIT', 'ABS', 'Mobility'];
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + 3;
    const [selectCategory, setSelectCategory] = useState(categorys);

    const getCurrentDay = () => {
    const jsDayToSpanish = [   
        'Lunes',
        'Martes',
        'Miércoles', 
        'Jueves',
        'Viernes',   
    ];
    const today = new Date().getDay();
    const todaySpanish = jsDayToSpanish[today];
    return days.includes(todaySpanish) ? todaySpanish : 'Lunes';
};

const [selectedDay, setSelectedDay] = useState(getCurrentDay());

    const scheduleData = [
        {
            id: '01',
            day: days[0],
            classes: [
                { time: '07:00 - 07:45', className: categorys[0] },
                { time: '07:45 - 08:15', className: categorys[1] },
                { time: '08:15 - 09:15', className: categorys[0] },
                { time: '09:15 - 09:10', className: categorys[0] },
                { time: '10:00 - 10:30', className: categorys[2] },
                { time: '17:00 - 18:00', className: categorys[0] },
                { time: '18:00 - 18:30', className: categorys[3] },
                { time: '18:30 - 19:00', className: categorys[1] },
                { time: '19:00 - 19:30', className: categorys[0] },
                { time: '19:45 - 20:00', className: categorys[0] },
                { time: '20:30', className: categorys[2] },
            ]
        },
        {
            id: '02',
            day: days[1],
            classes: [
                { time: '07:00 - 07:45', className: categorys[0] },
                { time: '07:45 - 08:15', className: categorys[2] },
                { time: '08:15 - 09:15', className: categorys[0] },
                { time: '09:15 - 09:10', className: categorys[0] },
                { time: '10:00 - 10:30', className: categorys[1] },
                { time: '17:00 - 18:00', className: categorys[0] },
                { time: '18:00 - 18:30', className: categorys[1] },
                { time: '18:30 - 19:00', className: categorys[0] },
                { time: '19:30 - 19:45', className: categorys[2] },
                { time: '20:00 - 20:30', className: categorys[0] },
            ]
        },
        {
            id: '03',
            day: days[2],
            classes: [
                { time: '07:00 - 07:45', className: categorys[0] },
                { time: '07:45 - 08:15', className: categorys[1] },
                { time: '08:15 - 09:15', className: categorys[0] },
                { time: '09:15 - 09:10', className: categorys[0] },
                { time: '10:00 - 10:30', className: categorys[3] },
                { time: '17:00 - 18:00', className: categorys[0] },
                { time: '18:00 - 18:30', className: categorys[2] },
                { time: '18:30 - 19:00', className: categorys[1] },
                { time: '19:00 - 19:30', className: categorys[0] },
                { time: '19:45 - 20:00', className: categorys[0] },
                { time: '20:30', className: categorys[3] },
            ]
        },
        {
            id: '04',
            day: days[3],
            classes: [
                { time: '07:00 - 07:45', className: categorys[0] },
                { time: '07:45 - 08:15', className: categorys[3] },
                { time: '08:15 - 09:15', className: categorys[0] },
                { time: '09:15 - 09:10', className: categorys[0] },
                { time: '10:00 - 10:30', className: categorys[1] },
                { time: '17:00 - 18:00', className: categorys[0] },
                { time: '18:00 - 18:30', className: categorys[1] },
                { time: '18:30 - 19:00', className: categorys[0] },
                { time: '19:30 - 19:45', className: categorys[3] },
                { time: '20:00 - 20:30', className: categorys[0] },
            ]
        },
        {
            id: '05',
            day: days[4],
            classes: [
                { time: '07:00 - 07:45', className: categorys[0] },
                { time: '07:45 - 08:15', className: categorys[1] },
                { time: '08:15 - 09:15', className: categorys[0] },
                { time: '09:15 - 09:10', className: categorys[0] },
                { time: '10:00 - 10:30', className: 'ABS' },
                { time: '17:00 - 18:00', className: categorys[0] },
                { time: '18:00 - 18:30', className: categorys[3] },
                { time: '18:30 - 19:00', className: categorys[1] },
                { time: '19:00 - 19:30', className: categorys[0] },
                { time: '19:45 - 20:00', className: categorys[0] },
                { time: '20:30', className: 'ABS' },
            ]
        }
    ];
    const selectedSchedule = scheduleData.find((schedule) => schedule.day === selectedDay);

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
    
    const filteredClasses = selectedSchedule?.classes.filter((classData) =>
        selectCategory.includes(classData.className)
    );

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
                    <ButtonAnimated text='Contáctanos' link='https://wa.me/+34613413279' />
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
        <S.Container key={`${selectedDay}-${startIndex}-${index}`}>
            <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.02 * index,
                    duration: 0.4,
                    ease: "easeIn",
                }}
            >
                <p>Classname</p>
                <h2>{classData.className}</h2>
            </motion.li>
            <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2 * index,
                    duration: 0.6,
                    ease: "easeIn",
                }}
            >
                <p>Time</p>
                <h2>{classData.time}</h2>
            </motion.li>
            <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2 * index,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
            >
                <p>Trainer</p>
                <h2>---</h2>
            </motion.li>
        </S.Container>
    ))}

            <S.WrapOptions>
                <S.OptionsContent>
                    <S.CheckboxContainer>
                    </S.CheckboxContainer>
                    <S.WrapButtons>
                        <S.Button
                            aria-label='Prev'
                            onClick={handlePrevious}
                            disabled={startIndex === 0}>
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
