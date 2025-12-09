import { ReactNode } from 'react';

interface SectionProps {
    title: string;
    children: ReactNode;
    id?: string;
    className?: string; // Allow passing extra classes
}

export default function Section({ title, children, id, className = '' }: SectionProps) {
    return (
        <section id={id} className={`section ${className}`}>
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
                {children}
            </div>
            <style jsx>{`
        .section {
          margin-bottom: 4rem;
          scroll-margin-top: calc(var(--nav-height) + 2rem);
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 0.5rem;
          display: inline-block;
          color: var(--foreground);
        }
        .section-content {
          color: #bdbdbd;
        }
      `}</style>
        </section>
    );
}
