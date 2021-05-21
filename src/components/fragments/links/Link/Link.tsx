import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
}

export const Link: React.FC<Props> = ({ children, ...props }) => (
  <Anchor rel="noreferrer noopener" {...props}>
    {children}
  </Anchor>
);

const Anchor = styled.a(({ theme }) => ({
  color: theme.color.primary,
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: '.3s',
  '&:visited': {
    color: theme.color.primary,
  },
  '&:hover': {
    transition: '.3s',
    color: theme.color.primaryLight,
  },
}));
