import styled from 'styled-components'


export const Wrapper = styled.div`
  position:relative;
  width:17rem;
  height:5rem;
  color:black;
  font-weight: var(--fw-large);

  a{
      position:absolute;
      left:-1rem;
      bottom:-1rem;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration: none;
      background-color:white;
      width:100%;
      height:100%;
    }

  :hover{
    div{
      color:black;
      transform: translate(-6%, 17%);
    }
  }
`

export const Rectangle = styled.div`
  all:unset;
  position:absolute;
  transition: transform 0.5s ease;
  background-color:transparent;
  border:solid 1px red;
  color:black;
  width:100%;
  height:100%;
`;