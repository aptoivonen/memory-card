import styled from "styled-components";

const Text = styled.p`
  font-size: 6rem;
  font-weight: bold;
  color: green;
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

const GameWon = () => {
  return <Text>You Got 'Em!</Text>;
};

export default GameWon;
