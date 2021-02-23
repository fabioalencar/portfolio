import React from "react";
import App from "next/app";
import "../styles/fonts.css";
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
    --trinks: #f1850c;
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
