import React from "react";
import Container from "./styles";
//import dynamic from "next/dynamic";
import DynamicTypewriter from "../Typewriter";
/*const DynamicTypewritter = dynamic(() => import("../Typewritter"), {
  loading: () => (
    <div className="Typewriter">
      <span className="Typewriter__wrapper">
        Creative Technologist, Senior Product Designer and Frontend Developer.
      </span>
    </div>
  ),
  ssr: false,
});*/
import Button from "./../Button";

export default function banner() {
  return (
    <Container className="banner">
      <div>
        <h1 className="title">
          <span>Hello,</span> I'm Fábio.
        </h1>
        <DynamicTypewriter />
        <div className="ctas">
          <Button href="/#cases" title="Work" scroller>
            Work
          </Button>
        </div>
      </div>
    </Container>
  );
}
