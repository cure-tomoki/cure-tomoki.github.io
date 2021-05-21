import * as React from 'react';
import styled, { DefaultTheme, CSSObject } from 'styled-components';

interface Props
  extends React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4'> {
  level: 1 | 2 | 3 | 4;
  children: string;
}

export const TopHeading: React.FC<Props> = ({
  level,
  children,
  ...HeadingProps
}) => {
  switch (level) {
    case 1:
      return <Heading1 {...HeadingProps}>{children}</Heading1>;
    case 2:
      return <Heading2 {...HeadingProps}>{children}</Heading2>;
    case 3:
      return <Heading3 {...HeadingProps}>{children}</Heading3>;
    case 4:
      return <Heading4 {...HeadingProps}>{children}</Heading4>;
    default:
      return null;
  }
};

const CommonStyle = (theme: DefaultTheme): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.color.onSurface,
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

const Heading1 = styled.h1(({ theme }) => ({
  ...CommonStyle(theme),
  fontSize: theme.fontSize.xl,
  marginBottom: theme.spacing.double,

  '&::before': {
    position: 'relative',
    display: 'inline-block',
    // 'important' due to styled-components bug(?)
    // content property is somehow dropped during render.
    content: '""!important',
    width: '0.4em',
    height: '0.4em',
    borderRight: `0.2em solid ${theme.color.primary}`,
    borderTop: `0.2em solid ${theme.color.primary}`,
    transform: 'rotate(45deg)',
    marginRight: theme.spacing.double,
  },

  [theme.media.sp]: {
    fontSize: theme.fontSize.l,
    marginBottom: theme.spacing.normal,
  },
}));

const Heading2 = styled.h2(({ theme }) => ({
  ...CommonStyle(theme),
  fontSize: theme.fontSize.m,
  marginBottom: theme.spacing.normal,
  [theme.media.sp]: {
    fontSize: theme.fontSize.s,
  },
}));

const Heading3 = styled.h3(({ theme }) => ({
  ...CommonStyle(theme),
  fontSize: theme.fontSize.s,
  marginBottom: theme.spacing.normal,
  [theme.media.sp]: {
    fontSize: theme.fontSize.xs,
  },
}));

const Heading4 = styled.h4(({ theme }) => ({
  ...CommonStyle(theme),
}));
