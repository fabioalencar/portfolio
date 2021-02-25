import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.div`
  .cursor {
    pointer-events: none;

    &__ball {
      position: fixed;
      top: 0;
      left: 0;
      mix-blend-mode: multiply;
      z-index: 1000;
      transition: scale 0.3s;
      opacity: 0;
      circle {
        fill: var(--default);
      }
    }
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export default Container;
