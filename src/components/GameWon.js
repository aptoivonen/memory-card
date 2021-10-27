import PropTypes from "prop-types";
import styled from "styled-components";

const Component = styled.div`
  color: green;
  cursor: pointer;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Text = styled.p`
  font-size: 6rem;
  font-weight: bold;
`;

const SmallText = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const GameWon = ({ onClick }) => {
  return (
    <Component onClick={onClick}>
      <Text>You Got 'Em!</Text>
      <SmallText>Click To Restart</SmallText>
    </Component>
  );
};

GameWon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GameWon;
