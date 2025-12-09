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
                <link rel="icon" href="/favicon.ico" />
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
                        <Link href="/">Home</Link>
                        {/* Add more links if needed like About, etc. */}
                    </div>
                </nav>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Zhiyu Chen. All rights reserved.</p>
                <div className={styles.socials}>
                    <a href="https://github.com/Startcode" target="_blank" rel="noopener noreferrer">GitHub</a>
                    {/* Add LinkedIn etc */}
                </div>
            </footer>
        </div>
    );
}
