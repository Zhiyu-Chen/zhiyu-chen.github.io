import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm <span className={styles.highlight}>Zhiyu Chen</span>.
                </h1>
                <p className={styles.bio}>
                    I'm a student interested in Information Retrieval, Natural Language Processing, and Graph Neural Networks.
                    I am passionate about how to derive insights or knowledge from unstructured text or data.
                </p>
                <div className={styles.actions}>
                    <a href="mailto:zhiyuchen@example.com" className={styles.button}>Contact Me</a>
                    <a href="https://scholar.google.com/citations?user=KSBmL64AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className={styles.buttonOutline}>Google Scholar</a>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                {/* Hotlinking as requested */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://zhiyusite.files.wordpress.com/2017/04/profile.jpeg"
                    alt="Zhiyu Chen"
                    className={styles.profileImage}
                />
            </div>
        </section>
    );
}
