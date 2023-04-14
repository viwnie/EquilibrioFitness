import styled from 'styled-components'

export const Wapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--title);
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 45px;
  }
`

export const Container = styled.div`
  width: 70%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      text-align: center;
      margin-top: 10px;
      font-family: Inter;
      font-size: 2rem;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`
