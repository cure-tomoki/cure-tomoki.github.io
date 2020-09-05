import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({ children, ...props }) => (
  <_Link rel="noreferrer noopener" {...props}>
    {children}
  </_Link>
);

const _Link = styled.a(({ theme }) => ({
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

export default Link;
