import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm <span className={styles.highlight}>Zhiyu Chen (陈知雨)</span>.
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
