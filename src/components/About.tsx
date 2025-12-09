import Section from './Section';
import styles from './Hero.module.css'; // Reusing styles from Hero for consistency, or we could duplicate/move to globals

export default function About() {
    return (
        <Section title="About Me" id="about">
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                My name is Zhiyu Chen (陈知雨). Now I am working as an applied scientist at Amazon in Seattle, US.
                My first name “Zhiyu” comes from an ancient Chinese poem (好雨知时节), which means good rain knows the best time to fall.
                I received my PhD from Lehigh University at 2022 with <a href="https://www.cse.lehigh.edu/~brian/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Prof. Brian D. Davison</a>.
                My research interests include data mining, machine learning, natural language processing and information retrieval.
            </p>

            <div className={styles.socials} style={{ justifyContent: 'flex-start' }}>
                <a href="https://scholar.google.com/citations?user=KSBmL64AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Google Scholar">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5-9 4.5-9-4.5z"></path><path d="M12 10v9"></path><path d="M5 6.5V17c0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3v-6"></path><path d="M22 6.5v4.5"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/zhiyu-chen-ir-nlp/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://x.com/colozoy" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
                <a href="https://www.instagram.com/colozoy/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </div>
        </Section>
    );
}
