import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  margin: -60px auto 100px;
  max-width: 800px;
  h2 {
    font-size: 0.5em;
    text-align: center;
    opacity: 0.7;
    font-weight: 100;
    margin-top: 0;
  }
  .brands {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    div {
      transition: all 0.3s;
      margin: 5px 20px;
      opacity: 0.5;
      :hover {
        opacity: 1;
      }
    }
  }
  @media ${device.mobileL} {
    padding: 50px;
    margin: -50px auto 50px;
    h3 {
      font-size: 0.5em;
    }
    .brands {
      justify-content: center;
      div {
        margin: 15px 18px;
      }
      :before {
        display: none;
      }
    }
  }
  @media ${device.mobileS} {
    .brands {
      div {
        margin: 10px 12px;
      }
    }
  }
`;

export default Container;
