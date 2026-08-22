export interface Milestone {
  label: string;
  date: string; // ISO YYYY-MM-DD, or '' if TBD
}

export interface Deadline {
  conference: string;
  url: string;
  location: string;
  abstract?: string;
  paper: string; // full paper deadline (sort key); '' if TBD
  rebuttalStart?: string;
  rebuttalEnd?: string;
  notification?: string;
  cameraReady?: string;
  confStart: string;
  confEnd: string;
  note?: string;
}

// All dates are the officially published deadlines (AoE where applicable).
// Sorted at render time by full paper deadline.
export const deadlines: Deadline[] = [
  {
    conference: 'NeurIPS 2026',
    url: 'https://neurips.cc/Conferences/2026/Dates',
    location: 'Sydney, Australia',
    abstract: '2026-05-04',
    paper: '2026-05-06',
    rebuttalStart: '2026-07-27',
    rebuttalEnd: '2026-08-03',
    notification: '2026-09-24',
    confStart: '2026-12-06',
    confEnd: '2026-12-12',
  },
  {
    conference: 'KDD 2027',
    url: 'https://kdd2027.kdd.org/research-track-call-for-papers/',
    location: 'San Jose, USA',
    abstract: '2026-07-19',
    paper: '2026-07-26',
    rebuttalStart: '2026-09-29',
    rebuttalEnd: '2026-10-13',
    notification: '2026-11-14',
    confStart: '2027-08-01',
    confEnd: '2027-08-05',
    note: 'Research Track, First Cycle',
  },
  {
    conference: 'WSDM 2027',
    url: 'https://www.wsdm-conference.org/2027/',
    location: 'Hong Kong',
    abstract: '2026-08-17',
    paper: '2026-08-24',
    notification: '2026-11-02',
    confStart: '2027-02-15',
    confEnd: '2027-02-19',
  },
  {
    conference: 'IEEE BigData 2026',
    url: 'https://bigdataieee.org/BigData2026/important-dates/',
    location: 'Phoenix, AZ, USA',
    paper: '2026-08-21',
    notification: '2026-10-24',
    cameraReady: '2026-11-14',
    confStart: '2026-12-14',
    confEnd: '2026-12-17',
  },
  {
    conference: 'ICLR 2027',
    url: 'https://iclr.cc/Conferences/2027/Dates',
    location: 'California, USA',
    abstract: '2026-09-18',
    paper: '2026-09-25',
    rebuttalStart: '2026-11-05',
    rebuttalEnd: '2026-11-18',
    notification: '2026-12-16',
    confStart: '2027-04-26',
    confEnd: '2027-04-30',
  },
  {
    conference: 'ECIR 2027',
    url: 'https://www.ecir2027.co.uk/call-for-full-papers',
    location: 'Southampton, UK',
    abstract: '2026-09-21',
    paper: '2026-10-05',
    notification: '2026-12-07',
    confStart: '2027-03-21',
    confEnd: '2027-03-25',
  },
  {
    conference: 'COLING 2027',
    url: 'https://2027.coling-iccl.org/',
    location: 'Macau, China',
    paper: '2026-10-12',
    notification: '2027-02-10',
    confStart: '2027-05-09',
    confEnd: '2027-05-14',
    note: 'ARR submission; commitment Dec 23, 2026',
  },
  {
    conference: 'NAACL 2027',
    url: 'https://2027.naacl.org/',
    location: 'San Francisco, USA',
    paper: '2026-10-12',
    notification: '2027-02-10',
    confStart: '2027-06-01',
    confEnd: '2027-06-05',
    note: 'ARR submission; commitment Dec 23, 2026',
  },
  {
    conference: 'CHIIR 2027',
    url: 'https://chiir2027.github.io/',
    location: 'Berlin, Germany',
    abstract: '2026-10-08',
    paper: '2026-10-15',
    notification: '2026-12-15',
    confStart: '2027-03-07',
    confEnd: '2027-03-11',
  },
  {
    conference: 'SIGIR 2027',
    url: 'https://sigir2027.org/',
    location: 'TBD',
    paper: '',
    confStart: '',
    confEnd: '',
    note: 'Dates TBD',
  },
];
