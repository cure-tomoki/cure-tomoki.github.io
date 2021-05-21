import * as React from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export const SecondaryButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Secondary type="button" {...props}>
      {children}
    </Secondary>
  );
};
const Secondary = styled(BaseButton)(({ theme }) => ({
  border: `2px solid ${theme.color.primary}`,
  backgroundColor: 'transparent',
  color: theme.color.primary,
  transition: '.3s',
  '&:hover': {
    border: `2px solid ${theme.color.primaryLight}`,
    color: theme.color.primaryLight,
    transition: '.3s',
  },
}));
