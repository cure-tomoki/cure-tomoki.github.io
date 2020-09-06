import * as React from 'react';

const useReduceMotion = () => {
  const [isMotionReduced, setIsMotionReduced] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery =
      window?.matchMedia('(prefers-reduced-motion: reduce)') || null;

    if (mediaQuery === null) return;
    setIsMotionReduced(mediaQuery.matches);

    const handleChange = () => {
      setIsMotionReduced(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    isMotionReduced,
  };
};

export default useReduceMotion;
