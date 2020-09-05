import throttle from 'lodash/throttle';
import * as React from 'react';

import { TABLET_MAX_WIDTH, SP_MAX_WIDTH } from '~/theme';

interface Dimentions {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [dimentions, setDimentions] = React.useState<Dimentions>({
    width: 200,
    height: 800,
  });
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
    setIsSP(dimentions.width < SP_MAX_WIDTH);
    setIsTablet(dimentions.width < TABLET_MAX_WIDTH);
  }, [dimentions.width]);

  return {
    width: dimentions.width,
    height: dimentions.height,
    isSP,
    isTablet,
  };
};

export default useWindowSize;
