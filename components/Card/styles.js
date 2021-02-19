import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.div`
  background: var(--color--dark-grey);
  color: #fff;
  border: 4px solid rgba(45, 49, 66, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px;
  text-align: left;
  transition: all 0.3s;
  font-size: 0.7em;
  display: flex;
  :hover {
    background: #fff;
    color: var(--color--dark-grey);
  }
  small {
    opacity: 0.5;
    display: inline-block;
    font-size: 0.7em;
    margin-top: 5px;
  }
  img {
    border-radius: 10px;
    border: none;
    box-shadow: none;
  }
  span {
    font-size: 0.8em;
    width: 70%;
    margin: 20px;
    strong {
      color: #fff;
    }
  }
  p {
    max-width: inherit;
    margin: auto 0;
    text-align: left;
  }

  @media ${device.mobileL} {
    padding: 20px;
    span {
      font-size: 0.6em;
      width: 60%;
      margin: 20px 0 20px 20px;
      strong {
        color: #fff;
      }
    }
  }
`;

export default Container;
