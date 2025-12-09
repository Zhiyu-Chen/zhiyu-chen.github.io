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
        ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: #bdbdbd;
        }
        .pc-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 0.5rem;
        }
        li {
          margin-bottom: 0.3rem;
        }
      `}</style>
    </Section>
  );
}
