import { Link } from '@components/fragments/links/Link';
import * as React from 'react';

export type ResumeEntryType = 'employment' | 'lifeEvent' | 'other';

export interface Employment {
  title: string;
  type: ResumeEntryType;
  duration:
    | string
    | {
        startYear: string;
        endYear?: string;
      };
  content?: JSX.Element | string;
}

const employments: Employment[] = [
  {
    title: 'CyberAgent Inc.',
    type: 'employment',
    duration: {
      startYear: '2019.4',
    },
    content: <p>Full-time web developer.</p>,
  },
  {
    title: 'BluAge Inc.',
    type: 'employment',
    duration: {
      startYear: '2021.3',
    },
  },
  {
    title: 'Anyflow Inc.',
    type: 'employment',
    duration: {
      startYear: '2020.7',
      endYear: '2021.3',
    },
  },
  {
    title: 'Graduated Doshisha Univ.',
    type: 'lifeEvent',
    duration: '2019.3',
    content: 'BSc in Computer Science',
  },
  {
    title: 'PIXTA Inc.',
    type: 'employment',
    duration: {
      startYear: '2018.7',
      endYear: '2019.9',
    },
    content: (
      <p>
        Woked full-stack on{' '}
        <Link
          href="https://plus.pixta.co.jp/entry/2020/12/28/120000"
          target="blank"
        >
          mecelo.jp
        </Link>{' '}
        (closed)
      </p>
    ),
  },
  {
    title: 'activo Inc.',
    type: 'employment',
    duration: {
      startYear: '2016.8',
      endYear: '2017.10',
    },
    content: (
      <p>
        Web frontend at{' '}
        <Link href="https://activo.jp/" target="blank">
          activo.jp
        </Link>
      </p>
    ),
  },
];

const skills: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Node.js',
  'Ruby',
  'Go',
];

export const data = {
  employments,
  skills,
} as const;
