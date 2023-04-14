import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.nav`
  width: 90%;
  height: 8rem;
  background: #000000b2;
  border-radius: 50px;
  margin-top: 17px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`
export const Lista = styled.ul`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  li {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  li:hover {
    color: var(--red);
  }
`
export const web = styled(Link)`
  padding: 0.7rem;
  text-decoration: none;
  background-color: white;
  color:black;
  border-radius: 2rem;
  :hover{
    color:var(--red);
  }
`
