import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { deadlines, type Deadline } from '../lib/deadlines';

const MS_PER_DAY = 86_400_000;

function endOf(dateRange: string): number {
  const d = dateRange.split('/').pop() as string;
  return new Date(`${d}T23:59:59`).getTime();
}
function startOf(dateRange: string): number {
  const d = dateRange.split('/')[0];
  return new Date(`${d}T23:59:59`).getTime();
}
function daysUntil(now: number, target: number): number {
  return Math.ceil((target - now) / MS_PER_DAY);
}

function fmt(dateRange?: string): string {
  if (!dateRange) return '—';
  const [a, b] = dateRange.split('/');
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const da = new Date(`${a}T00:00:00`);
  if (!b) return da.toLocaleDateString('en-US', opts);
  const db = new Date(`${b}T00:00:00`);
  const sameMonth = da.getMonth() === db.getMonth() && da.getFullYear() === db.getFullYear();
  if (sameMonth) {
    return `${da.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}–${db.getDate()}, ${db.getFullYear()}`;
  }
  return `${da.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${db.toLocaleDateString('en-US', opts)}`;
}

function rebuttal(d: Deadline): string {
  if (!d.rebuttalStart) return '—';
  return fmt(d.rebuttalEnd ? `${d.rebuttalStart}/${d.rebuttalEnd}` : d.rebuttalStart);
}

function confDates(d: Deadline): string {
  if (!d.confStart) return 'TBD';
  return fmt(d.confEnd && d.confEnd !== d.confStart ? `${d.confStart}/${d.confEnd}` : d.confStart);
}

interface Milestone {
  label: string;
  date: string;
}
function milestones(d: Deadline): Milestone[] {
  const m: Milestone[] = [];
  if (d.abstract) m.push({ label: 'Abstract', date: d.abstract });
  if (d.paper) m.push({ label: 'Full paper', date: d.paper });
  if (d.rebuttalStart) m.push({ label: 'Rebuttal', date: d.rebuttalEnd ? `${d.rebuttalStart}/${d.rebuttalEnd}` : d.rebuttalStart });
  if (d.notification) m.push({ label: 'Notification', date: d.notification });
  if (d.cameraReady) m.push({ label: 'Camera-ready', date: d.cameraReady });
  if (d.confStart) m.push({ label: 'Conference', date: d.confEnd ? `${d.confStart}/${d.confEnd}` : d.confStart });
  return m;
}

function DateCell({ value, now }: { value?: string; now: number | null }) {
  if (!value) return <td className="date">—</td>;
  const passed = now !== null && now > endOf(value);
  return <td className={`date ${passed ? 'passed' : ''}`}>{fmt(value)}</td>;
}

