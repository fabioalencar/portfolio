import styled from "styled-components";

const Container = styled.section`
  background: var(--color--grey);
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  margin: auto;
  main {
    flex-grow: 1.5;
    height: 600px;
    text-align: center;
    color: #fff;
    align-content: space-between;
    flex-direction: column;
  }
  aside {
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    flex-flow: column;
    text-align: center;
    section:nth-child(1) {
      background: var(--color--green);
      flex-grow: 1;
    }
    section:nth-child(2) {
      background: var(--color--blue);
      flex-grow: 1;
      color: #fff;
    }
  }
`;

export default Container;
