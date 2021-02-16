import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 250px;
  margin: 120px auto 0;
  text-align: center;
  color: var(--color--dark-grey);
  justify-content: start;
  h1 {
    font-size: 3.5em;
    margin: 30px 0;
    font-weight: normal;
    span {
      border-radius: 10px;
      padding: 5px 10px;
    }
  }
  h2 {
    font-size: 1em;
    font-weight: 900;
    font-family: "Quero sans", sans-serif;
    margin-bottom: 30px;
  }
  p {
    max-width: 900px;
    margin: auto;
  }
  .subtitle {
    font-size: 1.2em;
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }
  .icon-list {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 40px auto;
  }
  .keywords {
    font-size: 0.6em;
    margin-bottom: 60px;
  }
  .social-proof {
    padding: 50px 80px;
    div {
      div:first-child {
        box-shadow: 15px 15px var(${(props) => props.className});
      }
    }
  }
  .certifications {
    font-size: 0.7em;
    margin: 20px auto;
    strong {
      color: var(--color--dark-grey);
    }
  }
  .knowledgeCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 940px;
    margin: auto;
    h4 {
      display: block;
      width: 100%;
      font-family: "Quero sans", sans-serif;
    }
    .two-columns {
      width: 455px;
      margin-bottom: 30px;
      :hover {
        background: #fff;
        color: var(--color--dark-grey);
        strong {
          color: var(--color--dark-grey);
        }
      }
    }
    .two-columns:nth-child(2) {
      box-shadow: 15px 15px var(--developer);
    }
    .two-columns:nth-child(3) {
      box-shadow: 15px 15px var(--designer);
    }
    .two-columns:nth-child(5) {
      box-shadow: 15px 15px var(--developer);
    }
    .two-columns:nth-child(4) {
      box-shadow: 15px 15px var(--designer);
    }
  }

  .stripe {
    background: url(pattern.svg) var(--default) repeat;
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
    margin: 50px -30px;
    position: relative;
    h4 {
      font-family: "Quero sans", sans-serif;
      font-weight: bold;
      font-size: 1.5em;
      margin: 0px;
    }
    p {
      font-size: 0.7em;
    }
    .cancelled {
      opacity: 0.5;
      h4 {
        text-decoration: line-through;
      }
    }
    small {
      position: absolute;
      bottom: -25px;
      font-size: 0.35em;
      left: 0;
      right: 0;
      text-align: center;
      strong {
        color: var(--color--dark-grey);
      }
    }
  }
  .storytelling {
    padding: 50px 80px;
  }
  .storytelling > div:nth-child(1),
  .storytelling > div:nth-child(2) {
    div {
      :nth-child(1) {
        box-shadow: 15px 15px var(--color--dark-grey);
      }
    }
  }
  .storytelling {
    width: 990px;
    margin: auto;
    .text {
      width: 400px;
      p {
        font-size: 0.6em;
      }
    }
  }
  .storytelling > div:nth-child(3),
  .storytelling > div:nth-child(4) {
    div {
      :nth-child(1) {
        box-shadow: 15px 15px var(--developer);
      }
    }
  }
  .storytelling > div:nth-child(5),
  .storytelling > div:nth-child(6) {
    div {
      :nth-child(1) {
        box-shadow: 15px 15px var(--default);
      }
    }
  }
  h1 {
    span {
      background-color: var(${(props) => props.className});
      color: ${(props) =>
        props.className == "--default" ? "--color-dark-grey" : "#fff"};
    }
  }

  strong {
    color: var(${(props) => props.className});
  }
  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 940px;
    margin: auto;
    h4 {
      display: block;
      width: 100%;
      font-family: "Quero sans", sans-serif;
    }
    div {
      width: 455px;
      margin-bottom: 30px;
      box-shadow: 6px 7px var(${(props) => props.className});
    }
  }
  @media ${device.mobileL} {
    height: auto;
    padding: 0em;
    margin-top: 60px;
    padding: 1.5em;
    header {
      padding: 0em;
      margin: 0;
      justify-content: center;
    }
    section {
      height: 100vh;
    }
    h1 {
      font-size: 3.7rem;
      span {
        padding: 2px 5px;
      }
    }
    .subtitle {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.3rem;
    }
    .cards {
      width: 100%;
      div {
        width: 100%;
      }
    }
    .storytelling {
      width: 100%;
      margin: auto;
      .text {
        width: 100%;
        p {
          font-size: 0.6em;
        }
      }
    }
    .icon-list {
      max-width: auto;
      .bg {
        font-size: 2em;
      }
    }
  }
  @media ${device.tablet} {
    .knowledgeCards {
      width: 300px;
    }
    .storytelling {
      width: 300px;
    }
  }
  @media ${device.mobileM} {
    .icon-list {
      .bg {
        font-size: 1.6em;
      }
    }
    h1 {
      font-size: 3.3rem;
    }
  }
  @media ${device.mobileS} {
    h1 {
      font-size: 3.1rem;
    }
  }
  @media ${device.mobileT} {
    h1 {
      font-size: 2.4rem;
    }
  }
`;

export default Container;
