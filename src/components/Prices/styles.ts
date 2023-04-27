import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    button{
    display: flex;
    margin-top: 6.4rem;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;
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

export const webPrices = styled.div`
  background-color: white;
  max-width: 125rem;
  width: 90%;
  height: 50rem;
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
        padding-bottom: 1rem;
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
  box-shadow: 0px 4px 40px 21px rgba(255, 0, 0, 0.26);
  @media (max-width: 500px) {
    display:none;
  }
`
export const Premium = styled.h3`
  color: red;
`

export const mobileWrap = styled.div`
  height: 90rem;
  width: 90%;
  display:flex;
  align-items:center;
  justify-content:center;
  display: grid;
  width:90%;
  @media (min-width: 500px) {
    display:none;
  }
`
export const mobilePrices = styled.div`
  box-shadow: 0px 4px 40px 21px rgba(255, 0, 0, 0.26);
  width: 30rem;
  padding-left: 2rem;
  height: 40rem;
  background-color:white;
  border-radius: 2rem;
  color:black;
  ul{
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    list-style: none;
    svg{
      color: #CD141F;
    }
    li{
      padding-top: 1rem;
    }
  }
`
export const mobileTitle = styled.div`
  margin: 1rem 0 1rem 0;
  color: red;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;

`
export const mobileBuy = styled.div`
  margin-top: 6rem;
  height: 3rem;
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  

  a{
    color: var(--title);
    height: 100%;
    background-color: var(--red);
    text-decoration: none;
    height: 2.8rem;
    width: 10rem;
    font-weight: 550;
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span{
    color: #00AA25;
    font-weight: 700;
    font-size: 2.5rem;
  }
`

