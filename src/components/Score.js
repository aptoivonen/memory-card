import PropTypes from "prop-types";
import styles from "styled-components";

const Wrapper = styles.div`
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
