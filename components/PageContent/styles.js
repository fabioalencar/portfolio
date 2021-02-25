import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 250px;
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
    font-family: "quero_sansregular", sans-serif;
    margin-bottom: 30px;
    line-height: 1.3em;
  }
  p {
    max-width: 900px;
    margin: auto;
    line-height: 1.5em;
  }
  ul,
  ol {
    li {
      margin-bottom: 10px;
      line-height: 1.3em;
    }
  }
  .title-cases {
    font-size: 3em;
  }
  .subtitle {
    font-size: 1.2em;
    text-align: center;
    padding: 0;
    font-weight: 100;
    margin: 0 auto;
    line-height: 1.3em;
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
    .imageCard {
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
      font-family: "quero_sansregular", sans-serif;
    }
    .two-columns {
      width: 455px;
      margin-bottom: 30px;
      line-height: 1.2em;
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
    background: url("/pattern.svg") var(--default) repeat;
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
    margin: 50px 0;
    position: relative;
    border-radius: 10px;
    h4 {
      font-family: "quero_sansbold", sans-serif;
      font-weight: bold;
      font-size: 1.3em;
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
  .storytelling div > div:nth-child(1),
  .storytelling div > div:nth-child(2) {
    div {
      :nth-child(1) {
        box-shadow: 15px 15px var(--color--dark-grey);
      }
    }
  }
  .storytelling {
    padding: 50px 80px;
    width: 990px;
    margin: auto;
    .text {
      width: 400px;

      p {
        font-size: 0.6em;
      }
    }
    .image-right {
      .text {
        align-items: flex-end;
        h3 {
          max-width: 315px;
        }
      }
    }
  }
  .storytelling div > div:nth-child(3),
  .storytelling div > div:nth-child(4) {
    div {
      :nth-child(1) {
        box-shadow: 15px 15px var(--developer);
      }
    }
  }
  .storytelling div > div:nth-child(5),
  .storytelling div > div:nth-child(6) {
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
        props.contrast == "dark" ? "--color-dark-grey" : "#fff"};
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
      font-family: "quero_sansregular", sans-serif;
    }
    div {
      width: 455px;
      margin-bottom: 30px;
      box-shadow: 6px 7px var(${(props) => props.className});
    }
  }

  .case-content {
    .showcase {
      border-radius: 10px;
    }
    .subtitle {
      margin: 50px auto;
      font-size: 1em;
    }
  }
  .case-textblock {
    display: flex;
    justify-content: flex-end;
    text-align: left;
    h3 {
      font-size: 0.9em;
      min-width: 30%;
      padding: 0 50px 30px 100px;
    }
    .text {
      font-size: 0.7em;
      align-items: center;
      padding: 30px 50px 30px 0;
      max-width: 65%;
      min-width: 780px;
      a {
        text-decoration: none;
        color: var(--developer);
        transition: all 0.3s;
        position: relative;
        :after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          border-bottom: 1px solid var(--developer);
          width: 0%;
          height: 1px;
          transition: all 0.3s;
        }
        :hover {
          text-decoration: underline;
          color: var(--designer);
          :after {
            border-bottom: 1px solid var(--designer);
            width: 100%;
          }
        }
      }
      p {
        margin-bottom: 20px;
      }
    }
  }
  .image-full {
    div {
      border-radius: 10px;
    }
  }
  .work {
    section {
      padding: 0;
      margin: 0;
      ul {
        li {
          margin: auto auto 30px;
          a {
            .content {
              text-align: left;
              p {
                margin: 0;
              }
            }
          }
        }
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

  @media ${device.mobileL} {
    .image-full {
      margin-bottom: 20px;
    }
    .title-cases {
      font-size: 2rem;
    }
    .case-content {
      .subtitle {
        font-size: 1.2rem;
        margin: 0 auto 30px;
      }
    }
    .case-textblock {
      display: block;
      h3 {
        padding: 0;
      }
      .text {
        min-width: auto;
        max-width: 100%;
        padding: 0;
      }
    }
    .stripe {
      flex-direction: column;
      padding: 30px;
      border-radius: 10px;
      h4 {
        font-size: 1em;
      }
      div {
        margin: 30px 0;
      }
      small {
        bottom: -60px;
      }
    }
    height: auto;
    padding: 0em;
    margin-top: 60px;
    padding: 1.5em;
    header {
      padding: 0em;
      margin: 0;
      justify-content: center;
    }
    section:first-child {
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
      margin: 50px auto 0;
      padding: 0;
      div {
        div {
          margin: 0 0 40px;
          div:first-child {
            max-height: 190px;
          }
        }
      }
      .text {
        width: 100%;
        text-align: center;
        p {
          font-size: 0.6em;
        }
      }
      .image-right {
        .text {
          align-items: stretch;
        }
      }
    }
    .social-proof {
      padding: 0;
      margin-top: 50px;
    }
    .icon-list {
      max-width: auto;
      .bg {
        font-size: 2em;
      }
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
