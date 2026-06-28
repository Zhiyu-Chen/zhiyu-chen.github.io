import Section from './Section';
import Image from 'next/image';

const items = [
  {
    logo: '/images/logos/lehigh.png',
    alt: 'Lehigh University',
    degree: 'Ph.D. in Computer Science',
    school: 'Lehigh University, Bethlehem, PA, USA',
    details: '2015 – 2022 · GPA 3.97/4.0',
  },
  {
    logo: '/images/logos/esilv.png',
    alt: 'ESILV',
    degree: 'Exchange Program',
    school: "École Supérieure d'Ingénieurs Léonard de Vinci, Paris, France",
    details: '2014 – 2015 · GPA 15.75/20',
  },
  {
    logo: '/images/logos/nuaa.png',
    alt: 'NUAA',
    degree: 'B.E. in Computer Science',
    school: 'Nanjing University of Aeronautics and Astronautics, Nanjing, China',
    details: '2011 – 2015 · GPA 4.2/5.0 (rank 1/94)',
  },
];

export default function Education() {
  return (
    <Section title="Education" id="education">
      <div className="edu">
        {items.map((it) => (
          <div className="row" key={it.degree}>
            <div className="logo">
              <Image src={it.logo} alt={it.alt} width={44} height={44} />
            </div>
            <div className="text">
              <h3>{it.degree}</h3>
              <p className="school">{it.school}</p>
              <p className="details">{it.details}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .edu {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .row:hover {
          border-color: var(--border);
          background: var(--surface);
          box-shadow: var(--shadow-sm);
        }
        .logo {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 {
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--text);
        }
        .school {
          margin-top: 0.15rem;
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .details {
          margin-top: 0.15rem;
          font-size: 0.85rem;
          color: var(--text-faint);
        }
      `}</style>
    </Section>
  );
}
