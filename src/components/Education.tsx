import Section from './Section';

export default function Education() {
  return (
    <Section title="Education" id="education">
      <div className="edu-item">
        <h3>Ph.D in Computer Science</h3>
        <p className="school">Lehigh University, Bethlehem, PA, USA</p>
        <p className="details">2015 - 2022 | GPA: 3.97/4.0</p>
      </div>
      <div className="edu-item">
        <h3>Exchange Program</h3>
        <p className="school">Ecole Supérieure d’Ingénieurs Léonard de Vinci, Paris, France</p>
        <p className="details">2014 - 2015 | GPA: 15.75/20</p>
      </div>
      <div className="edu-item">
        <h3>B.E. in Computer Science</h3>
        <p className="school">Nanjing University of Aeronautics and Astronautics, Nanjing, China</p>
        <p className="details">2011 - 2015 | GPA: 4.2/5.0 (ranking: 1/94)</p>
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
        .details {
          font-size: 0.9rem;
          color: #888;
        }
      `}</style>
    </Section>
  );
}
