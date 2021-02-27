import React, { useEffect } from "react";
import Router from "next/router";
import "../styles/icons.css";
import "../styles/critical.css";
import { createGlobalStyle } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { GTMPageView } from "../components/utils/gtm";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'quero_sansbold';
  src: url('/fonts/querosans-bold-webfont.woff2') format('woff2'),
       url('/fonts/querosans-bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'quero_sansregular';
  src: url('/fonts/querosans-regular-webfont.woff2') format('woff2'),
       url('/fonts/querosans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Gotham Rounded';
  src: url('/fonts/GothamRounded-Medium.woff2') format('woff2'),
      url('/fonts/GothamRounded-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
   html{
    /* colors */
    --color--dark-grey: #2d3142;
    --color--light-grey: #f4f5f6;
    --developer: #0496ff;
    --default: #53ee4d;
    --designer: #fc4264;
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
.on{
.cursor {
    &__ball {    
      mix-blend-mode: color!important;
      circle {
        fill: #fff!important;
      }
    }
  }
  }
.on.designer, .on.developer{
.cursor {
    &__ball {    
      mix-blend-mode: exclusion!important;
    }
  }
  }
`;

function MyApp({ Component, pageProps, router }) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
