import Section from './Section';

export default function Awards() {
    return (
        <Section title="Honors and Awards" id="awards">
            <ul className="award-list">
                <li>Annenberg Graduate Fellowship, USC, 2016</li>
            </ul>
            <style jsx>{`
        .award-list {
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
