import * as React from 'react';
import styled from 'styled-components';

import useTheme from '~/hooks/useTheme';
import useWindowSize from '~/hooks/useWindowSize';
import MainIcon from '~/molecules/MainIcon';
import PageTemplate from '~/templates/PageTemplate';

const IndexPage: React.FC = () => {
  const { isTablet } = useWindowSize();
  const { themeName } = useTheme();

  return (
    <PageTemplate>
      <TopSection>
        <BackgroundImage
          alt=""
          aria-hidden={true}
          src={`/images/topBackground_${themeName}.svg`}
        />
        <TopContainer>
          <MainIcon size={isTablet ? 128 : 256} />
          <TopTextContainer>
            <TopHeadingText>Tomoki Kano</TopHeadingText>
            <TopSubHeadingText>
              Web Developer / Designer / Photographer
            </TopSubHeadingText>
          </TopTextContainer>
        </TopContainer>
      </TopSection>

      <IntroductionSection>
        <IntroductionSectionContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </IntroductionSectionContent>
      </IntroductionSection>
    </PageTemplate>
  );
};

const TopSection = styled.section(({ theme }) => ({
  position: 'relative',
  paddingTop: '30vh',
  width: '100%',
  height: '80vh',
  boxSizing: 'border-box',
  [theme.media.tablet]: {
    maxHeight: '40rem',
    paddingTop: '20%',
  },
  [theme.media.sp]: {
    maxHeight: '25rem',
  },
}));

const BackgroundImage = styled.img({
  position: 'absolute',
  bottom: -1,
  width: '100%',
  zIndex: -1,
});

const TopContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  maxWidth: theme.constant.maxContentWidth,
  margin: '0 auto',
  [theme.media.tablet]: {
    flexDirection: 'column',
    width: '100%',
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
  position: 'relative',
  width: '100%',
  background: theme.color.surface,

  '&::after': {
    position: 'absolute',
    bottom: -128,
    display: 'block',
    content: '""',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: `128px 100vw 0 0`,
    borderColor: `${theme.color.surface} transparent transparent transparent`,
  },

  [theme.media.sp]: {
    '&::after': {
      bottom: -64,
      borderWidth: `64px 100vw 0 0`,
    },
  },
}));

const IntroductionSectionContent = styled.div(({ theme }) => ({
  margin: '0 auto',
  maxWidth: theme.constant.maxContentWidth,
  padding: theme.spacing.quadruple,
  paddingTop: 0,
  [theme.media.sp]: {
    maxWidth: '100%',
    padding: `${theme.spacing.quadruple}px ${theme.spacing.double}px`,
  },
}));

export default IndexPage;
