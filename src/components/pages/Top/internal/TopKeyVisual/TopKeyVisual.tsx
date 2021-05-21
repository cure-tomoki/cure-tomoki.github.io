import { Picture } from '@components/fragments/media/Picture';
import * as React from 'react';
import styled from 'styled-components';

import useWindowSize from '~/hooks/useWindowSize';

export const TopKeyVisual: React.FC = () => {
  const { isTablet } = useWindowSize();

  const iconSize = isTablet ? 128 : 256;
  return (
    <Container>
      <MainIcon
        alt="profile picture"
        height={iconSize}
        size={iconSize}
        sourcePaths={[
          {
            srcSet: '/images/mainIcon.webp',
            type: 'image/webp',
          },
          {
            srcSet: '/images/mainIcon.png',
            type: 'image/png',
          },
        ]}
        width={iconSize}
      />
      <TextContainer>
        <TitleText>Tomoki Kano</TitleText>
        <SubTitleText>Frontend Web Developer / Designer</SubTitleText>
      </TextContainer>
    </Container>
  );
};

const Container = styled.section(({ theme }) => ({
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

const MainIcon = styled(Picture)<{ size: number }>(({ theme, size }) => ({
  width: size,
  height: size,
  display: 'inline-block',
  boxSizing: 'border-box',
  borderRadius: theme.radius.round,
  border: `${theme.spacing.half}px solid ${theme.color.onBackground}`,
  backgroundColor: theme.color.primary,
  overflow: 'hidden',
  [theme.media.tablet]: {
    borderWidth: theme.spacing.quarter,
  },
}));

const TextContainer = styled.div(({ theme }) => ({
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

const TitleText = styled.h1(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: theme.spacing.normal,
  fontWeight: 'bold',
  fontSize: theme.fontSize.xxl,
  [theme.media.sp]: {
    letterSpacing: theme.spacing.half,
    fontSize: theme.fontSize.l,
  },
}));

const SubTitleText = styled.p(({ theme }) => ({
  color: theme.color.onBackgroundDim,
  fontSize: theme.fontSize.xs,
  [theme.media.sp]: {
    fontSize: theme.fontSize.xxs,
  },
}));
