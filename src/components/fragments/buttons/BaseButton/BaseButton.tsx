import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export const BaseButton: React.FC<Props> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const Button = styled.button(({ theme }) => ({
  borderRadius: theme.radius.round,
  padding: `${theme.spacing.half}px ${theme.spacing.double}px`,
  fontSize: theme.fontSize.m,
  cursor: 'pointer',
}));
