import * as React from 'react';
import styled from 'styled-components';

import useWindowSize from '~/hooks/useWindowSize';
import MainIcon from '~/molecules/MainIcon';
import PageTemplate from '~/templates/PageTemplate';

const IndexPage: React.FC = () => {
  const { isTablet } = useWindowSize();

  return (
    <PageTemplate>
      <TopSection>
        <MainIcon size={isTablet ? 128 : 256} />
        <TopTextContainer>
          <TopHeadingText>Tomoki Kano</TopHeadingText>
          <TopSubHeadingText>
            Web Developer / Designer / Photographer
          </TopSubHeadingText>
        </TopTextContainer>
      </TopSection>

      <IntroductionSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IntroductionSection>
    </PageTemplate>
  );
};

const TopSection = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  maxWidth: theme.constant.maxContentWidth,
  margin: `${theme.spacing.normal * 32}px auto`,
  [theme.media.tablet]: {
    margin: `${theme.spacing.normal * 16}px auto`,
    flexDirection: 'column',
    width: '100%',
  },
  [theme.media.sp]: {
    margin: `${theme.spacing.normal * 8}px auto`,
  },
}));

const TopTextContainer = styled.div(({ theme }) => ({
  color: theme.color.onBackground,
  marginRight: theme.spacing.double,
  [theme.media.tablet]: {
    textAlign: 'center',
    marginRight: 0,
    marginTop: theme.spacing.quadruple,
  },
  [theme.media.sp]: {
    marginTop: theme.spacing.double,
  },
}));

const TopHeadingText = styled.h1(({ theme }) => ({
  fontSize: theme.fontSize.xxl,
  [theme.media.sp]: {
    fontSize: theme.fontSize.l,
  },
}));

const TopSubHeadingText = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.xs,
  [theme.media.sp]: {
    fontSize: theme.fontSize.xxs,
  },
}));

const IntroductionSection = styled.section(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing.quadruple,
  maxWidth: theme.constant.maxContentWidth,
  background: theme.color.surface,
  boxSizing: 'border-box',
  borderRadius: theme.radius.quadruple,
  [theme.media.tablet]: {
    margin: `0 ${theme.spacing.double}px`,
  },
  [theme.media.sp]: {
    borderRadius: theme.radius.double,
    padding: theme.spacing.double,
  },
}));

export default IndexPage;
