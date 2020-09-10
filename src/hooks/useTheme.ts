import * as React from 'react';

import useMediaQuery from '~/hooks/useMediaQuery';
import createTheme, { Theme } from '~/theme';

const THEMES: {
  [t in Theme]: Theme;
} = {
  light: 'light',
  dark: 'dark',
};

const useTheme = () => {
  const [theme, setTheme] = React.useState<Theme>(THEMES.light);

  useMediaQuery('(prefers-color-scheme: dark)', (matches) => {
    setTheme(matches ? THEMES.dark : THEMES.light);
  });

  return {
    theme: React.useMemo(() => createTheme(theme), [theme]),
    themeName: theme,
  };
};

export default useTheme;
