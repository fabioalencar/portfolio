import styled from "styled-components";

const Container = styled.header`
  nav {
    display: none;
  }
  div {
    :before {
      content: "";
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
    .fabioalencar {
      font-size: 1.5em;
      margin-left: 30px;
      padding-top: 3px;
      text-decoration: none;
      font-weight: normal;
      color: var(--color--dark-grey);
      transition: all 0.3s ease-in-out;
      span {
        color: var(--color--green);
      }
    }
    button {
      background: none;
      margin: 0;
      padding: 0;
      border: none;
      height: 40px;
      transition: all 0.3s ease-in-out;
      img {
        width: 100%;
        transition: all 0.3s ease-in-out;
      }
    }
    .languages {
      margin: 0;
      padding: 0;
      li {
        display: inline;
      }
    }
  }
  .scroll {
    margin: 0px;
    padding: 10px 20px;
    background-color: #fff;
    .fabioalencar {
      font-size: 1.3em;
    }
    button {
      height: 40px;
      img {
        width: 80%;
      }
    }
  }
  .on {
    :before {
      background: var(--color--green);
      right: 0;
      bottom: 0;
    }
    :after {
      content: "";
      bottom: 0;
      background-color: #fff;
      opacity: 1;
    }
  }
`;

export default Container;
