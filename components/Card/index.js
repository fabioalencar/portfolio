import Container from "./styles";

const Card = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Card;
