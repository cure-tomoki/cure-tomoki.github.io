import * as React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <_Footer>
      <FooterContent>
        <CopyRight>
          <CopyRightIcon>&#x24B8;</CopyRightIcon>
          {`${year} Tomoki Kano. All Rights Reserved.`}
        </CopyRight>
      </FooterContent>
    </_Footer>
  );
};

const _Footer = styled.footer(({ theme }) => ({
  display: 'flex',
  borderTop: `1px solid ${theme.color.surface}`,
  marginTop: theme.spacing.quadruple,
  marginBottom: theme.spacing.double,
}));

const FooterContent = styled.footer(({ theme }) => ({
  width: '80%',
  color: theme.color.onSurface,
  maxWidth: theme.constant.maxContentWidth,
  margin: `${theme.spacing.double}px auto`,
  [theme.media.tablet]: {
    margin: `${theme.spacing.normal}px auto`,
  },
  [theme.media.sp]: {
    margin: `${theme.spacing.normal}px auto`,
  },
}));

const CopyRight = styled.p(({ theme }) => ({
  color: theme.color.onSurface,
  textAlign: 'center',
}));

const CopyRightIcon = styled.span(({ theme }) => ({
  fontSize: theme.fontSize.xxs,
  marginRight: theme.spacing.half,
}));

export default Footer;
