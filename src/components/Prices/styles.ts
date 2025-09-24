import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  h1 {
    font-size: var(--fs-big);
    color: black;
  }
  
  h2 {
    font-size: var(--fs-hero);
    color: var(--red);
    margin-bottom: 2rem;
  }

  @media (max-width: 830px) {
    h1 {
      font-size: var(--fs-small);
    }
    h2 {
      font-size: var(--fs-big);
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0rem;
  width: 100%;
  box-sizing: border-box;
`

export const Subtitle = styled.p`
  font-size: var(--fs-medium);
  color: #454545;
  max-width: 60rem;
  margin: 0 auto;
  line-height: 1.6;
  text-align: center;
`

export const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
  max-width: 120rem;
  margin: 0 auto 8rem;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 90%;
  }
`

export const PlanCard = styled(motion.div)<{ color: string; highlight: boolean }>`
  background: white;
  border-radius: 2rem;
  padding: 4rem 3rem;
  text-align: center;
  position: relative;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  ${props => props.highlight && `
    border-color: var(--red);
    transform: translateY(-1rem);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.15);
  `}

  &:hover {
    transform: ${props => props.highlight ? 'translateY(-1.5rem)' : 'translateY(-0.5rem)'};
    box-shadow: 0 2.5rem 5rem rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`

export const PopularBadge = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--red);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 2.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  box-shadow: 0 0.5rem 1.5rem rgba(236, 36, 15, 0.4);
  z-index: 1;
`

export const PlanIcon = styled.div<{ color: string }>`
  width: 8rem;
  height: 8rem;
  background: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2.5rem;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 1rem 3rem ${props => props.color}40;
  transition: all 0.3s ease;

  ${PlanCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    font-size: 2rem;
  }
`

export const PlanTitle = styled.h3`
  font-size: var(--fs-semi);
  color: #333;
  margin-bottom: 1rem;
  font-weight: var(--fw-large);
  
  span {
    display: block;
    font-size: var(--fs-medium);
    color: #666;
    font-weight: var(--fw-medium);
    margin-top: 0.5rem;
  }
`

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3rem 0;
  text-align: left;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: var(--fs-small);
  color: #555;
  line-height: 1.5;

  svg {
    color: var(--red);
    margin-right: 1.2rem;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const HiddenButton = styled.div`
  margin-top: 4rem;
  
  @media (max-width: 830px) {
    display: none;
  }
`

