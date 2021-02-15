import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 700px;
  margin: auto;
  text-align: center;
  color: var(--color--dark-grey);
  justify-content: center;
  h1 {
    font-size: 3em;
    margin-bottom: 40px;
    font-weight: normal;
    span {
      background-color: var(--default);
      border-radius: 10px;
      padding: 5px 10px;
    }
  }
  .Typewriter {
    font-size: 1.8em;
  }

  @media ${device.mobileL} {
    padding: 50px;
    overflow: hidden;
    height: 100vh;
    h1 {
      font-size: 3.8rem;
      span {
        display: table;
        padding: 2px 5px;
      }
    }
    .Typewriter {
      font-size: 1.8rem;
      text-align: left;
    }
  }
  @media ${device.mobileM} {
    h1 {
      font-size: 3.4rem;
    }
    .Typewriter {
      font-size: 1.6rem;
    }
  }
  @media ${device.mobileS} {
    h1 {
      font-size: 2.7rem;
    }
    .Typewriter {
      font-size: 1.3rem;
    }
  }
`;

export default Container;