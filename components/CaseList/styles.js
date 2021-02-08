import styled from "styled-components";

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
`;

export default Container;
