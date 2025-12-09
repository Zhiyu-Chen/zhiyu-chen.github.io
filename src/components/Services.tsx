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
          <li>SemEval-2023: Task 2 (co-located with ACL-2023)</li>
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
            color: var(--accent);
            margin-bottom: 0.5rem;
        }
        .pc-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            list-style: none;
            padding: 0;
        }
        .pc-list li {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--card-border);
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            font-size: 0.95rem;
            color: #bdbdbd;
            transition: background 0.2s;
        }
        .pc-list li:hover {
            background: rgba(255, 255, 255, 0.1);
            color: var(--accent);
            border-color: var(--accent);
        }
      `}</style>
    </Section>
  );
}
