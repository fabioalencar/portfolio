import Container from "./styles";

const PageTitle = ({ children, context = "--default", contrast = "dark" }) => {
  return (
    <Container className={context} contrast={contrast}>
      {children}
    </Container>
  );
};

export default PageTitle;
