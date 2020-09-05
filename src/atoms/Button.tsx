import * as React from 'react';
import styled, { DefaultTheme, CSSObject } from 'styled-components';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  level?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ level = 'primary', children, ...props }) => {
  switch (level) {
    case 'primary':
      return (
        <Primary type="button" {...props}>
          {children}
        </Primary>
      );
    case 'secondary':
      return (
        <Secondary type="button" {...props}>
          {children}
        </Secondary>
      );
    default:
      return null;
  }
};

const CommonStyle = (theme: DefaultTheme): CSSObject => ({
  borderRadius: theme.radius.round,
  padding: `${theme.spacing.half}px ${theme.spacing.double}px`,
  fontSize: theme.fontSize.m,
  cursor: 'pointer',
  transition: '.3s',
});

const Primary = styled.button(({ theme }) => ({
  ...CommonStyle(theme),
  border: `2px solid ${theme.color.primary}`,
  backgroundColor: theme.color.primary,
  color: theme.color.onPrimary,
  '&:hover': {
    border: `2px solid ${theme.color.primaryLight}`,
    backgroundColor: theme.color.primaryLight,
    transition: '.3s',
  },
}));

const Secondary = styled.button(({ theme }) => ({
  ...CommonStyle(theme),
  border: `2px solid ${theme.color.primary}`,
  backgroundColor: 'transparent',
  color: theme.color.primary,
  '&:hover': {
    border: `2px solid ${theme.color.primaryLight}`,
    color: theme.color.primaryLight,
    transition: '.3s',
  },
}));

export default Button;
