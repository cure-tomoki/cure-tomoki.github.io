import throttle from 'lodash/throttle';
import * as React from 'react';

import { TABLET_MAX_WIDTH, SP_MAX_WIDTH } from '~/theme';

interface Dimentions {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [dimentions, setDimentions] = React.useState<Dimentions | null>(null);
  const [isSP, setIsSP] = React.useState(true);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const handleWindowResize = throttle(() => {
      setDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 300);

    setDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  React.useEffect(() => {
    if (dimentions === null) {
      return;
    }
    setIsSP(dimentions.width < SP_MAX_WIDTH);
    setIsTablet(dimentions.width < TABLET_MAX_WIDTH);
  }, [dimentions]);

  return {
    dimentions,
    isSP,
    isTablet,
  };
};

export default useWindowSize;
