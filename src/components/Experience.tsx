import Section from './Section';

export default function Experience() {
    return (
        <Section title="Past Experience" id="experience">
            <div className="exp-item">
                <h3>Research Scientist Intern</h3>
                <p className="company">Amazon A9 (Palo Alto, CA)</p>
                <p className="duration">Jun 2017 – Aug 2017</p>
            </div>
            <div className="exp-item">
                <h3>Software Engineer Intern</h3>
                <p className="company">Microsoft (Redmond, WA)</p>
                <p className="duration">May 2015 – Sept 2015</p>
            </div>
            <style jsx>{`
        .exp-item {
          margin-bottom: 2rem;
          padding-left: 1rem;
          border-left: 2px solid var(--card-border);
        }
        h3 {
          font-size: 1.2rem;
          color: var(--foreground);
        }
        .company {
          color: var(--accent);
          margin: 0.25rem 0;
        }
        .duration {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
        </Section>
    );
}
