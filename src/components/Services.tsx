import Section from './Section';

const reviewer = [
  'WSDM 2022–2026', 'NeurIPS 2023–2025', 'SIGIR 2022–2025', 'CIKM 2020, 2025',
  'KDD 2022–2025', 'ICLR 2024–2025', 'TheWebConf 2022–2025', 'COLING 2022, 2025',
  'NAACL 2025', 'SemEval 2024–2025', 'ECML PKDD 2023–2024', 'EMNLP 2023–2024',
  'IJCAI 2023', 'ACL 2023', 'TKDE 2021',
];

export default function Services() {
  return (
    <Section title="Services" id="services">
      <div className="group">
        <h3>Area Chair</h3>
        <p className="line">ACL ARR 2023, 2025</p>
      </div>
      <div className="group">
        <h3>Organizer</h3>
        <p className="line">
          <a href="https://multiconer.github.io/organizers" target="_blank" rel="noopener noreferrer">
            SemEval-2023: Task 2 (co-located with ACL-2023)
          </a>
        </p>
      </div>
      <div className="group">
        <h3>Program Committee / Reviewer</h3>
        <ul className="tags">
          {reviewer.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </div>
      <style jsx>{`
        .group { margin-bottom: 1.6rem; }
        .group:last-child { margin-bottom: 0; }
        h3 {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
          color: var(--text-faint);
          margin-bottom: 0.6rem;
        }
        .line {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
        }
        .tags li {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          font-size: 0.83rem;
          color: var(--text-muted);
          transition: border-color 0.18s ease, color 0.18s ease;
        }
        .tags li:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
      `}</style>
    </Section>
  );
}
