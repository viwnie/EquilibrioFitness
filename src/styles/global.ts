import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --background: linear-gradient(180deg, #000000 -10.19%, #c00909 88.07%);
    --white: #eeeeee;
    --red: #CD141F;
    --title: #C4C4C4;;



    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  /* font-family: 'Montserrat', sans-serif; */
  body {

    color: var(--white);
    font-family: 'Inter', sans-serif;

    background-size:500% 100%;
    /* padding: 0px 112px; */
    position:relative;
  }
  .globalBg{
    height:100%;
    background: var(--background);
  }
  .no-padding {
    padding: 0;
  }

  p{
    font-size: 2rem;
    line-height: var(--medium);
  }

  a{
    color: var(--highlight);
  }
  button {
    all: unset;
    color: white;
    font-weight: bold;
    font-size: 2.7rem;
    background: red;
    padding: 1.2rem;
    border-radius: 20px;

  }
  button:hover{
    cursor: pointer;
    color: #ffdbe1;
    background-color: #660000;
  }
`

export default GlobalStyles
