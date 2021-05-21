import * as React from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Primary type="button" {...props}>
      {children}
    </Primary>
  );
};
const Primary = styled(BaseButton)(({ theme }) => ({
  border: `2px solid ${theme.color.primary}`,
  backgroundColor: theme.color.primary,
  color: theme.color.onPrimary,
  transition: '.3s',
  '&:hover': {
    border: `2px solid ${theme.color.primaryLight}`,
    backgroundColor: theme.color.primaryLight,
    transition: '.3s',
  },
}));
