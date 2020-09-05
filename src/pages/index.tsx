import * as React from 'react';
import styled from 'styled-components';

import ContentSection from '~/atoms/ContentSection';
import ContentSectionHeading from '~/atoms/ContentSectionHeading';
import useWindowSize from '~/hooks/useWindowSize';
import MainIcon from '~/molecules/MainIcon';
import ContactsContent from '~/organisms/ContactsContent';
import ResumeContent from '~/organisms/ResumeContent';
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
              Frontend Web Developer / Designer
            </TopSubHeadingText>
          </TopTextContainer>
        </TopSection>

        {/* about me */}
        <ContentSection>
          <ContentSectionHeading level={1} id="aboutMe">
            About Me
          </ContentSectionHeading>
          <p>
            Hi. My my name is Tomoki, and I am a design-minded frontend web
            developer based in Tokyo Japan. I focus on creating elegant,
            performant, and accessible digital experiences for both users and
            develepers.
          </p>
        </ContentSection>

        {/* resume */}
        <ContentSection>
          <ContentSectionHeading level={1} id="resume">
            Résumé
          </ContentSectionHeading>
          <ResumeContent />
        </ContentSection>

        <ContentSection>
          <ContentSectionHeading level={1} id="works">
            Works
          </ContentSectionHeading>
          <WipContent>WIP 👷‍♂️</WipContent>
        </ContentSection>

        {/* contacts */}
        <ContentSection>
          <ContentSectionHeading level={1} id="contacts">
            Get in touch
          </ContentSectionHeading>
          <ContactsContent />
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

const WipContent = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.m,
  textAlign: 'center',
  color: theme.color.onSurfaceDim,
}));

export default IndexPage;
