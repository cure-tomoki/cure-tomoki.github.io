import createTheme from '../theme';

type ThemeInterface = ReturnType<typeof createTheme>;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
