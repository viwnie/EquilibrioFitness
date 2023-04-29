import styled from 'styled-components'

export const Wapper = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--title);
    font-family: var(--mont);
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 45px;
  }
`

export const Container = styled.div`
  max-width: 90vw;
  min-width: 65vw;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction:column;
}
  div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 550px) {
      width: 90%;
      span{
        margin-bottom:5rem;
      }
}
    span {
      text-align: center;
      max-width:25rem;
      margin-top: 1rem;
      font-family: var(--inter);
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
      text-align: center;
    }
  }
`
