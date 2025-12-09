import styles from './Introduction.module.css';

export default function Introduction() {
    return (
        <section className={styles.intro}>
            <h1 className={styles.title}>
                Hello, I'm <span className={styles.highlight}>Zhiyu Chen</span>.
            </h1>
            <p className={styles.description}>
                I am a researcher and developer passionate about NLP, Graph Neural Networks, and creating intelligent systems.
                Welcome to my digital garden where I share my thoughts and readings.
            </p>
            {/* Add more intro details or buttons here */}
        </section>
    );
}
