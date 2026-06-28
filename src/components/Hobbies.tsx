import Section from './Section';

const hobbies = [
  { icon: '☕', title: 'Coffee', text: 'I make coffee every day.' },
  { icon: '🃏', title: 'Close-up Magic', text: 'Favorite magicians: Richard Turner & Lennart Green.' },
  { icon: '📷', title: 'Photography', text: 'Capturing moments.' },
];

export default function Hobbies() {
  return (
    <Section title="Hobbies" id="hobbies">
      <div className="grid">
        {hobbies.map((h) => (
          <div className="card" key={h.title}>
            <span className="icon">{h.icon}</span>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--border-strong);
        }
        .icon { font-size: 1.5rem; }
        h3 {
          margin-top: 0.5rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
        }
        p {
          margin-top: 0.25rem;
          font-size: 0.95rem;
          color: var(--text-faint);
          line-height: 1.5;
        }
      `}</style>
    </Section>
  );
}
