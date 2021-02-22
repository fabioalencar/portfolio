import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.div`
  .down {
    position: fixed;
    bottom: 30px;
    right: 30px;
    text-decoration: none;
    overflow: hidden;
    animation: arrowDown 1s cubic-bezier(0.33, 1, 0.68, 1) infinite;
    animation-direction: alternate;
    font-size: 0.5em;
    transition: all 1s;
    opacity: 1;
  }
  .scroll.down {
    opacity: 0;
  }
  @media ${device.mobileL} {
    .down {
      font-size: 0.3em;
      right: 15px;
    }
  }
`;

export default Container;
