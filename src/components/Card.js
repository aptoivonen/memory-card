import PropTypes from "prop-types";
import { Container, Name, Image } from "./Card.styles";

const Card = ({ card: { id, name, url }, selectCard }) => {
  return (
    <Container onClick={() => selectCard(id)}>
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
