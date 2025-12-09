import Section from './Section';

export default function Publications() {
    return (
        <Section title="Publications" id="publications">
            <ul className="pub-list">
                <li>
                    <span className="authors">Zhiyu Chen, Mohamed El-Geish, Ruoming Jin, and Dejing Dou.</span>
                    <span className="title"> “Less is More: A Comprehensive Framework for Link Completion”.</span>
                    <span className="venue"> In CIKM 2018.</span>
                </li>
                <li>
                    <span className="authors">Zhiyu Chen, Qing Da, and Yifei Ma.</span>
                    <span className="title"> “A Survey on Technologies of Spammer Detection in Online Social Networks”.</span>
                    <span className="venue"> In Chinese Journal of Electronics 2014.</span>
                </li>
            </ul>
            <style jsx>{`
        .pub-list {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .authors {
          color: #bdbdbd;
        }
        .title {
          font-weight: 600;
          color: var(--foreground);
        }
        .venue {
          font-style: italic;
          color: var(--accent);
        }
      `}</style>
        </Section>
    );
}
