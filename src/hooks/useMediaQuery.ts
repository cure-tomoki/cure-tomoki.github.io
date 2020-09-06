import * as React from 'react';

const useMediaQuery = (
  queryString: string,
  callBack: (matches: boolean) => void
): void => {
  React.useEffect(() => {
    const mediaQuery = window?.matchMedia(queryString) || null;

    if (mediaQuery === null) return;
    callBack(mediaQuery.matches);

    const handleChange = () => {
      callBack(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [queryString, callBack]);
};

export default useMediaQuery;
