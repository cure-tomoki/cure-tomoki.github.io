export const TABLET_MAX_WIDTH = 768;
export const SP_MAX_WIDTH = 480;

const SPACING_BASE = 8;
const RADIUS_BASE = 8;

export type Theme = 'light' | 'dark';

// material design'd dark theme anatomy
// @see https://material.io/design/color/dark-theme.html#anatomy
interface SemanticTheme {
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  onSurfaceDim: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
}

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
  lightBlue: '#0088e1',
  dimBlue: '#007dce',
  marigold: '#eca73c',
};

const createTheme = (theme: Theme) => {
  const semanticTheme: SemanticTheme =
    theme === 'light'
      ? // light theme
        {
          background: palette.white,
          onBackground: palette.darkgray,
          surface: palette.whitesmoke,
          onSurface: palette.darkgray,
          onSurfaceDim: palette.darksilver,
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
          onSurfaceDim: palette.dimsilver,
          primary: palette.dimBlue,
          onPrimary: palette.darkgray,
          secondary: palette.marigold,
          onSecondary: palette.darkgray,
        };
  const color = { ...palette, ...semanticTheme };

  return {
    // constants
    constant: {
      maxContentWidth: '50rem',
    },

    // color
    color,

    // media
    media: {
      tablet: `@media (max-width: ${TABLET_MAX_WIDTH}px)`,
      sp: `@media (max-width: ${SP_MAX_WIDTH}px)`,
    },

    // spacing
    spacing: {
      quarter: SPACING_BASE / 4,
      half: SPACING_BASE / 2,
      normal: SPACING_BASE,
      double: SPACING_BASE * 2,
      triple: SPACING_BASE * 3,
      quadruple: SPACING_BASE * 4,
    },

    // border-radius
    radius: {
      normal: RADIUS_BASE,
      double: RADIUS_BASE * 2,
      quadruple: RADIUS_BASE * 4,
      round: RADIUS_BASE * 1000,
    },

    // font-family
    fontFamily: {
      default: 'Spinnaker',
      monospaced: 'Andale Mono, Courier New, Lucida Console',
    },

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
    },
  };
};

export default createTheme;
