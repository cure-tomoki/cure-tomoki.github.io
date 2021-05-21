import { Section } from '@components/layouts/Section';
import * as React from 'react';

import { TopHeading } from '../TopHeading';

interface Props {
  headingText?: string;
  headingID?: string;
  children: React.ReactNode;
}

export const TopSection: React.FC<Props> = ({
  headingText,
  headingID,
  children,
}) => {
  return (
    <Section as="section">
      {headingText !== undefined && (
        <TopHeading id={headingID} level={1}>
          {headingText}
        </TopHeading>
      )}
      {children}
    </Section>
  );
};
