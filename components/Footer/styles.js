import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.footer`
  font-size: 0.6em;
  color: var(--color--dark-grey);
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  padding: 50px 30px;
  span {
    margin-right: 0px;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
    margin-top: 50px;
    span {
      width: 100%;
      display: block;
      margin-bottom: 20px;
      text-align: center;
      line-height: 1.2em;
      :first-child {
        order: 1;
      }
    }
  }
`;

export default Container;
