import Section from './Section';

const awards: { year: string; text: string }[] = [
  { year: '2021', text: 'ACM SIGIR Student Travel Grant' },
  { year: '2021', text: 'Rossin Professional Development Program Award, Lehigh University' },
  { year: '2020', text: 'ISWC Student Grant' },
  { year: '2020', text: 'ACM SIGIR Student Travel Grant' },
  { year: '2018', text: 'Best Paper Award — Intl. Workshop on Profiles & Data:Search ’18' },
  { year: '2018', text: 'ACM SIGIR Student Travel Grant' },
  { year: '2015', text: 'RCEAS Dean’s Fellowship' },
  { year: '2014', text: 'Chinese Government Scholarship, China Scholarship Council' },
  { year: '2013', text: 'First Prize, National Mathematical Contest in Modeling (Jiangsu)' },
  { year: '2012', text: 'Honorable Mention for Social Practice' },
  { year: '2012', text: '2nd Prize, 11th Higher Mathematics Competition of Jiangsu Province' },
  { year: '2011–14', text: 'Student Scholarship' },
  { year: '2011–14', text: 'Merit Student' },
];

export default function Awards() {
  return (
    <Section title="Honors & Awards" id="awards">
      <ul className="awards">
        {awards.map((a, i) => (
          <li key={i}>
            <span className="marker" aria-hidden="true">🏆</span>
            <span className="year">{a.year}</span>
            <span className="text">{a.text}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .awards {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        li {
          display: grid;
          grid-template-columns: 1.4rem 3.4rem 1fr;
          align-items: baseline;
          gap: 0.5rem;
          font-size: 0.98rem;
          line-height: 1.5;
        }
        .marker {
          font-size: 0.8rem;
        }
        .year {
          color: var(--text-faint);
          font-variant-numeric: tabular-nums;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .text {
          color: var(--text-muted);
        }
      `}</style>
    </Section>
  );
}
