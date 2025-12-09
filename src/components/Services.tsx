import Section from './Section';

export default function Services() {
    return (
        <Section title="Services" id="services">
            <ul className="service-list">
                <li>PC Member, CIKM 2019</li>
            </ul>
            <style jsx>{`
        .service-list {
          list-style: disc;
          padding-left: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
          color: #bdbdbd;
        }
      `}</style>
        </Section>
    );
}
