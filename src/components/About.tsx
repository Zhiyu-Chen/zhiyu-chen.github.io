import Section from './Section';

export default function About() {
    return (
        <Section title="About Me" id="about">
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                Hi, I'm Zhiyu. I’m a student interested in Information Retrieval, Natural Language Processing, and Graph Neural Networks.
                I am passionate about how to derive insights or knowledge from unstructured text or data.
            </p>
        </Section>
    );
}
