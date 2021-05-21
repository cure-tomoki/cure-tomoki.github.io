import PageTemplate from '@templates/PageTemplate';
import * as React from 'react';

import { TopAbout } from './internal/TopAbout';
import { TopContacts } from './internal/TopContacts';
import { TopKeyVisual } from './internal/TopKeyVisual';
import { TopResume } from './internal/TopResume';

export const Top: React.FC = () => {
  return (
    <PageTemplate>
      <main>
        <TopKeyVisual />
        <TopAbout />
        <TopResume />
        <TopContacts />
      </main>
    </PageTemplate>
  );
};
