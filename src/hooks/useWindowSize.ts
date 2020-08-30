import throttle from 'lodash/throttle';
import * as React from 'react';

interface Dimentions {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [dimentions, setDimentions] = React.useState<Dimentions>({
    width: 200,
    height: 800,
  });

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

  return dimentions;
};

export default useWindowSize;
