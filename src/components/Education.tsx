import Section from './Section';

export default function Education() {
    return (
        <Section title="Education" id="education">
            <div className="edu-item">
                <h3>M.S. in Computer Science</h3>
                <p className="school">University of Southern California</p>
                <p className="year">2018</p>
            </div>
            <div className="edu-item">
                <h3>B.S. in Computer Science</h3>
                <p className="school">Beijing University of Posts and Telecommunications</p>
                <p className="year">2016</p>
            </div>
            <style jsx>{`
        .edu-item {
          margin-bottom: 2rem;
          background: var(--card-bg);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--card-border);
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }
        .school {
          color: var(--accent);
          margin-bottom: 0.25rem;
        }
        .year {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
        </Section>
    );
}
