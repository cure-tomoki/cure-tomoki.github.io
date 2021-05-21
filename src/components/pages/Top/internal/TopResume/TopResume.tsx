import { PrimaryButton } from '@components/fragments/buttons/PrimaryButton';
import * as React from 'react';
import styled, { DefaultTheme, CSSObject } from 'styled-components';

import { TopSection } from '../TopSection';
import { data, Employment } from './data';

const FIRST_VIEW_ITEM_COUNT = 3;

const EmploymentItem = ({ title, duration, content }: Employment) => {
  const durationString =
    typeof duration === 'string'
      ? duration
      : [
          duration.startYear,
          `-`,
          duration.endYear ? duration.endYear : '',
        ].join(' ');
  return (
    <_EmploymentItem>
      <TimeLinePoint />
      <EmploymentTitle>
        <EmploymentTitleText>{title}</EmploymentTitleText>
        <EmploymentDuration>{durationString}</EmploymentDuration>
      </EmploymentTitle>
      {content}
    </_EmploymentItem>
  );
};

export const TopResume: React.FC = () => {
  const [folded, setFolded] = React.useState(
    data.employments.length > FIRST_VIEW_ITEM_COUNT
  );

  const employments = folded
    ? data.employments.slice(0, FIRST_VIEW_ITEM_COUNT)
    : data.employments;
  const skills = data.skills;

  return (
    <TopSection headingID="resume" headingText="Résumé">
      <EmploymentList>
        {employments.map((employment, idx) => (
          <EmploymentItem {...employment} key={`employmentItem-${idx}`} />
        ))}
        {folded && (
          <UnfoldButtonContainer>
            <UnfoldButton onClick={() => setFolded(false)}>
              See More
            </UnfoldButton>
          </UnfoldButtonContainer>
        )}
      </EmploymentList>

      <SkillBodyText>Languages and frameworks I frequently use:</SkillBodyText>
      <SkillList>
        {skills.map((skill, idx) => (
          <SkillItem key={`skillItem-${idx}`}>{skill}</SkillItem>
        ))}
        <SkillItemAndMore>and more...</SkillItemAndMore>
      </SkillList>
    </TopSection>
  );
};

const EmploymentList = styled.ul(({ theme }) => ({
  marginBottom: theme.spacing.quadruple,
}));

const timelinePointFactory = (
  theme: DefaultTheme,
  size: number
): CSSObject => ({
  content: '""!important',
  position: 'absolute',
  top: `calc(0.75 * ${theme.fontSize.m} - ${size / 2}px)`,
  left: (-1 * size) / 2 - 1,
  width: size,
  height: size,
  boxSizing: 'border-box',
  border: `2px solid ${theme.color.primary}`,
  borderRadius: theme.radius.round,
  backgroundColor: theme.color.primary,
});

const TimeLinePoint = styled.span(({ theme }) => ({
  ...timelinePointFactory(theme, 10),
}));

const _EmploymentItem = styled.li(({ theme }) => ({
  position: 'relative',
  color: theme.color.onSurface,
  marginLeft: theme.spacing.normal,
  paddingLeft: theme.spacing.double,
  paddingBottom: theme.spacing.triple,
  borderLeft: `2px solid ${theme.color.primary}`,
  [theme.media.sp]: {
    paddingBottom: theme.spacing.double,
  },
  '&:first-child': {
    position: 'relative',
    marginLeft: theme.spacing.normal + 2,
    borderLeft: 'none',
    '&::before': {
      position: 'absolute',
      display: 'block',
      content: '""!important',
      top: `calc(${theme.fontSize.m} * 1.5 * 0.5)`,
      left: -2,
      width: 2,
      height: `calc(100% - ${theme.fontSize.m} * 1.5 * 0.5)`,
      backgroundColor: theme.color.primary,
    },
  },
}));

const EmploymentTitle = styled.div({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
});

const EmploymentTitleText = styled.span(({ theme }) => ({
  flex: '0 1 auto',
  fontSize: theme.fontSize.m,
  fontWeight: 'bold',
}));

const EmploymentDuration = styled.span(({ theme }) => ({
  flex: '0 0 auto',
  marginLeft: theme.spacing.normal,
  color: theme.color.onSurfaceVeryDim,
  fontSize: theme.fontSize.xs,
  [theme.media.sp]: {
    marginLeft: theme.spacing.half,
    fontSize: theme.fontSize.xxs,
  },
}));

const SkillBodyText = styled.p(({ theme }) => ({
  color: theme.color.onSurfaceDim,
  marginBottom: theme.spacing.double,
}));

const UnfoldButtonContainer = styled.li(({ theme }) => ({
  color: theme.color.onSurface,
  marginLeft: theme.spacing.normal,
  paddingLeft: theme.spacing.double,
  paddingBottom: theme.spacing.triple,
  borderWidth: `0 0 0 2px`,
  borderStyle: 'solid',
  borderImage: `linear-gradient(to bottom, ${theme.color.primary}, transparent) 1 100%`,
  [theme.media.sp]: {
    paddingBottom: theme.spacing.double,
  },
}));

const UnfoldButton = styled(PrimaryButton)(({ theme }) => ({
  margin: `${theme.spacing.normal}px 0`,
  fontSize: theme.fontSize.s,
  fontWeight: 'normal',
}));

const SkillList = styled.ul({});

const SkillItem = styled.li(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing.normal,
  marginBottom: theme.spacing.half,
  color: theme.color.onSurface,
}));

const SkillItemAndMore = styled.li(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing.half,
  marginBottom: theme.spacing.half,
  padding: `0 ${theme.spacing.normal}px`,
  color: theme.color.onSurfaceVeryDim,
}));
