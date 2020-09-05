import * as React from 'react';
import styled from 'styled-components';

import ContentSectionHeading from '~/atoms/ContentSectionHeading';
import Employments, { Employment, EmploymentTypeMap } from '~/data/employment';
import Skills from '~/data/skills';

const EmploymentItem = ({ title, description, duration, type }: Employment) => {
  const durationString = [
    duration.startYear,
    (duration.ongoing || duration.endYear) && '-',
    (duration.ongoing && 'today') || duration.endYear,
  ].join(' ');
  return (
    <_EmploymentItem>
      <EmploymentTitle aria-label={`${EmploymentTypeMap[type]} at ${title}`}>
        {title}
      </EmploymentTitle>
      <EmploymentDuration>
        {durationString}
        {type !== 'fullTime' && (
          <EmploymentType aria-hidden={true}>
            ({EmploymentTypeMap[type]})
          </EmploymentType>
        )}
      </EmploymentDuration>
      <p>{description}</p>
    </_EmploymentItem>
  );
};

const ResumeContent: React.FC = () => {
  return (
    <>
      {/* employments */}
      <ContentSectionHeading level={2}>Employment</ContentSectionHeading>
      <EmploymentList>
        {Employments.map((e, idx) => (
          <EmploymentItem {...e} key={`employmentItem-${idx}`} />
        ))}
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
