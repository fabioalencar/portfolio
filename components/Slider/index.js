import React from "react";
import Container from "./styles";

export default function slider() {
  return (
    <Container>
      <main>
        <h1 className="title">Hello, I'm Fábio.</h1>
        <p className="description">
          UX Designer <span className="blue">/</span> Engineer based in São
          Paulo,
          <br /> Brazil.
          <span className="green">Used to working remotely.</span>
          <br /> Serving worldwide companies.
        </p>
        <a href="/case">More about me</a>{" "}
      </main>
      <aside>
        <section>Developer</section>
        <section>Designer</section>
      </aside>
    </Container>
  );
}
