import styled from "styled-components";

const Container = styled.a`
  background: var(--color--dark-grey);
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px 30px;
  box-shadow: 8px 8px var(--developer);
  margin: 30px auto;
  display: inline-block;
  transition: all 0.3s;
  :hover {
    box-shadow: -8px 8px var(--designer);
  }
`;

export default Container;
