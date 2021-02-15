import styled from "styled-components";

import { device } from "../Config/Breakpoints";

const Container = styled.section`
  padding: 0 12vh;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      background: var(--color--dark-grey);
      padding: 50px;
      height: 600px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
    }
  }

  @media ${device.mobileL} {
    padding: 0;
    margin: 30px;
  }
`;

export default Container;
