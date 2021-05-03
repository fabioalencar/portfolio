import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  padding: 0 30px;
  ul {
    padding: 0;
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1600px;
    li {
      width: 750px;
      height: 500px;
      list-style: none;
      background: var(--color--dark-grey);
      padding: 50px;
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
      }

      h2 {
        font-size: 1.3em;
        margin: 0;
      }
      p {
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
        padding: 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
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
          opacity: 0;
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
        img {
          object-fit: cover;
        }
      }

      :hover {
        .image {
          :before {
            opacity: 0.8;
          }
        }
        .content {
          opacity: 1;
        }
        span {
          box-shadow: -8px 8px #fff;
        }
      }
    }
  }

  @media ${device.laptopL} {
    ul {
      li {
        width: 700px;
        height: 465px;
      }
    }
  }

  @media ${device.laptopM} {
    ul {
      li {
        width: 620px;
        height: 412px;
      }
    }
  }

  @media ${device.laptopS} {
    ul {
      li {
        width: 575px;
        height: 380px;
      }
    }
  }

  @media ${device.laptop} {
    ul {
      li {
        width: 450px;
        height: 300px;
        h2 {
          font-size: 0.9em;
        }
        p {
          font-size: 0.55em;
        }
        span {
          padding: 15px;
        }
      }
    }
  }

  @media ${device.tablet} {
    ul {
      li {
        width: 750px;
        height: 500px;
        h2 {
          font-size: 1.3em;
        }
        p {
          font-size: 1em;
        }
        span {
          padding: 20px;
        }
      }
    }
  }
  @media ${device.mobileL} {
    padding: 0;
    margin: 30px;
    ul {
      li {
        width: 400px;
        height: 235px;

        background-size: cover !important;
        background-position-x: -200px !important;
        h2 {
          font-size: 0.8em;
        }
        p {
          font-size: 0.5em;
        }
        span {
          width: 145px;
          font-size: 0.5em;
          padding: 15px;
          display: none;
        }
      }
    }
  }
  @media ${device.mobileM} {
    ul {
      li {
        width: 315px;
        height: 210px;
        h2 {
          font-size: 0.6em;
        }
      }
    }
  }
  @media ${device.mobileS} {
    ul {
      li {
        width: 260px;
        height: 175px;
        .content {
          padding: 0 30px;
        }
        h2 {
          font-size: 0.5em;
        }
      }
    }
  }
`;

export default Container;
