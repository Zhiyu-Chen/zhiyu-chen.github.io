import Section from './Section';

export default function About() {
    return (
        <Section title="About Me" id="about">
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                My name is Zhiyu Chen (陈知雨). Now I am working as an applied scientist at Amazon in Seattle, US.
                My first name “Zhiyu” comes from an ancient Chinese poem (好雨知时节), which means good rain knows the best time to fall.
                I received my PhD from Lehigh University at 2022 with <a href="https://www.cse.lehigh.edu/~brian/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Prof. Brian D. Davison</a>.
                My research interests include data mining, machine learning, natural language processing and information retrieval.
            </p>
        </Section>
    );
}
