import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NumberUpdater from "./NumberUpdater";

const Text = styled.p`
  margin-right: auto;
  font-size: 0.5rem;
  color: var(--light-text-color);

  @media (min-width: 700px) {
    font-size: 1rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

const Level = ({ currentLevel }) => {
  return (
    <Text>
      Level <NumberUpdater>{currentLevel}</NumberUpdater>
    </Text>
  );
};

Level.propTypes = {
  currentLevel: PropTypes.number.isRequired,
};

export default Level;
