import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta
                    name="description"
                    content="Zhiyu Chen's personal website and blog"
                />
                <meta name="og:title" content="Zhiyu Chen" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>Zhiyu Chen</Link>
                    <div className={styles.links}>
                        <Link href="#about">About</Link>
                        <Link href="#education">Education</Link>
                        <Link href="#experience">Experience</Link>
                        <Link href="#publications">Publications</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#awards">Awards</Link>
                    </div>
                </nav>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Zhiyu Chen. All rights reserved.</p>
                <div className={styles.socials}>
                    <a href="https://scholar.google.com/citations?user=KSBmL64AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                    <a href="https://www.linkedin.com/in/zhiyu-chen-ir-nlp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/colozoy/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://github.com/Startcode" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </footer>
        </div>
    );
}
