import styled from "styled-components";
import { device } from "../Config/Breakpoints";

const Container = styled.a`
  background: var(--color--dark-grey);
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  padding: 18px 30px;
  box-shadow: 8px 8px var(--developer);
  margin: 0px auto;
  display: inline-block;
  transition: all 0.3s;
  :hover {
    box-shadow: -8px 8px var(--designer);
  }

  @media ${device.mobileL} {
    margin: 0;
    font-size: 0.8em;
  }
`;

export default Container;
