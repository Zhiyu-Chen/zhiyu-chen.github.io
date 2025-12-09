import Link from 'next/link';
import { PostData } from '../lib/posts';
import styles from './BlogList.module.css';

export default function BlogList({ posts }: { posts: PostData[] }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Latest Posts</h2>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <Link href={`/posts/${post.slug}`} key={post.slug} className={styles.card}>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                        <p className={styles.cardDate}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        {post.tags && (
                            <div className={styles.tags}>
                                {post.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className={styles.tag}>#{tag}</span>
                                ))}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
}
