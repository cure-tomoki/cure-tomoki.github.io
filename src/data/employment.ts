export type EmploymentType = 'fullTime' | 'partTime' | 'intern';

export const EmploymentTypeMap: { [x in EmploymentType]: string } = {
  fullTime: 'Full-time',
  partTime: 'Part-time',
  intern: 'Internship',
};

export interface Employment {
  title: string;
  description?: string;
  type: EmploymentType;
  duration: {
    startYear: string;
    endYear?: string;
    ongoing?: boolean; // default: false
  };
}

const Employments: Employment[] = [
  {
    title: 'Cyberagent Inc.',
    description: 'Full time frontend developer at Ameba.',
    type: 'fullTime',
    duration: {
      startYear: '2019.04',
      ongoing: true,
    },
  },
  {
    title: 'Anyflow Inc.',
    type: 'partTime',
    duration: {
      startYear: '2020.07',
      ongoing: true,
    },
  },
  {
    title: 'PIXTA Inc.',
    description:
      'Part time job as full stack engineer. Founding member of mecelo.jp.',
    type: 'partTime',
    duration: {
      startYear: '2018.07',
      endYear: '2019.09',
    },
  },
  {
    title: 'Cyberagent Inc.',
    type: 'intern',
    duration: {
      startYear: '2018.08',
      endYear: '2018.10',
    },
  },
  {
    title: 'ATeam Inc.',
    type: 'intern',
    duration: {
      startYear: '2017.08',
    },
  },
  {
    title: 'VOYAGE GROUP Inc.',
    description: 'Treasure 2017',
    type: 'intern',
    duration: {
      startYear: '2017.08',
    },
  },
  {
    title: 'activo Inc.',
    description: 'Part time job as frontend engineer.',
    type: 'partTime',
    duration: {
      startYear: '2016.08',
      endYear: '2017.10',
    },
  },
];

export default Employments;
