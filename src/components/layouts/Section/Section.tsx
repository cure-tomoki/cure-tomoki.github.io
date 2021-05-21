import * as React from 'react';
import styled from 'styled-components';

type Props<
  T extends keyof JSX.IntrinsicElements = 'div'
> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  children?: React.ReactNode;
};

export const Section = <T extends keyof JSX.IntrinsicElements>({
  children,
  ...rest
}: Props<T>) => {
  return (
    <>
      <Inner {...rest}>{children}</Inner>
    </>
  );
};

const Inner = styled.div(({ theme }) => ({
  margin: `0 auto ${theme.spacing.quadruple}px`,
  padding: theme.spacing.quadruple,
  maxWidth: theme.constant.maxContentWidth,
  background: theme.color.surface,
  boxSizing: 'border-box',
  borderRadius: theme.radius.quadruple,
  color: theme.color.onSurface,
  fontSize: theme.fontSize.s,
  [theme.media.tablet]: {
    margin: `0 ${theme.spacing.double}px  ${theme.spacing.double}px`,
  },
  [theme.media.sp]: {
    fontSize: theme.fontSize.xs,
    borderRadius: theme.radius.double,
    padding: theme.spacing.double,
  },
}));
