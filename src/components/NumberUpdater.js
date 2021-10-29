import { useRef, useState } from "react";
import { useDidUpdateEffect } from "../useUtils";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./NumberUpdater.css";

const DELAY = 500;

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2ch;
`;

const NumberUpdater = ({ children }) => {
  const [hasCurrentNumberChanged, setHasCurrentNumberChanged] = useState(false);
  const currentNumberRef = useRef(null);

  console.log("children", children);

  useDidUpdateEffect(() => {
    setHasCurrentNumberChanged(true);
  }, [children]);

  const handleNumberChangeEffectEnd = () => {
    setHasCurrentNumberChanged(false);
  };
  return (
    <CSSTransition
      in={hasCurrentNumberChanged}
      timeout={DELAY}
      classNames="number-update"
      nodeRef={currentNumberRef}
      onEntered={handleNumberChangeEffectEnd}
    >
      <Wrapper ref={currentNumberRef}>{children}</Wrapper>
    </CSSTransition>
  );
};

NumberUpdater.propTypes = {
  children: PropTypes.number.isRequired,
};

export default NumberUpdater;
