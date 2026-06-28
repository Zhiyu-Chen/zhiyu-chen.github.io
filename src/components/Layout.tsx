import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useState, useEffect, useRef } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    home?: boolean;
}

const SECTIONS = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'services', label: 'Services' },
    { id: 'awards', label: 'Awards' },
    { id: 'hobbies', label: 'Hobbies' },
];

function copyEmail(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText('zhiyuchen.ai@gmail.com');
    window.location.href = 'mailto:zhiyuchen.ai@gmail.com';
}

export default function Layout({ children }: LayoutProps) {
    const [activeSection, setActiveSection] = useState('about');
    const isManualScroll = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const checkActiveSection = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let current = '';
        for (const { id } of SECTIONS) {
            const element = document.getElementById(id);
            if (element && element.offsetTop <= scrollPosition) {
                current = id;
            }
        }
        if (current) setActiveSection(current);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isManualScroll.current) {
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                scrollTimeout.current = setTimeout(() => {
                    isManualScroll.current = false;
                    checkActiveSection();
                }, 100);
                return;
            }
            checkActiveSection();
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        checkActiveSection();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    const handleNavClick = (section: string) => {
        isManualScroll.current = true;
        setActiveSection(section);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            isManualScroll.current = false;
        }, 1000);
    };

    return (
        <div className={styles.shell}>
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta name="description" content="Zhiyu Chen — Senior Applied Scientist at Amazon. Research in data mining, machine learning, NLP and information retrieval." />
                <meta name="og:title" content="Zhiyu Chen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <aside className={styles.sidebar}>
                <div className={styles.profile}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/profile.jpg" alt="Zhiyu Chen" className={styles.avatar} />
                    <h1 className={styles.name}>Zhiyu Chen</h1>
                    <p className={styles.nameCn}>陈知雨</p>
                    <p className={styles.role}>Senior Applied Scientist</p>
                    <p className={styles.org}>
                        <span className={styles.dot} aria-hidden="true">●</span> Amazon · Seattle, WA
                    </p>

                    <nav className={styles.nav} aria-label="Sections">
                        {SECTIONS.map(({ id, label }) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ''}`}
                                onClick={() => handleNavClick(id)}
                            >
                                <span className={styles.navMarker} aria-hidden="true" />
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.socials}>
                        <a href="mailto:zhiyuchen.ai@gmail.com" onClick={copyEmail} aria-label="Email" className={styles.socialLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </a>
                        <a href="https://scholar.google.com/citations?user=KSBmL64AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5-9 4.5-9-4.5z" /><path d="M12 10v9" /><path d="M5 6.5V17c0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3v-6" /><path d="M22 6.5v4.5" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/zhiyu-chen-ir-nlp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="https://x.com/colozoy" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/colozoy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </a>
                    </div>
                </div>
            </aside>

            <div className={styles.contentWrap}>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Zhiyu Chen</p>
                </footer>
            </div>
        </div>
    );
}
