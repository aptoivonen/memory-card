import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: auto;
  font-size: 1.5rem;
`;

const Score = ({ score: { bestScore, currentScore } }) => {
  return (
    <Wrapper>
      Current Score: {currentScore} | Best Score: {bestScore}
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