export default function DeadlinesPage() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);

  const sorted = [...deadlines].sort((a, b) => {
    if (!a.paper) return 1;
    if (!b.paper) return -1;
    return a.paper.localeCompare(b.paper);
  });

  return (
    <div className="page">
      <Head>
        <title>Deadlines — Zhiyu Chen</title>
        <meta name="description" content="Upcoming conference deadlines tracked by Zhiyu Chen." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="head">
        <Link href="/" className="back">← Home</Link>
        <h1 className="title">Deadlines</h1>
        <p className="subtitle">Key dates for upcoming conferences, sorted by full-paper deadline.</p>
      </header>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Conference</th>
              <th className="cd-col">Countdown</th>
              <th>Abstract</th>
              <th>Full paper</th>
              <th>Rebuttal</th>
              <th>Notification</th>
              <th>Camera-ready</th>
              <th>Conference</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((d) => {
              const ended = now !== null && d.confEnd ? now > endOf(d.confEnd) : false;

              let next: { label: string; days: number } | null = null;
              if (now !== null) {
                for (const m of milestones(d)) {
                  const t = startOf(m.date);
                  if (t >= now) {
                    next = { label: m.label, days: daysUntil(now, t) };
                    break;
                  }
                }
              }

              return (
                <tr className={ended ? 'ended' : ''} key={d.conference}>
                  <td className="conf">
                    <a href={d.url} target="_blank" rel="noopener noreferrer">{d.conference}</a>
                    {d.note && <span className="note">{d.note}</span>}
                  </td>
                  <td className="cd-col">
                    {ended ? (
                      <span className="pill pill-ended">Ended</span>
                    ) : next ? (
                      <span className="pill pill-live">
                        <strong>{next.days}</strong> {next.days === 1 ? 'day' : 'days'}
                        <span className="cd-label"> · {next.label}</span>
                      </span>
                    ) : d.paper ? (
                      <span className="pill">In review</span>
                    ) : (
                      <span className="pill">TBD</span>
                    )}
                  </td>
                  <DateCell value={d.abstract} now={now} />
                  <DateCell value={d.paper} now={now} />
                  <td className={`date ${now !== null && d.rebuttalStart && now > endOf(`${d.rebuttalStart}/${d.rebuttalEnd ?? d.rebuttalStart}`) ? 'passed' : ''}`}>
                    {rebuttal(d)}
                  </td>
                  <DateCell value={d.notification} now={now} />
                  <DateCell value={d.cameraReady} now={now} />
                  <td className={`date ${ended ? 'passed' : ''}`}>{confDates(d)}</td>
                  <td className="loc">{d.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="footer">
        <Link href="/" className="back">← Back to home</Link>
        <p>© {new Date().getFullYear()} Zhiyu Chen</p>
      </footer>

      <style jsx>{`
        .page {
          max-width: 1380px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2rem) 3rem;
        }
        .back {
          display: inline-block;
          font-size: 0.92rem;
          color: var(--text-faint);
        }
        .back:hover {
          color: var(--accent);
        }
        .head {
          margin-bottom: 2rem;
        }
        .title {
          margin-top: 1.6rem;
          font-family: var(--font-serif);
          font-size: clamp(2rem, 1.5rem + 1.8vw, 2.7rem);
          font-weight: 600;
          letter-spacing: -0.015em;
          color: var(--text);
        }
        .subtitle {
          margin-top: 0.6rem;
          font-size: 1rem;
          color: var(--text-muted);
        }
        .table-wrap {
          overflow-x: auto;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.87rem;
          min-width: 860px;
        }
        thead th {
          text-align: left;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          color: var(--text-faint);
          padding: 0.8rem 0.5rem;
          border-bottom: 1px solid var(--border);
          white-space: nowrap;
          background: var(--surface-hover);
        }
        tbody tr {
          border-bottom: 1px solid var(--border);
        }
        tbody tr:last-child {
          border-bottom: none;
        }
        tbody tr:hover {
          background: var(--surface-hover);
        }
        td {
          padding: 0.75rem 0.5rem;
          vertical-align: top;
          color: var(--text-muted);
        }
        thead th:first-child,
        .conf {
          position: sticky;
          left: 0;
          z-index: 1;
          border-right: 1px solid var(--border);
        }
        thead th:first-child {
          z-index: 2;
        }
        .conf {
          background: var(--surface);
        }
        tbody tr:hover .conf {
          background: var(--surface-hover);
        }
        .conf {
          white-space: nowrap;
        }
        .conf a {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
        }
        .conf a:hover {
          color: var(--accent);
        }
        .conf .note {
          display: block;
          font-size: 0.75rem;
          font-style: italic;
          color: var(--text-faint);
          margin-top: 0.15rem;
          white-space: normal;
          max-width: 200px;
        }
        .loc {
          white-space: nowrap;
          color: var(--text-muted);
        }
        .date {
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
          color: var(--text-faint);
        }
        .date.passed {
          text-decoration: line-through;
          opacity: 0.65;
        }
        .cd-col {
          white-space: nowrap;
        }
        .pill {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--surface-hover);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.2rem 0.65rem;
        }
        .pill strong {
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }
        .pill-live {
          color: var(--accent);
          background: var(--accent-soft);
          border-color: transparent;
        }
        .pill-live strong {
          color: var(--accent);
        }
        .pill-ended {
          color: var(--text-faint);
        }
        /* Ended conference: strike the whole row */
        tr.ended td {
          opacity: 0.55;
        }
        tr.ended .conf a,
        tr.ended .loc,
        tr.ended .date {
          text-decoration: line-through;
        }
        .footer {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-faint);
        }
        @media (max-width: 600px) {
          .cd-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
