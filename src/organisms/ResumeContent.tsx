import * as React from 'react';
import styled from 'styled-components';

import Button from '~/atoms/Button';
import ContentSectionHeading from '~/atoms/ContentSectionHeading';
import Employments, { Employment, EmploymentTypeMap } from '~/data/employment';
import Skills from '~/data/skills';

const FIRST_VIEW_ITEM_COUNT = 3;

const EmploymentItem = ({ title, description, duration, type }: Employment) => {
  const durationString = [
    duration.startYear,
    (duration.ongoing || duration.endYear) && '-',
    (duration.ongoing && 'today') || duration.endYear,
  ].join(' ');
  return (
    <_EmploymentItem>
      <EmploymentTitle>{title}</EmploymentTitle>
      <EmploymentDuration>
        {durationString}
        {type !== 'fullTime' && (
          <EmploymentType>({EmploymentTypeMap[type]})</EmploymentType>
        )}
      </EmploymentDuration>
      <p>{description}</p>
    </_EmploymentItem>
  );
};

const ResumeContent: React.FC = () => {
  const [folded, setFolded] = React.useState(
    Employments.length > FIRST_VIEW_ITEM_COUNT
  );

  const data = folded
    ? Employments.slice(0, FIRST_VIEW_ITEM_COUNT)
    : Employments;

  const handleUnfold = () => {
    setFolded(false);
  };

  return (
    <>
      {/* employments */}
      <ContentSectionHeading level={2}>Employment</ContentSectionHeading>
      <EmploymentList>
        {data.map((e, idx) => (
          <EmploymentItem {...e} key={`employmentItem-${idx}`} />
        ))}
        {folded && (
          <UnfoldButtonContainer>
            <UnfoldButton level="secondary" onClick={handleUnfold}>
              See More
            </UnfoldButton>
          </UnfoldButtonContainer>
        )}
      </EmploymentList>

      {/* skills */}
      <ContentSectionHeading level={2}>Skills</ContentSectionHeading>
      <SkillBodyText>
        Languages and Frameworks that I frequently use and fluent at.
      </SkillBodyText>
      <SkillList>
        {Skills.map((skill, idx) => (
          <SkillItem key={`skillItem-${idx}`}>{skill}</SkillItem>
        ))}
        <SkillItemAndMore>and more...</SkillItemAndMore>
      </SkillList>
    </>
  );
};

const EmploymentList = styled.ul(({ theme }) => ({
  marginTop: theme.spacing.double,
  marginBottom: theme.spacing.quadruple,
}));

const _EmploymentItem = styled.li(({ theme }) => ({
  color: theme.color.onSurface,
  marginLeft: theme.spacing.normal,
  paddingLeft: theme.spacing.double,
  paddingBottom: theme.spacing.triple,
  borderLeft: `2px solid ${theme.color.primary}`,
  [theme.media.sp]: {
    paddingBottom: theme.spacing.double,
  },
}));

const EmploymentTitle = styled.p(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.fontSize.m,
  fontWeight: 'bold',
  position: 'relative',
  '&::before': {
    content: '""!important',
    position: 'absolute',
    top: '50%',
    left: theme.spacing.triple * -1,
    transform: 'translateY(-50%)',
    width: 10,
    height: 10,
    border: `2px solid ${theme.color.primary}`,
    borderRadius: theme.radius.round,
    backgroundColor: theme.color.surface,
  },
}));

const EmploymentDuration = styled.span(({ theme }) => ({
  color: theme.color.onSurfaceDim,
  fontSize: theme.fontSize.xs,
}));

const EmploymentType = styled.span(({ theme }) => ({
  marginLeft: theme.spacing.normal,
}));

const SkillBodyText = styled.p(({ theme }) => ({
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

const UnfoldButton = styled(Button)(({ theme }) => ({
  margin: `${theme.spacing.normal} 0`,
  fontSize: theme.fontSize.s,
}));

const SkillList = styled.ul({});

const SkillItem = styled.li(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing.half,
  marginBottom: theme.spacing.half,
  padding: `0 ${theme.spacing.normal}px`,
  color: theme.color.onSurface,
  backgroundColor: 'transparent',
  border: `1px solid ${theme.color.onSurface}`,
  borderRadius: theme.radius.round,
  transition: '.3s',
  '&:hover': {
    fontWeight: 'bold',
    backgroundColor: theme.color.onSurface,
    color: theme.color.surface,
    transition: '.3s',
  },
}));

const SkillItemAndMore = styled.li(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing.half,
  marginBottom: theme.spacing.half,
  padding: `0 ${theme.spacing.normal}px`,
  color: theme.color.onSurfaceDim,
}));

export default ResumeContent;
