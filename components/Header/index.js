import Footer from "./../Footer";
import Container from "./styles";

const Header = () => (
  <Container>
    <button>SVG Burguer</button>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/case">Work</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Designer</a>
        </li>
        <li>
          <a href="#">Developer</a>
        </li>
        <li>
          <a href="#">Resumé</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <ul>
      <li>
        <a href="#">en</a>
      </li>
      <li>
        <a href="#">pt-br</a>
      </li>
    </ul>
    <Footer />
  </Container>
);

export default Header;
