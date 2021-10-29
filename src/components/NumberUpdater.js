import { useEffect, useRef, useState } from "react";
import { useDidUpdateEffect } from "../useUtils";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./NumberUpdater.css";

const ANIMATION_DURATION = 500;

const Display = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2ch;
`;

const NumberUpdater = ({ children }) => {
  const [hasCurrentNumberChanged, setHasCurrentNumberChanged] = useState(false);
  const displayRef = useRef(null);
  const previousNumberRef = useRef();

  useEffect(() => {
    previousNumberRef.current = children;
  }, [children]);

  useDidUpdateEffect(() => {
    setHasCurrentNumberChanged(true);
  }, [children]);

  const handleNumberChangeEffectEnd = () => {
    setHasCurrentNumberChanged(false);
  };

  return (
    <Display>
      <CSSTransition
        in={hasCurrentNumberChanged}
        timeout={ANIMATION_DURATION}
        classNames={"number-update"}
        nodeRef={displayRef}
        onEntered={handleNumberChangeEffectEnd}
      >
        <span
          ref={displayRef}
          style={{ "--number-animation-duration": `${ANIMATION_DURATION}ms` }}
        >
          {children}
        </span>
      </CSSTransition>
    </Display>
  );
};

NumberUpdater.propTypes = {
  children: PropTypes.number.isRequired,
};

export default NumberUpdater;
