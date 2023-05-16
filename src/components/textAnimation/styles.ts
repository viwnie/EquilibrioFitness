import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperTitle = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    flex-wrap:wrap;
    font-size:3rem;
    width:100%;
    padding: 1rem;
    color:var(--title);
    @media (max-width: 800px) {
        
    }
`

export const WrapperText = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    font-size:2rem;
    width:100%;
`
export const spanTitle = styled(motion.span)`
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
`

export const spanText = styled(motion.span)`

`