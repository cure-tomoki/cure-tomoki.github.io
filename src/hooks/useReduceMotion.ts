import * as React from 'react';

const useReduceMotion = () => {
  const [isMotionReduced, setIsMotionReduced] = React.useState(false);

  const mediaQuery =
    (window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)')) ||
    null;

  React.useEffect(() => {
    if (mediaQuery === null) return;
    setIsMotionReduced(mediaQuery.matches);

    const handleChange = () => {
      setIsMotionReduced(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return {
    isMotionReduced,
  };
};

export default useReduceMotion;
