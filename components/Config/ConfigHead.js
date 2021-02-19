// components/head.js
import * as React from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";
/**
 * Renders metatags and config in the <Head> tag.
 *
 * @component
 * @param {string} title - Page title.
 * return (
 *    <Head title="Page title" />
 * );
 */

const ConfigHead = ({ children, title }) => (
  <React.Fragment>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </React.Fragment>
);

export default ConfigHead;
