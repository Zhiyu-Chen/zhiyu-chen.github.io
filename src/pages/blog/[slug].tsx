import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { getAllSlugs, getPost, type Post } from '../../lib/blog';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({ params }) => {
  const slug = params?.slug as string;
  return { props: { post: getPost(slug) } };
};

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div className="page">
      <Head>
        <title>{post.title} — Zhiyu Chen</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <article className="article">
        <Link href="/#blog" className="back">← Back</Link>
        <h1 className="article-title">{post.title}</h1>
        <div className="article-date">{post.date}</div>
        {post.tags.length > 0 && (
          <div className="article-tags">
            {post.tags.map((tag) => (
              <Link key={tag} href={{ pathname: '/blog', query: { tag } }} className="tag">
                {tag}
              </Link>
            ))}
          </div>
        )}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <footer className="footer">
        <Link href="/#blog" className="back">← Back to home</Link>
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
          margin-bottom: 2rem;
        }
        .back:hover {
          color: var(--accent);
        }
        .article-title {
          font-family: var(--font-serif);
          font-size: clamp(1.9rem, 1.4rem + 1.8vw, 2.6rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--text);
        }
        .article-date {
          margin-top: 0.7rem;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--text-faint);
        }
        .article-tags {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .tag {
          font-size: 0.78rem;
          color: var(--text-faint);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.15rem 0.6rem;
          transition: all 0.16s ease;
        }
        .tag:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        .article-body {
          margin-top: 2.5rem;
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.7;
        }
        .footer {
          max-width: 760px;
          margin: 3rem auto 0;
          padding: 2rem clamp(1.25rem, 5vw, 2rem) 0;
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

      <style jsx global>{`
        .toc {
          margin: 0 0 2.5rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--surface-hover);
          padding: 0 1.1rem;
        }
        .toc-summary {
          cursor: pointer;
          list-style: none;
          padding: 0.85rem 0;
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          user-select: none;
        }
        .toc-summary::-webkit-details-marker {
          display: none;
        }
        .toc-summary::before {
          content: '▸';
          font-size: 0.75rem;
          color: var(--text-faint);
          transition: transform 0.18s ease;
        }
        .toc[open] .toc-summary::before {
          transform: rotate(90deg);
        }
        .toc-nav {
          padding: 0 0 0.9rem;
        }
        .toc-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .toc-nav li {
          margin: 0.28rem 0;
          line-height: 1.4;
        }
        .toc-nav a {
          font-size: 0.9rem;
          color: var(--text-muted);
          border: none;
        }
        .toc-nav a:hover {
          color: var(--accent);
        }
        .toc-l3 {
          padding-left: 1.1rem;
          font-size: 0.86rem;
        }
        .toc-l3 a {
          color: var(--text-faint);
        }
        .article-body h2 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text);
          margin: 2.6rem 0 1rem;
          scroll-margin-top: 1.5rem;
        }
        .article-body h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
          margin: 2rem 0 0.8rem;
          scroll-margin-top: 1.5rem;
        }
        .article-body h4 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
          margin: 1.6rem 0 0.6rem;
        }
        .article-body p {
          margin: 1rem 0;
        }
        .article-body ul,
        .article-body ol {
          margin: 1rem 0 1rem 1.4rem;
        }
        .article-body li {
          margin: 0.4rem 0;
        }
        .article-body li::marker {
          color: var(--text-faint);
        }
        .article-body a {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent-soft);
        }
        .article-body a:hover {
          color: var(--accent-hover);
          border-bottom-color: currentColor;
        }
        .article-body strong {
          color: var(--text);
          font-weight: 600;
        }
        .article-body em {
          font-style: italic;
        }
        .article-body blockquote {
          margin: 1.4rem 0;
          padding: 0.4rem 0 0.4rem 1.2rem;
          border-left: 3px solid var(--border-strong);
          color: var(--text-faint);
        }
        .article-body code {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 0.88em;
          background: var(--surface-hover);
          padding: 0.15em 0.4em;
          border-radius: 5px;
        }
        .article-body pre {
          margin: 1.4rem 0;
          padding: 1rem 1.2rem;
          background: var(--surface-hover);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow-x: auto;
        }
        .article-body pre code {
          background: none;
          padding: 0;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .article-body hr {
          margin: 2.4rem 0;
          border: none;
          border-top: 1px solid var(--border);
        }
        .article-body img {
          max-width: 100%;
          height: auto;
          border-radius: var(--radius-md);
        }
        .article-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.4rem 0;
          font-size: 0.95rem;
          display: block;
          overflow-x: auto;
        }
        .article-body th,
        .article-body td {
          border: 1px solid var(--border);
          padding: 0.5rem 0.7rem;
          text-align: left;
        }
        .article-body th {
          background: var(--surface-hover);
          color: var(--text);
        }
      `}</style>
    </div>
  );
}
