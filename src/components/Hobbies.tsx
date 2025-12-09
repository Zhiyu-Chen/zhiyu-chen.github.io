import Section from './Section';

export default function Hobbies() {
    return (
        <Section title="Hobbies" id="hobbies">
            <div className="hobbies">
                <span className="tag">Coding</span>
                <span className="tag">Reading</span>
                <span className="tag">Swimming</span>
            </div>
            <style jsx>{`
        .hobbies {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--card-border);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: #bdbdbd;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .tag:hover {
            border-color: var(--accent);
            color: var(--accent);
        }
      `}</style>
        </Section>
    );
}
