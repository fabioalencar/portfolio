import Container from "./styles";

const ImageCard = ({ children, className, imageLabel, context }) => {
  return (
    <Container className={className} context={context} imageLabel={imageLabel}>
      {children}
    </Container>
  );
};

export default ImageCard;
