import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  aside?: ReactNode;
  className?: string;
}

export default function Section({ title, children, id, aside, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <header className="section-head">
        <h2 className="section-title">{title}</h2>
        {aside && <span className="section-aside">{aside}</span>}
      </header>
      <div className="section-content">{children}</div>
      <style jsx>{`
        .section {
          margin-bottom: 3.75rem;
          scroll-margin-top: 1.5rem;
        }
        .section-head {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--text);
        }
        .section-aside {
          font-size: 0.85rem;
          color: var(--text-faint);
          font-variant-numeric: tabular-nums;
        }
        .section-content {
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
