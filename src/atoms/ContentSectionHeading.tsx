import * as React from 'react';
import styled, { DefaultTheme, CSSObject } from 'styled-components';

interface Props
  extends React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4'> {
  level: 1 | 2 | 3 | 4;
  children: string;
}

const ContentSectionHeader: React.FC<Props> = ({
  level,
  children,
  ...headerProps
}) => {
  switch (level) {
    case 1:
      return <Header1 {...headerProps}>{children}</Header1>;
    case 2:
      return <Header2 {...headerProps}>{children}</Header2>;
    case 3:
      return <Header3 {...headerProps}>{children}</Header3>;
    case 4:
      return <Header4 {...headerProps}>{children}</Header4>;
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
});

const Header1 = styled.h1(({ theme }) => ({
  ...CommonStyle(theme),
  fontSize: theme.fontSize.xl,
  marginBottom: theme.spacing.normal,
  [theme.media.sp]: {
    fontSize: theme.fontSize.l,
  },
}));

const Header2 = styled.h2(({ theme }) => ({
  ...CommonStyle(theme),
  fontSize: theme.fontSize.l,
  marginBottom: theme.spacing.normal,
  [theme.media.sp]: {
    fontSize: theme.fontSize.m,
  },
}));

const Header3 = styled.h3(({ theme }) => ({
  ...CommonStyle(theme),
  fontSize: theme.fontSize.m,
  marginBottom: theme.spacing.half,
  [theme.media.sp]: {
    fontSize: theme.fontSize.s,
  },
}));

const Header4 = styled.h4(({ theme }) => ({
  ...CommonStyle(theme),
  marginBottom: theme.spacing.half,
}));

export default ContentSectionHeader;
