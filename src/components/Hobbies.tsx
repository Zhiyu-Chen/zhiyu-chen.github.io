import Section from './Section';

export default function Hobbies() {
  return (
    <Section title="Hobbies" id="hobbies">
      <div className="hobby-grid">
        <div className="hobby-card">
          <h3>Coffee ☕</h3>
          <p>I make coffee every day.</p>
        </div>
        <div className="hobby-card">
          <h3>Close-up Magic 🃏</h3>
          <p>My favorite two magicians: Richard Turner and Lennart Green.</p>
        </div>
        <div className="hobby-card">
          <h3>Photography 📷</h3>
          <p>Capturing moments.</p>
        </div>
      </div>
      <style jsx>{`
        .hobby-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .hobby-card {
            background: white;
            border: 1px solid var(--card-border);
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hobby-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            border-color: var(--accent);
        }
        h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--foreground);
        }
        p {
            color: #666;
            font-size: 0.95rem;
        }
      `}</style>
    </Section>
  );
}
