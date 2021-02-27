import Container from "./styles";
import { useEffect } from "react";
import { TweenMax } from "gsap/dist/gsap";

const MouseFollow = (props) => {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const elemento = document.getElementById("menu");
    const hoverable = document.getElementById("hoverable");

    const onMouseMove = (e) => {
      TweenMax.to(bigBall, 0.4, {
        x: e.x - 15,
        y: e.y - 15,
      });
    };

    const onMouseHover = (e) => {
      TweenMax.to(bigBall, 0.3, {
        scale: 3,
        opacity: 1,
      });
    };

    const onMouseHoverOut = (e) => {
      TweenMax.to(bigBall, 0.3, {
        scale: 1,
        opacity: 0,
      });
    };
    elemento.addEventListener("mousemove", onMouseMove);
    hoverable.addEventListener("mouseenter", onMouseHover);
    hoverable.addEventListener("mouseleave", onMouseHoverOut);
  }, []);

  return (
    <Container>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default MouseFollow;
