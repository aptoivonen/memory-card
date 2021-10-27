import PropTypes from "prop-types";
import { useRef } from "react";
import { Container, Name, Image } from "./Card.styles";

const Card = ({ card: { id, name, url }, selectCard }) => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.blur();
    selectCard(id);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Space") {
      handleClick();
    }
  };

  return (
    <Container
      tabIndex={0}
      ref={ref}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      <Name>{name}</Name>
      <Image src={url} />
    </Container>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  selectCard: PropTypes.func.isRequired,
};

export default Card;
