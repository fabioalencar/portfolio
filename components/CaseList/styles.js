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
        color: #fff;
        text-decoration: none;
        :hover {
          .image {
            :before {
              opacity: 0;
            }
          }
        }
      }

      h2 {
        width: 40%;
        font-size: 1.3em;
        margin-bottom: 0;
      }
      p {
        width: 30%;
        font-size: 0.8em;
        line-height: 1.3em;
      }
      span {
        border-radius: 10px;
        border: 3px solid #fff;
        box-shadow: 8px 8px #fff;
        width: 140px;
        font-size: 0.6em;
        padding: 20px;
        margin-top: 20px;
        text-align: center;
        display: inline-block;
        transition: all 0.3s;
      }
      .content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        padding: 50px;
      }
      .image {
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
      }
      .image > div {
        position: absolute !important;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
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
  }

  @media (max-width: var(--laptop)) {
    a {
      h2 {
        width: 60% !important;
      }
      p {
        width: 50% !important;
      }
    }
  }

  @media ${device.tablet} {
    a {
      h2 {
        width: 72% !important;
      }
      p {
        width: 60% !important;
      }
    }
  }
  @media ${device.mobileL} {
    padding: 0;
    margin: 30px;
    li {
      background-size: cover !important;
      background-position-x: -200px !important;
      min-height: 50vh !important;
      a {
        justify-content: space-between;
        :hover {
          .image {
            :before {
              opacity: 1;
            }
          }
        }
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
        .image {
          > div {
            left: -400px;
            top: 0px;
            position: absolute;
            z-index: 0;
          }
          :before {
            opacity: 0.75;
          }
        }
      }
    }
  }
  @media ${device.mobileM} {
    li {
      min-height: 400px !important;
    }
  }
  @media ${device.mobileS} {
    li {
      min-height: 450px !important;
    }
  }
`;

export default Container;
