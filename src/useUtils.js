/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export const useDidUpdateEffect = (fn, dependencies) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    } else {
      didMountRef.current = true;
    }
  }, dependencies);
};
