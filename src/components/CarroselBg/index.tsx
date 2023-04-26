import * as S from './styles'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image01 from '../../../public/img/carrousel/Banner-01.jpg'
import Image02 from '../../../public/img/carrousel/musculacion.jpg'
import Image03 from '../../../public/img/carrousel/Banner-01.jpg'
import Image04 from '../../../public/img/carrousel/musculacion.jpg'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = [Image01, Image02, Image03, Image04]

const variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function CarrouselBG() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextStep()
    }, 4000)
    return () => clearInterval(interval)
  }, [index])

  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <S.Carrousel>
      <AnimatePresence initial={false} custom={direction}>
        <S.Image
          variants={variants}
          src={images[index].src}
          key={images[index].src}
          initial="hidden"
          animate="visible"
          exit="exit"
          />
      </AnimatePresence>
      <S.RightButton onClick={nextStep} ><FaArrowRight size={15} /></S.RightButton>
      <S.LeftButton onClick={prevStep} ><FaArrowLeft size={15} /></S.LeftButton>
    </S.Carrousel >
  )
}

export default CarrouselBG
