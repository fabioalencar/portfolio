import React, { useEffect } from "react";
import Container from "./styles";
import smoothScroller from "../utils/smoothScroll";
import Icon from "../Icon";

const ScrollDown = ({ to }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".down").className = "down scroll";
    } else {
      document.querySelector(".down").className = "down";
    }
  };
  const scrollTo = to;
  return (
    <Container>
      <a
        href={to}
        onClick={() => {
          smoothScroller(scrollTo);
        }}
        className="down"
        title="Scroll down"
      >
        <Icon icon="icon-Down" className="bg" />
        <span>Scroll down</span>
      </a>
    </Container>
  );
};

export default ScrollDown;
