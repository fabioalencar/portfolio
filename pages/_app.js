import "../styles/icons.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    --color--dark-grey: #2D3142;
    --color--light-grey: #F4F5F6;
    --developer: #0496FF;
    --default: #53EE4D;
    --designer: #FC4264;
  }
  ::selection {
  color: #fff;
  background: var(--color--dark-grey);
}
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Quero sans';
    font-size:30px;
  }
  html, body {
    min-height: 100vh;
  }
  h1, h2, h3, h4, h5{
    font-family: 'Gotham Rounded';
    font-weight: 800;
  }
  #__next {
    flex: 1;
    display: flex;
    /*flex-direction: column;*/
  }
  .container{
    width:100%;
  }

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
