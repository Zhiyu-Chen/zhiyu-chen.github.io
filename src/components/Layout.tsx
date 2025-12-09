import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useState, useEffect, useRef } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
    const [activeSection, setActiveSection] = useState('');

    // Use a ref to track if we are currently handling a manual click navigation
    const isManualScroll = useRef(false);
    // Timeout ref for debouncing scroll end
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // Extracted logic to check active section
    const checkActiveSection = () => {
        const sections = ['about', 'education', 'experience', 'publications', 'services', 'awards'];
        // Trigger point: 1/3 down the viewport or just below header
        const scrollPosition = window.scrollY + (window.innerHeight / 3);

        let current = '';
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                // Check if we have scrolled PAST the top of this section
                if (element.offsetTop <= scrollPosition) {
                    current = section;
                }
            }
        }
        if (current) {
            setActiveSection(current);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if manually scrolling (clicked a link)
            if (isManualScroll.current) {
                // Clear any existing unlock timer
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

                // Set a new timer to unlock after scroll stops (100ms debounce)
                scrollTimeout.current = setTimeout(() => {
                    isManualScroll.current = false;
                    // Re-check where we landed
                    checkActiveSection();
                }, 100);
                return;
            }

            checkActiveSection();
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        checkActiveSection();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    const handleNavClick = (section: string) => {
        isManualScroll.current = true;
        setActiveSection(section);

        // Safety fallback: ensure lock releases eventually if no scroll happens
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            isManualScroll.current = false;
        }, 1000);
    };

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
                        <Link
                            href="#about"
                            className={activeSection === 'about' ? styles.activeLink : ''}
                            onClick={() => handleNavClick('about')}
                        >About</Link>
                        <Link
                            href="#education"
                            className={activeSection === 'education' ? styles.activeLink : ''}
                            onClick={() => handleNavClick('education')}
                        >
                            <span className={styles.desktopText}>Education</span>
                            <span className={styles.mobileText}>Edu</span>
                        </Link>
                        <Link
                            href="#experience"
                            className={activeSection === 'experience' ? styles.activeLink : ''}
                            onClick={() => handleNavClick('experience')}
                        >
                            <span className={styles.desktopText}>Experience</span>
                            <span className={styles.mobileText}>Exp</span>
                        </Link>
                        <Link
                            href="#publications"
                            className={activeSection === 'publications' ? styles.activeLink : ''}
                            onClick={() => handleNavClick('publications')}
                        >
                            <span className={styles.desktopText}>Publications</span>
                            <span className={styles.mobileText}>Pubs</span>
                        </Link>
                        <Link
                            href="#services"
                            className={activeSection === 'services' ? styles.activeLink : ''}
                            onClick={() => handleNavClick('services')}
                        >Services</Link>
                        <Link
                            href="#awards"
                            className={activeSection === 'awards' ? styles.activeLink : ''}
                            onClick={() => handleNavClick('awards')}
                        >Awards</Link>
                    </div>
                </nav>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Zhiyu Chen. All rights reserved.</p>
                <div className={styles.socials}>
                    <a
                        href="mailto:zhiyuchen.ai@gmail.com"
                        onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText("zhiyuchen.ai@gmail.com");
                            alert("Email copied to clipboard: zhiyuchen.ai@gmail.com\nHappy to connect!");
                            window.location.href = "mailto:zhiyuchen.ai@gmail.com";
                        }}
                    >Email</a>
                    <a href="https://scholar.google.com/citations?user=KSBmL64AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                    <a href="https://www.linkedin.com/in/zhiyu-chen-ir-nlp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/colozoy/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
}
