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
  '&:hover': {
    opacity: 0.8,
  },
  '&:visited': {
    color: theme.color.lightBlue,
  },
}));

export default Link;
