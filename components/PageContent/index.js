import { ThemeProvider } from "styled-components";
import Container from "./styles";

const PageTitle = ({ children, context = "--default" }) => {
  return <Container className={context}>{children}</Container>;
};

export default PageTitle;
