import React from "react";
import App from "next/app";
import "../styles/icons.css";
import "../styles/critical.css";
import { createGlobalStyle } from "styled-components";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  html{
    --color--dark-grey: #2D3142;
    --color--light-grey: #F4F5F6;
    --developer: #0496FF;
    --default: #53EE4D;
    --designer: #FC4264;
    /*cases*/
    --trinks: #FF9254;
    --vidaclass: #00b3d5;
    --runplace: #20a637;
    --cerec: #e0a908;
    --dpsp: #d34544;
    --metlife: #0090da;
    --liz: --color--dark-grey;
    --brf: #d12429;
    --riobike: #00993d;
    --mccain: #fccc4c;
    --embaixador: #dda44f;
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

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
