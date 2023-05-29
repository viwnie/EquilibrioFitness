import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #eeeeee;
    --red: #CD141F;
    --title: #C4C4C4;
    --container: 100rem;

    --mont: 'Montserrat', sans-serif;

    --fs-small:1.4rem;
    --fs-medium:1.6rem;
    --fs-large:4rem;

    --fw-small: 100;
    --fw-medium: 500;
    --fw-large: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--mont);
    font-size: 1.6rem;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--white);
    background-size: 500% 100%;
    position: relative;
  }

  .globalBg {
    height: 100%;
    background: var(--background);
  }

  .no-padding {
    padding: 0;
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }

  button:hover {
    cursor: pointer;
    color: #ffdbe1;
    background-color: #660000;
  }
`;

export default GlobalStyles;
