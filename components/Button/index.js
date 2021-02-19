import Container from "./styles";
import smoothScroller from "../utils/smoothScroll";

const Button = ({ children, href, scroller }) => {
  return (
    <Container
      href={href}
      onClick={() => {
        scroller ? smoothScroller("/#cases") : "";
      }}
    >
      {children}
    </Container>
  );
};

export default Button;
