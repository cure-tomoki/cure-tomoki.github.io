import * as React from 'react';

import Link from '~/atoms/Link';

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

const Employments: Employment[] = [
  {
    title: 'Cyberagent Inc.',
    type: 'employment',
    duration: {
      startYear: '2019.04',
    },
    content: (
      <p>
        Web developer at{' '}
        <Link href="https://ameblo.jp/" target="blank">
          Ameba Blog
        </Link>
      </p>
    ),
  },
  {
    title: 'BluAge Inc.',
    type: 'employment',
    duration: {
      startYear: '2021.03',
    },
    content: 'Part-time job',
  },
  {
    title: 'Anyflow Inc.',
    type: 'employment',
    duration: {
      startYear: '2020.07',
      endYear: '2021.03',
    },
    content: 'Part-time job',
  },
  {
    title: 'Graduated Doshisha Univ.',
    type: 'lifeEvent',
    duration: '2019.03',
    content: 'BSc in Computer Science',
  },
  {
    title: 'PIXTA Inc.',
    type: 'employment',
    duration: {
      startYear: '2018.07',
      endYear: '2019.09',
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
      startYear: '2016.08',
      endYear: '2017.10',
    },
    content: (
      <p>
        Frontend at{' '}
        <Link href="https://activo.jp/" target="blank">
          activo.jp
        </Link>
      </p>
    ),
  },
];

export default Employments;
