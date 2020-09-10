export type ResumeEntryType = 'employment' | 'lifeEvent' | 'other';

export type EmploymentType = 'fullTime' | 'partTime' | 'intern';
export const EmploymentTypeLabels: { [x in EmploymentType]: string } = {
  fullTime: 'Full-time',
  partTime: 'Part-time',
  intern: 'Internship',
};

export interface Employment {
  title: string;
  type: ResumeEntryType;
  description?: string;
  employmentType?: EmploymentType;
  duration: {
    startYear: string;
    endYear?: string;
    ongoing?: boolean; // default: false
  };
}

const Employments: Employment[] = [
  {
    title: 'Cyberagent Inc.',
    type: 'employment',
    description: 'Full time Web frontend developer at Ameba.',
    duration: {
      startYear: '2019.04',
      ongoing: true,
    },
  },
  {
    title: 'Anyflow Inc.',
    type: 'employment',
    employmentType: 'partTime',
    duration: {
      startYear: '2020.07',
      ongoing: true,
    },
  },
  {
    title: 'Graduated Doshisha University',
    type: 'lifeEvent',
    description: 'BSc in Computer Science.',
    duration: {
      startYear: '2019.03',
    },
  },
  {
    title: 'PIXTA Inc.',
    type: 'employment',
    description: 'Worked full-stack at mecelo.jp.',
    employmentType: 'partTime',
    duration: {
      startYear: '2018.07',
      endYear: '2019.09',
    },
  },
  {
    title: 'Cyberagent Inc.',
    type: 'employment',
    employmentType: 'intern',
    duration: {
      startYear: '2018.08',
      endYear: '2018.10',
    },
  },
  {
    title: 'ATeam Inc.',
    type: 'employment',
    employmentType: 'intern',
    duration: {
      startYear: '2017.08',
    },
  },
  {
    title: 'VOYAGE GROUP Inc.',
    type: 'employment',
    description: 'Treasure 2017',
    employmentType: 'intern',
    duration: {
      startYear: '2017.08',
    },
  },
  {
    title: 'activo Inc.',
    type: 'employment',
    description: 'Fist ever job as a web frontend engineer.',
    employmentType: 'partTime',
    duration: {
      startYear: '2016.08',
      endYear: '2017.10',
    },
  },
];

export default Employments;
