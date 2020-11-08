import createTheme from '../theme';

type ThemeInterface = ReturnType<typeof createTheme>;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
