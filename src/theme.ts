export type Theme = 'light' | 'dark';

const SPACING_BASE = 8;
const RADIUS_BASE = 4;

const palette = {
  // desaturated
  black: '#000000',
  darkgray: '#333333',
  gray: '#757575',
  lightgray: '#858585',
  darksilver: '#aaaaaa',
  dimsilver: '#cccccc',
  silver: '#e2e2e2',
  lightsilver: '#efefef',
  whitesmoke: '#f8f8f8',
  white: '#ffffff',
  // saturated
  lightBlue: '#1388dc',
  marigold: '#eca73c',
} as const;

// material design'd dark theme anatomy
// @see https://material.io/design/color/dark-theme.html#anatomy
interface SemanticTheme {
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
}

const createTheme = (theme: Theme) => {
  const semanticTheme: SemanticTheme =
    theme === 'light'
      ? // light theme
        {
          background: palette.white,
          onBackground: palette.darkgray,
          surface: palette.whitesmoke,
          onSurface: palette.darkgray,
          primary: palette.lightBlue,
          onPrimary: palette.white,
          secondary: palette.marigold,
          onSecondary: palette.white,
        }
      : // dark theme
        {
          background: palette.black,
          onBackground: palette.whitesmoke,
          surface: palette.darkgray,
          onSurface: palette.white,
          primary: palette.lightBlue,
          onPrimary: palette.darkgray,
          secondary: palette.marigold,
          onSecondary: palette.darkgray,
        };
  const color = { ...palette, ...semanticTheme };

  return {
    // color
    color,

    // spacing
    spacing: {
      half: SPACING_BASE / 2, // 4px
      normal: SPACING_BASE, // 8px
      double: SPACING_BASE * 2, // 16px
      triple: SPACING_BASE * 3, // 24px
      quadruple: SPACING_BASE * 4, // 32px
    } as const,

    // border-radius
    radius: {
      normal: RADIUS_BASE,
      double: RADIUS_BASE * 2,
      round: RADIUS_BASE * 100,
    } as const,

    // font-family
    fontFamily: {
      default: 'unset',
      monospaced: 'Andale Mono, Courier New, Lucida Console',
    } as const,

    // font-sizes
    fontSize: {
      xxxs: '.6rem',
      xxs: '.8rem',
      xs: '1rem',
      s: '1.2rem',
      m: '1.4rem',
      l: '1.6rem',
      xl: '1.8rem',
      xxl: '2rem',
    } as const,
  };
};

export default createTheme;