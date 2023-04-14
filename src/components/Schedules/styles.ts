import styled from 'styled-components'


export const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 4rem;
  }
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
  width: 50%;
  padding: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    all: unset;
    color: rgba(222, 222, 222, 1);
    font-weight: bold;
    font-size: 1.7rem;
    background: #CC0301;
    padding: 1.2rem;
    border-radius: 20px;

  }
  button:hover{
    cursor: pointer;
    color: #ffdbe1;
    background-color: #660000;
  }
`
export const Content = styled.div`
  background-color: white;
  max-width: 125rem;
  width: 75%;
  height: 50rem;
  border-radius: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  h1{
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
  table {
    border-collapse: collapse;
    height: 90%;
    width: 96%;
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
          border: 1px solid rgba(202, 202, 202, 1);
        }
      }
    }
    td {
      text-align: center;
    }
  }
`