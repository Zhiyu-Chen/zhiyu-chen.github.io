import Section from './Section';
import { publications, type Publication } from '../lib/publications';

function Authors({ authors }: { authors: string }) {
  const parts = authors.split(/(Z\. Chen)/g);
  return (
    <span>
      {parts.map((p, i) =>
        p === 'Z. Chen' ? <strong key={i}>{p}</strong> : <span key={i}>{p}</span>
      )}
    </span>
  );
}

export default function Publications() {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

  const byYear: Record<number, Publication[]> = {};
  for (const p of publications) {
    (byYear[p.year] ||= []).push(p);
  }

  return (
    <Section title="Publications" id="publications">
      <div className="pubs">
        {years.map((year) => (
          <div className="year-group" key={year}>
            <div className="year-label">{year}</div>
            <ul className="year-items">
              {byYear[year].map((p) => (
                <li className="pub" key={p.url}>
                  <p className="pub-title">{p.title}</p>
                  <div className="pub-authors">
                    <Authors authors={p.authors} />
                  </div>
                  <div className="pub-meta">
                    <span className="venue">{p.venue} {p.year}</span>
                    <a className="pdf" href={p.url} target="_blank" rel="noopener noreferrer">[pdf]</a>
                    {p.award && <span className="award">★ {p.award}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pubs {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
        .year-group {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 1rem;
        }
        .year-label {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-faint);
          padding-top: 0.15rem;
          font-variant-numeric: tabular-nums;
          position: sticky;
          top: 1rem;
          align-self: start;
        }
        .year-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pub-title {
          font-size: 1.02rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--text);
        }
        .pub-authors {
          margin-top: 0.3rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .pub-authors :global(strong) {
          color: var(--text);
          font-weight: 600;
        }
        .pub-meta {
          margin-top: 0.3rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.55rem;
        }
        .venue {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.9rem;
          color: var(--text-faint);
        }
        .pdf {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
        }
        .pdf:hover {
          color: var(--accent-hover);
          text-decoration: underline;
        }
        .award {
          font-size: 0.78rem;
          font-weight: 600;
          color: #b45309;
          background: rgba(180, 83, 9, 0.1);
          padding: 0.1rem 0.5rem;
          border-radius: 999px;
        }
        @media (max-width: 560px) {
          .year-group {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .year-label {
            position: static;
          }
        }
      `}</style>
    </Section>
  );
}
