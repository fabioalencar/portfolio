import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    --color--grey: #2D3142;
    --color--blue: #0496FF;
    --color--green: #53EE4D;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Bitter';
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
