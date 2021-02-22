import Container from "./styles";
import { useEffect } from "react";
import { gsap } from "gsap";
import { TweenMax } from "gsap/dist/gsap";

const MouseFollow = (props) => {
  // Listeners
  useEffect(() => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $hoverables = document.querySelectorAll(".hoverable");
    const elemento = document.getElementById("menu");

    elemento.addEventListener("mousemove", onMouseMove);

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover);
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      TweenMax.to($bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 3,
        opacity: 1,
      });
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1,
        opacity: 0,
      });
    }
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
