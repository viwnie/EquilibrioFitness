import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  color: var(--title);
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 4.5rem;
`

export const Container = styled.div`
  background-color: white;
  max-width: 125rem;
  width: 90%;
  height: 60rem;
  border-radius: 2rem;
  padding: 1rem 1rem;
  table {
    border-collapse: collapse;
    height: 98%;
    width: 100%;
    background-color: white;
    color: #454545;
    margin-top: 10px;
    font-family: Inter;
    font-size: 1.7rem;
    font-weight: 300;
    text-align: center;
    tbody {
      tr {
        td {
          border-top: 1px solid rgba(202, 202, 202, 1);
        }
      }
    }

    th {
      h3 {
        text-align: center;
        padding-bottom: 10px;
        font-size: 3rem;
      }
    }
    td {
      text-align: center;
      h2 {
        text-align: center;
        margin: 2rem;
        font-size: 2.7rem;
        color: rgba(0, 170, 37, 1);

        span {
          padding-left: 0.5rem;
          font-size: 1.5rem;
          color: rgba(69, 69, 69, 1);
        }
      }
    }
    .tableTitle {
      text-align: start;
      max-width: 14.5rem;
    }
  }
`
export const Premium = styled.h3`
  color: red;
`
export const Containerbtn = styled.div`
  padding-top: 40px;
  display: flex;
  margin-top: 64px;
  margin-bottom: 164px;
  align-items: center;
  justify-content: center;
`
