import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.header`
  box-sizing: border-box;

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
  @keyframes bg {
    100% {
      background-position: -3000px -3000px;
    }
  }
  .header {
    nav {
      display: none;
      position: fixed;
      top: 100px;
      left: 150px;
      z-index: 3;
      a {
        transition: all 0.3s;
        :hover {
          font-weight: bold;
          padding-left: 25px;
          font-family: "quero_sansbold";
        }
      }
      @media ${device.mobileL} {
        top: 90px;
        left: 90px;
      }
      footer {
        animation: menu 0.3s cubic-bezier(0.33, 1, 0.68, 1) forwards;
        opacity: 0;
        animation-delay: 0.7s;
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
            .Typewriter__cursor {
              display: none;
            }
            @media ${device.mobileL} {
              font-size: 1.2em;
            }
          }
          .active {
            opacity: 0.5;
            text-decoration: underline;
            :hover {
              font-weight: normal;
              font-size: 1.8em;
              padding: 0;
              cursor: unset;
            }
          }
        }
      }
    }
    .bg-menu {
      content: "";
      background-size: 140px;
      animation: bg 100s linear infinite;
      position: fixed;
      border-radius: 10px;
      z-index: 2;
      top: 0;
      left: 0;
      right: 100%;
      bottom: 100%;
      margin: 20px;
      padding: 20px;
      background-color: transparent;
      transition: all 0.3s;
    }
    .bg-menu-after {
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
    z-index: 4;
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
      overflow: hidden;
      button {
        cursor: pointer;
        z-index: 4;
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
        i {
          transition: all 0.3s ease-in-out;
          :nth-child(1) {
            display: block;
          }
          :nth-child(2) {
            display: none;
          }
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
            color: var(--developer);
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

  .scroll {
    .down {
      opacity: 0;
    }
  }
  @keyframes arrowDown {
    from {
      bottom: 0px;
    }
    to {
      bottom: 30px;
    }
  }
  .off {
    .bg-menu {
      right: 100%;
      bottom: 100%;
    }
  }
  .on {
    .topbar {
      .button {
        button {
          i {
            transition: all 0.3s ease-in-out;
            :nth-child(1) {
              display: none;
            }
            :nth-child(2) {
              display: block;
            }
          }
        }
      }
    }
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
    .bg-menu {
      background: url("/pattern.svg") var(--default) repeat;
      right: 0%;
      bottom: 0%;
      z-index: 3;
    }
    .bg-menu-after {
      content: "";
      bottom: 0;
      background-color: #fff;
      opacity: 1;
      z-index: 2;
    }
  }
  .designer.on,
  .developer.on {
    .button {
      button {
        i {
          color: #fff;
        }
      }
    }
    nav {
      a {
        color: #fff;
      }
    }
    .social-media {
      li {
        a {
          color: #fff;
          :hover {
            color: var(--color--dark-grey);
          }
        }
      }
    }
    footer {
      color: #fff;
    }
  }
  .designer.on {
    .bg-menu {
      background: url("/pattern.svg") var(--designer) repeat;
    }
  }
  .developer.on {
    .bg-menu {
      background: url("/pattern.svg") var(--developer) repeat;
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
    .down {
      font-size: 0.3em;
      right: 15px;
    }
    .hideMobile {
      display: none !important;
    }
    div {
      nav {
        ul {
          li {
            line-height: 2.2em;
            a {
              :hover {
                font-weight: normal;
                font-size: 1.2em;
                padding: 0;
              }
            }
          }
        }
      }
    }
    footer {
      font-size: 0.7em;
      margin-top: 20px;
      span {
        display: block;
      }
    }
  }
  @media ${device.mobileS} {
    div {
      nav {
        left: 75px;
        ul {
          li {
            line-height: 1.8em;
            a {
              font-size: 0.9em;
            }
          }
        }
        footer {
          font-size: 0.6em;
        }
      }
    }
  }
`;

export default Container;
