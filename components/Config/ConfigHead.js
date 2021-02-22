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

const ConfigHead = ({ children, title, description }) => (
  <React.Fragment>
    <link rel="icon" type="image/png" href="/favicon.png"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fabioalencar.com" />
      <meta
        property="og:title"
        content="Fábio Alencar - Senior Product Designer and Frontend Developer."
      />
      <meta
        property="og:image"
        content="https://fabioalencar.com/og-image.png"
      />
      <meta
        property="og:description"
        content="Creative Technologist, Senior Product Designer and Frontend Developer. Specialist in the convergence between business, design and technology."
      />
      <meta property="og:site_name" content="Fábio Alencar" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <title>{title}</title>
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      {children}
    </NextHead>
  </React.Fragment>
);

export default ConfigHead;
