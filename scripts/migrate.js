const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const matter = require('gray-matter');
const { format } = require('date-fns');

const BASE_URL = 'https://zhiyuchen.com';
const BLOGS_URL = `${BASE_URL}/blogs/`;
const OUTPUT_DIR = path.join(process.cwd(), 'content', 'posts');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchPage(url) {
    const res = await fetch(url);
    const html = await res.text();
    return cheerio.load(html);
}


async function migrate() {
    let page = 1;
    let hasNextPage = true;
    const allPostLinks = new Set();

    while (hasNextPage) {
        const url = page === 1 ? BLOGS_URL : `${BLOGS_URL}page/${page}/`;
        console.log(`Fetching blog list from ${url}...`);
        try {
            const $ = await fetchPage(url);

            // Find post links
            $('a').each((i, el) => {
                const href = $(el).attr('href');
                if (href && (href.includes('/blogs/') || href.includes('/20')) && !href.endsWith('/blogs/') && !href.includes('/page/')) {
                    if (href.split('/').length > 4 && !href.includes('#')) {
                        const fullLink = href.startsWith('http') ? href : `${BASE_URL}${href.replace(/^\//, '')}`;
                        allPostLinks.add(fullLink);
                    }
                }
            });

            // Check for next page
            const nextPageLink = $('.next.page-numbers').attr('href') || $('a:contains("Next")').attr('href') || $('a:contains("Older")').attr('href');
            if (nextPageLink) {
                page++;
            } else {
                console.log("No more pages found.");
                hasNextPage = false;
            }

            // Safety break
            if (page > 20) hasNextPage = false;

        } catch (e) {
            console.log(`Failed to fetch page ${page}: ${e.message}`);
            hasNextPage = false;
        }
    }

    const uniqueLinks = Array.from(allPostLinks);
    console.log(`Found ${uniqueLinks.length} unique posts.`);

    for (const link of uniqueLinks) {
        // ... filtering done above ...
        console.log(`Processing ${link}...`);
        try {
            const $post = await fetchPage(link);

            // Extract Title
            let title = $post('h1').first().text().trim() || $post('.entry-title').text().trim() || 'Untitled';
            // Cleanup title if it contains "Paper Reading:" (optional, but maybe user wants it)

            // Extract Date
            const dateStr = $post('time').attr('datetime') || $post('.entry-date').text().trim();
            const date = dateStr ? new Date(dateStr).toISOString() : new Date().toISOString();

            // Extract Content
            let content = $post('.entry-content').html() || $post('article').html() || '';

            // Extract Tags/Categories
            const tags = [];
            $post('.cat-links a, .tags-links a').each((i, el) => {
                tags.push($post(el).text().trim());
            });

            const frontmatter = {
                title,
                date,
                tags
            };

            let slug = link.split('/').filter(Boolean).pop();
            if (slug.includes('#')) slug = slug.split('#')[0];

            // Handle potential duplicates or bad slugs
            const filename = `${slug}.md`;

            const fileContent = matter.stringify(content, frontmatter);

            fs.writeFileSync(path.join(OUTPUT_DIR, filename), fileContent);
            console.log(`Saved ${filename}`);

        } catch (e) {
            console.error(`Failed to process ${link}:`, e.message);
        }
    }
}

migrate();
