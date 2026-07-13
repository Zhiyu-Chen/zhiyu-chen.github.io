import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Marked, type Tokens } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function githubSlug(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-');
}

interface Heading {
  depth: number;
  text: string;
  id: string;
}

function renderMarkdown(content: string): { html: string; headings: Heading[] } {
  const seen = new Map<string, number>();
  const headings: Heading[] = [];
  const m = new Marked({
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Heading) {
        const inner = this.parser.parseInline(token.tokens);
        const base = githubSlug(token.text);
        const count = seen.get(base) ?? 0;
        seen.set(base, count + 1);
        const id = count === 0 ? base : `${base}-${count}`;
        headings.push({ depth: token.depth, text: token.text, id });
        return `<h${token.depth} id="${id}">${inner}</h${token.depth}>\n`;
      },
    },
  });
  const html = m.parse(content, { async: false }) as string;
  return { html, headings };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildToc(headings: Heading[]): string {
  const items = headings.filter((h) => h.depth === 2 || h.depth === 3);
  if (items.length < 3) return '';
  const lis = items
    .map(
      (h) =>
        `<li class="toc-l${h.depth}"><a href="#${h.id}">${escapeHtml(h.text)}</a></li>`,
    )
    .join('');
  return `<details class="toc"><summary class="toc-summary">Table of Contents</summary><nav class="toc-nav"><ul>${lis}</ul></nav></details>`;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  html: string;
}

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

export function getPostMeta(slug: string): PostMeta {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  const excerpt =
    (data.excerpt as string) ||
    content.trim().split('\n').find((l) => l.trim().length > 0)?.replace(/[#>*_`]/g, '').trim() ||
    '';
  const rawTags = data.tags;
  const tags: string[] = Array.isArray(rawTags)
    ? rawTags.map((t) => String(t).trim()).filter(Boolean)
    : typeof rawTags === 'string'
      ? rawTags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];
  return {
    slug,
    title: (data.title as string) || slug,
    date: formatDate((data.date as string) || ''),
    excerpt,
    tags,
  };
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8');
  const { content } = matter(raw);
  let body = content.replace(/^\s*#\s+.*\n/, '');
  body = body.replace(/^#{2,3}\s+Contents\s*\n(?:[ \t]*[-*].*\n|[ \t]+.*\n|\s*\n)*/im, '');
  const { html, headings } = renderMarkdown(body);
  const toc = buildToc(headings);
  return { ...getPostMeta(slug), html: toc + html };
}

export function getAllPostsMeta(): PostMeta[] {
  return readSlugs()
    .map((slug) => getPostMeta(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const counts = new Map<string, number>();
  for (const meta of getAllPostsMeta()) {
    for (const tag of meta.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.keys()).sort((a, b) =>
    (counts.get(b)! - counts.get(a)!) || a.localeCompare(b),
  );
}
