import styled from "styled-components";

const Component = styled.div`
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

const Text = styled.p`
  font-size: 6rem;
  font-weight: bold;
`;

const SmallText = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const GameWon = () => {
  return (
    <Component>
      <Text>You Got 'Em!</Text>
      <SmallText>Click To Restart</SmallText>
    </Component>
  );
};

export default GameWon;
