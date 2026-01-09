import Section from './Section';
import Image from 'next/image';

export default function Education() {
  return (
    <Section title="Education" id="education">
      <div className="edu-item">
        <div className="edu-header">
          <Image src="/images/logos/lehigh.png" alt="Lehigh University" width={50} height={50} className="edu-logo" />
          <div className="edu-text">
            <h3>Ph.D in Computer Science</h3>
            <p className="school">Lehigh University, Bethlehem, PA, USA</p>
            <p className="details">2015 - 2022 | GPA: 3.97/4.0</p>
          </div>
        </div>
      </div>
      <div className="edu-item">
        <div className="edu-header">
          <Image src="/images/logos/esilv.png" alt="ESILV" width={50} height={50} className="edu-logo" />
          <div className="edu-text">
            <h3>Exchange Program</h3>
            <p className="school">Ecole Supérieure d'Ingénieurs Léonard de Vinci, Paris, France</p>
            <p className="details">2014 - 2015 | GPA: 15.75/20</p>
          </div>
        </div>
      </div>
      <div className="edu-item">
        <div className="edu-header">
          <Image src="/images/logos/nuaa.png" alt="NUAA" width={50} height={50} className="edu-logo" />
          <div className="edu-text">
            <h3>B.E. in Computer Science</h3>
            <p className="school">Nanjing University of Aeronautics and Astronautics, Nanjing, China</p>
            <p className="details">2011 - 2015 | GPA: 4.2/5.0 (ranking: 1/94)</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .edu-item {
          margin-bottom: 1.5rem;
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--card-border);
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .edu-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.05);
        }
        .edu-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .edu-text {
          flex: 1;
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }
        .school {
          color: #444;
          margin-bottom: 0.4rem;
          font-weight: 500;
        }
        .details {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </Section>
  );
}
