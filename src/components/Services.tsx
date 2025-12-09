import Section from './Section';

export default function Services() {
  return (
    <Section title="Services" id="services">
      <div className="service-group">
        <h3>Area Chair</h3>
        <ul>
          <li>ACL ARR 2023, 2025</li>
        </ul>
      </div>

      <div className="service-group">
        <h3>Organizer</h3>
        <ul>
          <li>
            <a href="https://multiconer.github.io/organizers" target="_blank" rel="noopener noreferrer">
              SemEval-2023: Task 2 (co-located with ACL-2023)
            </a>
          </li>
        </ul>
      </div>

      <div className="service-group">
        <h3>Program Committee/Reviewer</h3>
        <ul className="pc-list">
          <li>WSDM 2022-2026</li>
          <li>NeurIPS 2023-2025</li>
          <li>SIGIR 2022-2025</li>
          <li>CIKM 2020, 2025</li>
          <li>KDD 2022-2025</li>
          <li>ICLR 2024-2025</li>
          <li>TheWebConf 2022-2025</li>
          <li>COLING 2022, 2025</li>
          <li>NAACL 2025</li>
          <li>SemEval 2024-2025</li>
          <li>ECML PKDD 2023-2024</li>
          <li>EMNLP 2023-2024</li>
          <li>IJCAI 2023</li>
          <li>ACL 2023</li>
          <li>TKDE 2021</li>
        </ul>
      </div>

      <style jsx>{`
        .service-group {
            margin-bottom: 1.5rem;
        }
        h3 {
            font-size: 1.1rem;
            color: #444;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: #444;
        }
        a {
            color: var(--accent);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .pc-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            list-style: none;
            padding: 0;
        }
        .pc-list li {
            background: white;
            border: 1px solid var(--card-border);
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9em;
            color: #555;
            transition: all 0.2s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .pc-list li:hover {
            transform: translateY(-2px);
            color: var(--accent);
            border-color: var(--accent);
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
      `}</style>
    </Section>
  );
}
