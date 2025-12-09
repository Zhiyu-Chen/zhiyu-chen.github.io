import useTypewriter from '../hooks/useTypewriter';
import styles from './Hero.module.css';

export default function Hero() {
    const text = "Zhiyu Chen (陈知雨)";
    const printedText = useTypewriter(text, 100);

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm <span className={styles.highlight}>{printedText}</span>
                    <span className={styles.cursor}>|</span>
                </h1>
            </div>
            <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/profile.jpg"
                    alt="Zhiyu Chen"
                    className={styles.profileImage}
                />
            </div>
        </section>
    );
}
