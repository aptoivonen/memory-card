import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NumberUpdater from "./NumberUpdater";

const Text = styled.p`
  margin-right: auto;
  font-size: 1.5rem;
  color: var(--light-text-color);
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
