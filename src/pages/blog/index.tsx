import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { GetStaticProps } from 'next';
import { getAllPostsMeta, getAllTags, type PostMeta } from '../../lib/blog';

interface Props {
  posts: PostMeta[];
  tags: string[];
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { posts: getAllPostsMeta(), tags: getAllTags() },
});

export default function BlogIndex({ posts, tags }: Props) {
  const router = useRouter();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const q = router.query.tag;
    setActiveTag(typeof q === 'string' && q ? q : null);
  }, [router.query.tag]);

  const selectTag = (tag: string | null) => {
    setActiveTag(tag);
    router.replace(tag ? { pathname: '/blog', query: { tag } } : { pathname: '/blog' }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const q = query.trim().toLowerCase();
  const filtered = posts.filter((p) => {
    if (activeTag && !p.tags.includes(activeTag)) return false;
    if (!q) return true;
    const haystack = [p.title, p.excerpt, ...p.tags].join(' ').toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div className="page">
      <Head>
        <title>Blog — Zhiyu Chen</title>
        <meta name="description" content="Writing by Zhiyu Chen on NLP, information retrieval, and large language models." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="head">
        <Link href="/" className="back">← Home</Link>
        <h1 className="title">Blog</h1>
        <p className="subtitle">Notes on NLP, information retrieval, and large language models.</p>
      </header>

      <div className="search">
        <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          className="search-input"
          placeholder="Search posts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search posts"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>

      {tags.length > 0 && (
        <div className="filters" role="group" aria-label="Filter by tag">
          <button
            className={`filter ${activeTag === null ? 'filterActive' : ''}`}
            onClick={() => selectTag(null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`filter ${activeTag === tag ? 'filterActive' : ''}`}
              onClick={() => selectTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="empty">No posts match your search.</p>
      ) : (
        <ul className="posts">
          {filtered.map((p) => (
            <li className="post" key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="post-title">
                {p.title}
              </Link>
              <div className="post-date">{p.date}</div>
              {p.excerpt && <p className="post-excerpt">{p.excerpt}</p>}
              {p.tags.length > 0 && (
                <div className="post-tags">
                  {p.tags.map((tag) => (
                    <button key={tag} className="tag" onClick={() => selectTag(tag)}>
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <footer className="footer">
        <Link href="/" className="back">← Back to home</Link>
        <p>© {new Date().getFullYear()} Zhiyu Chen</p>
      </footer>

      <style jsx>{`
        .page {
          max-width: 760px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.25rem, 5vw, 2rem) 3rem;
        }
        .back {
          display: inline-block;
          font-size: 0.92rem;
          color: var(--text-faint);
        }
        .back:hover {
          color: var(--accent);
        }
        .head {
          margin-bottom: 1.8rem;
        }
        .title {
          margin-top: 1.6rem;
          font-family: var(--font-serif);
          font-size: clamp(2rem, 1.5rem + 1.8vw, 2.7rem);
          font-weight: 600;
          letter-spacing: -0.015em;
          color: var(--text);
        }
        .subtitle {
          margin-top: 0.6rem;
          font-size: 1rem;
          color: var(--text-muted);
        }
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 2.6rem;
        }
        .search {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 1.4rem;
        }
        .search-icon {
          position: absolute;
          left: 0.9rem;
          color: var(--text-faint);
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          font: inherit;
          font-size: 0.95rem;
          color: var(--text);
          background: var(--surface-hover);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.6rem 2.4rem;
          transition: border-color 0.16s ease;
        }
        .search-input::placeholder {
          color: var(--text-faint);
        }
        .search-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .search-clear {
          position: absolute;
          right: 0.8rem;
          font: inherit;
          font-size: 0.85rem;
          line-height: 1;
          color: var(--text-faint);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.3rem;
        }
        .search-clear:hover {
          color: var(--text);
        }
        .filter {
          font: inherit;
          font-size: 0.86rem;
          color: var(--text-muted);
          background: var(--surface-hover);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.28rem 0.85rem;
          cursor: pointer;
          transition: all 0.16s ease;
        }
        .filter:hover {
          color: var(--text);
          border-color: var(--border-strong);
        }
        .filterActive {
          color: #fff;
          background: var(--accent);
          border-color: var(--accent);
        }
        .posts {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .post-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text);
        }
        .post-title:hover {
          color: var(--accent);
        }
        .post-date {
          margin-top: 0.35rem;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.92rem;
          color: var(--text-faint);
        }
        .post-excerpt {
          margin-top: 0.55rem;
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .post-tags {
          margin-top: 0.7rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .tag {
          font: inherit;
          font-size: 0.78rem;
          color: var(--text-faint);
          background: none;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.15rem 0.6rem;
          cursor: pointer;
          transition: all 0.16s ease;
        }
        .tag:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        .empty {
          color: var(--text-faint);
        }
        .footer {
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-faint);
        }
      `}</style>
    </div>
  );
}
