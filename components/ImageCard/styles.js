import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  position: relative;
  margin: ${(props) => (props.context == "no-margin" ? "0 0 50px 0" : "0")};
  flex-direction: ${(props) =>
    props.className == "image-right" ? "row-reverse" : "row"};
  :before {
    content: "${(props) => props.imageLabel}";
    position: absolute;
    font-size: 0.3em;
    top: -20px;
    left: ${(props) =>
      props.className == "image-right" ? "inherit" : "210px"};
    right: ${(props) =>
      props.className == "image-right" ? "10px" : "inherit"};
  }
  div:first-child {
    background: var(--color--dark-grey);
    border: 4px solid rgba(45, 49, 66, 0.1);
    box-sizing: border-box;
    border-radius: 10px;
    transition: all 0.3s;
  }
  .text {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    margin: ${(props) => (props.context == "no-margin" ? "0" : "50px 0")};
    max-width: 600px;
    text-align: ${(props) =>
      props.className == "image-right" ? "right" : "left"};
    h3 {
      font-family: "Quero sans", sans-serif;
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.6em;
      margin: 10px 0;
    }
    span {
      font-size: 0.5em;
      strong {
        color: var(--color-dark-grey);
      }
    }
  }
  @media ${device.tablet} {
    .text {
      max-width: 220px;
      margin: 50px;
      h3 {
        font-size: 0.8em;
      }
    }
  }
`;

export default Container;
