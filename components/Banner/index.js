import React from "react";
import Container from "./styles";
import Typewriter from "../Typewriter";
import Button from "./../Button";

export default function banner() {
  return (
    <Container className="banner">
      <div>
        <h1 className="title">
          <span>Hello,</span> I'm Fábio.
        </h1>
        <div className="subtitle">
          <Typewriter />
          {/* Creative Technologist, Senior Product Designer and Frontend Developer.*/}
        </div>

        <div className="ctas">
          <Button href="/#cases" title="Work" scroller>
            Work
          </Button>
        </div>
      </div>
    </Container>
  );
}
