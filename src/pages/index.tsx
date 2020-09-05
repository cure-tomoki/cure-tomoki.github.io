import * as React from 'react';
import styled from 'styled-components';

import ContentSection from '~/atoms/ContentSection';
import ContentSectionHeader from '~/atoms/ContentSectionHeader';
import useWindowSize from '~/hooks/useWindowSize';
import MainIcon from '~/molecules/MainIcon';
import PageTemplate from '~/templates/PageTemplate';

const IndexPage: React.FC = () => {
  const { isTablet } = useWindowSize();

  return (
    <PageTemplate>
      <main>
        {/* top splash */}
        <TopSection>
          <MainIcon size={isTablet ? 128 : 256} />
          <TopTextContainer>
            <TopHeadingText>Tomoki Kano</TopHeadingText>
            <TopSubHeadingText>
              Web Developer / Designer / Photographer
            </TopSubHeadingText>
          </TopTextContainer>
        </TopSection>

        {/* contents */}
        <ContentSection>
          <ContentSectionHeader level={1} id="AboutMe">
            About Me
          </ContentSectionHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ContentSection>
      </main>
    </PageTemplate>
  );
};

const TopSection = styled.section(({ theme }) => ({
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
  textTransform: 'uppercase',
  letterSpacing: theme.spacing.normal,
  fontWeight: 'bold',
  fontSize: theme.fontSize.xxl,
  [theme.media.sp]: {
    letterSpacing: theme.spacing.half,
    fontSize: theme.fontSize.l,
  },
}));

const TopSubHeadingText = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.xs,
  [theme.media.sp]: {
    fontSize: theme.fontSize.xxs,
  },
}));

export default IndexPage;
