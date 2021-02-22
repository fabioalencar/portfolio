import Container from "./styles";

const ImageCard = ({ children, className, imageLabel, context }) => {
  const defaultClass = "imageCard";
  return (
    <Container
      className={`${className} ${defaultClass}`}
      context={context}
      imageLabel={imageLabel}
    >
      {children}
    </Container>
  );
};

export default ImageCard;
