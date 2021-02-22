import Container from "./styles";
import smoothScroller from "../utils/smoothScroll";

const Button = ({ children, href, scroller, title }) => {
  return (
    <Container
      href={href}
      onClick={() => {
        scroller ? smoothScroller("/#cases") : "";
      }}
      title={title}
    >
      {children}
    </Container>
  );
};

export default Button;
