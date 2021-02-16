import Container from "./styles";

const Button = ({ children, href }) => {
  return (
    <Container href={href} target="_blank">
      {children}
    </Container>
  );
};

export default Button;
