import React from "react";
import Container from "./styles";
import Typewriter from "typewriter-effect";

export default function banner() {
  return (
    <Container>
      <div>
        <h1 className="title">
          <span>Hello,</span> I'm Fábio.
        </h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("Creative Technologist, Product")
              .pauseFor(100)
              .deleteChars(7)
              .typeString("Senior Product Designer and Frontend Developer.")
              .pauseFor(3000)
              .deleteChars(78)
              .typeString("Eager for knowledge.")
              .pauseFor(500)
              .deleteAll()
              .typeString("Entrepreneur and team leader for 8 years.")
              .pauseFor(1000)
              .deleteChars(41)
              .typeString(
                "Specialist in the convergence between business, design and technology."
              )
              .pauseFor(3000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 5,
          }}
        />
      </div>
    </Container>
  );
}
