import * as React from 'react';

import createTheme, { Theme } from '~/theme';

const THEMES: {
  [t in Theme]: Theme;
} = {
  light: 'light',
  dark: 'dark',
};

const useTheme = () => {
  const [theme, setTheme] = React.useState<Theme>(THEMES.light);

  React.useEffect(() => {
    const mediaQuery =
      window?.matchMedia('(prefers-color-scheme: dark)') || null;
    if (mediaQuery === null) return;
    const handleChange = () => {
      setTheme(mediaQuery.matches ? THEMES.dark : THEMES.light);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === THEMES.light) {
      setTheme(THEMES.dark);
    } else if (theme === THEMES.dark) {
      setTheme(THEMES.light);
    } else {
      console.warn('could not toggle color theme');
    }
  };

  return {
    theme: React.useMemo(() => createTheme(theme), [theme]),
    themeName: theme,
    toggleTheme,
  };
};

export default useTheme;
