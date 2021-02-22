import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  padding: 0 30px;
  ul {
    padding: 0;
    margin: 0 0 30px;
    li {
      list-style: none;
      background: var(--color--dark-grey);
      padding: 50px;
      width: 100%;
      height: 450px;
      max-width: 1200px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      margin: auto auto 30px;
      color: #fff;
      position: relative;
      overflow: hidden;
      background-size: contain;
      a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        padding: 50px;
        flex-direction: column;
        color: #fff;
        text-decoration: none;
      }
      h2 {
        width: 50%;
        font-size: 1.3em;
        margin-bottom: 0;
      }
      p {
        width: 30%;
        font-size: 0.8em;
      }
      span {
        border-radius: 10px;
        border: 3px solid #fff;
        box-shadow: 8px 8px #fff;
        width: 220px;
        font-size: 0.6em;
        padding: 20px;
        margin-top: 20px;
        text-align: center;
        transition: all 0.3s;
      }
      :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--color--dark-grey);
        opacity: 0.6;
        z-index: 1;
        transition: all 0.3s;
      }

      :hover {
        :before {
          opacity: 0;
        }
        span {
          box-shadow: -8px 8px #fff;
        }
      }
    }
    .trinks {
      background-image: url("/images/cases/trinks/case-cover.png");
    }
  }

  @media ${device.mobileL} {
    padding: 0;
    margin: 30px;
    li {
      background-size: cover !important;
      background-position-x: -200px !important;
      height: 60vh !important;
      a {
        justify-content: space-between;
        div {
        }
        h2 {
          width: 100%;
          font-size: 0.8em;
        }
        p {
          width: 80%;
          font-size: 0.5em;
        }
        span {
          width: 145px;
          font-size: 0.5em;
          padding: 15px;
        }
      }
    }
  }
`;

export default Container;
