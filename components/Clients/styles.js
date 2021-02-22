import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.section`
  margin: -60px auto 100px;
  max-width: 800px;
  h3 {
    font-size: 0.5em;
    text-align: center;
    opacity: 0.3;
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
      div {
        margin: 5px 10px;
        display: none !important;
        :nth-child(1),
        :nth-child(2),
        :nth-child(3),
        :nth-child(4) {
          display: block !important;
        }
      }
      :before {
        display: none;
      }
    }
  }
`;

export default Container;
