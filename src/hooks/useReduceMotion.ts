import * as React from 'react';

import useMediaQuery from '~/hooks/useMediaQuery';

const useReduceMotion = () => {
  const [isMotionReduced, setIsMotionReduced] = React.useState(false);

  useMediaQuery('(prefers-reduced-motion: reduce)', setIsMotionReduced);

  return {
    isMotionReduced,
  };
};

export default useReduceMotion;
