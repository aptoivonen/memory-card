import PropTypes from "prop-types";
import styled from "styled-components";
import NumberUpdater from "./NumberUpdater";

const Wrapper = styled.div`
  margin-right: auto;
  font-size: 1.5rem;
  color: var(--light-text-color);
`;

const Score = ({ score: { bestScore, currentScore } }) => {
  return (
    <Wrapper>
      Current Score: <NumberUpdater>{currentScore}</NumberUpdater>| Best Score:{" "}
      <NumberUpdater>{bestScore}</NumberUpdater>
    </Wrapper>
  );
};

Score.propTypes = {
  score: PropTypes.shape({
    bestScore: PropTypes.number.isRequired,
    currentScore: PropTypes.number.isRequired,
  }).isRequired,
};

export default Score;
