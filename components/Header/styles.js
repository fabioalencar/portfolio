import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.header`
  box-sizing: border-box;
  footer {
    display: none;
  }
  @keyframes menu {
    from {
      opacity: 0;
      margin-left: -50px;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }
  @keyframes bg-animation {
    100% {
      background-position: -3000px -3000px;
    }
  }
  div {
    nav {
      display: none;
      position: fixed;
      top: 100px;
      left: 150px;
      z-index: 3;
      @media ${device.mobileL} {
        top: 90px;
        left: 90px;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          animation: menu 0.3s cubic-bezier(0.33, 1, 0.68, 1) forwards;
          opacity: 0;

          line-height: 3em;
          :nth-child(1) {
            animation-delay: 0.1s;
          }
          :nth-child(2) {
            animation-delay: 0.2s;
          }
          :nth-child(3) {
            animation-delay: 0.3s;
          }
          :nth-child(4) {
            animation-delay: 0.4s;
          }
          :nth-child(5) {
            animation-delay: 0.5s;
          }
          :nth-child(6) {
            animation-delay: 0.6s;
          }
          a {
            font-size: 1.8em;
            text-decoration: none;
            color: var(--color--dark-grey);
            /*transition: all 1s ease-in-out;*/
            .Typewriter__cursor {
              display: none;
            }
            @media ${device.mobileL} {
              font-size: 1.2em;
            }
          }
          .active {
            font-weight: 800;
            border-bottom: 3px solid var(--color--dark-grey);
          }
        }
      }
    }
    :before {
      content: "";
      background: url(pattern.svg) repeat;
      background-size: 100px;
      animation: bg-animation 100s linear infinite;
      position: fixed;
      border-radius: 10px;
      z-index: 1;
      top: 0;
      left: 0;
      right: 100%;
      bottom: 100%;
      margin: 20px;
      padding: 20px;
      background-color: transparent;
      transition: all 0.3s ease-in-out;
    }
    :after {
      content: "";
      position: fixed;
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 100%;
      margin: 0;
      padding: 0;
      opacity: 0;
      background-color: #fff;
      transition: opacity 0.3s ease-in-out;
    }
  }
  .topbar {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    margin: 20px;
    padding: 20px;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    .fabioalencar {
      opacity: 1;
      font-size: 0.8em;
      padding-top: 3px;
      text-decoration: none;
      font-weight: normal;
      color: var(--color--dark-grey);
      transition: all 0.3s ease-in-out;
      span.dot {
        color: var(--default);
      }
    }
    .button {
      width: 120px;
      button {
        cursor: pointer;
        z-index: 3;
        position: absolute;
        background: none;
        margin: 0;
        padding: 0;
        border: none;
        height: 40px;
        width: 40px;
        transition: all 0.3s ease-in-out;
        :focus {
          outline: 0;
        }
        img {
          width: 100%;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    .social-media {
      margin: 0;
      padding: 0;
      width: 120px;
      justify-content: flex-end;
      display: flex;
      li {
        display: inline;
        a {
          padding: 5px;
          text-decoration: none;
          color: var(--color--dark-grey);
          transition: all 0.3s;
          :hover {
            color: var(--default);
          }
        }
      }
    }
    .languages {
      width: 40px;
      margin: 0;
      padding: 0;
      li {
        /*display: inline;*/
      }
    }
  }
  .scroll {
    margin: 0px;
    padding: 10px;
    background: rgb(255, 255, 255);
    .fabioalencar {
      font-size: 0.8em;
    }
    button {
      height: 40px;
      img {
        width: 80%;
      }
    }
  }
  .on {
    nav {
      display: block;
      a {
        margin-left: 0px;
        opacity: 1;
      }
    }
    .fabioalencar {
      opacity: 0;
    }
    .scroll {
      margin: 20px;
      padding: 20px;
      background: none;
    }
    :before {
      background: url(pattern.svg) var(--default) repeat;
      background-size: 140px;
      right: 0;
      bottom: 0;
      z-index: 2;
    }
    :after {
      content: "";
      bottom: 0;
      background-color: #fff;
      opacity: 1;
      z-index: 1;
    }
  }
  .designer.on,
  .developer.on {
    nav {
      a {
        color: #fff;
      }
      .active {
        border-bottom: 3px solid #fff;
      }
    }
  }
  .designer.on {
    :before {
      background: url(pattern.svg) var(--designer) repeat;
    }
  }
  .developer.on {
    :before {
      background: url(pattern.svg) var(--developer) repeat;
    }
  }
  .designer {
    .fabioalencar {
      .dot {
        color: var(--designer) !important;
      }
    }
  }
  .developer {
    .fabioalencar {
      .dot {
        color: var(--developer) !important;
      }
    }
  }
  @media ${device.mobileL} {
    .hideMobile {
      display: none !important;
    }
  }
`;

export default Container;
