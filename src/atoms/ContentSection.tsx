import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ContentSection: React.FC<Props> = ({ children }) => {
  return <_ContentSection>{children}</_ContentSection>;
};

const _ContentSection = styled.section(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing.quadruple,
  maxWidth: theme.constant.maxContentWidth,
  background: theme.color.surface,
  boxSizing: 'border-box',
  borderRadius: theme.radius.quadruple,
  color: theme.color.onSurface,
  fontSize: theme.fontSize.s,
  [theme.media.tablet]: {
    margin: `0 ${theme.spacing.double}px`,
  },
  [theme.media.sp]: {
    borderRadius: theme.radius.double,
    padding: theme.spacing.double,
  },
}));

export default ContentSection;
