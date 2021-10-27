import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.5rem;
`;

const Level = ({ currentLevel }) => {
  return <Text>Level {currentLevel}</Text>;
};

Level.propTypes = {
  currentLevel: PropTypes.number.isRequired,
};

export default Level;
