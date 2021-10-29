import PropTypes from "prop-types";
import styled from "styled-components";
import NumberUpdater from "./NumberUpdater";

const Wrapper = styled.div`
  margin-right: auto;
  font-size: 0.5rem;
  color: var(--light-text-color);

  @media (min-width: 1000px) {
    font-size: 1rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

const NumberWrapper = styled.div`
  display: inline-block;
  & + & {
    padding-left: 1rem;
    margin-left: 1rem;
    border-left: 3px solid var(--light-text-color);
  }
`;

const Score = ({ score: { bestScore, currentScore } }) => {
  return (
    <Wrapper>
      <NumberWrapper>
        Current Score: <NumberUpdater>{currentScore}</NumberUpdater>
      </NumberWrapper>
      <NumberWrapper>
        Best Score: <NumberUpdater>{bestScore}</NumberUpdater>
      </NumberWrapper>
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
