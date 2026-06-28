import Section from './Section';

export default function About() {
    return (
        <Section title="About" id="about">
            <p className="lead">
                I am a senior applied scientist at <strong>Amazon</strong> in Seattle. My first
                name “Zhiyu” comes from an ancient Chinese poem
                (<a href="https://en.wikipedia.org/wiki/Du_Fu#Chengdu" target="_blank" rel="noopener noreferrer">好雨知时节</a>),
                meaning <em>good rain knows the best time to fall</em>. I received my PhD from
                Lehigh University in 2022, advised by
                <a href="https://www.cse.lehigh.edu/~brian/" target="_blank" rel="noreferrer"> Prof. Brian D. Davison</a>.
                My research interests span data mining, machine learning, natural language
                processing and information retrieval.
            </p>
            <style jsx>{`
                .lead {
                    font-size: 1.12rem;
                    line-height: 1.75;
                    color: var(--text-muted);
                }
                .lead strong {
                    color: var(--text);
                    font-weight: 600;
                }
            `}</style>
        </Section>
    );
}
