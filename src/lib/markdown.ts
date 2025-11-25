import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { slugify } from './utils';

const postsDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    if (!slug) {
        console.warn('getPostBySlug called with empty slug');
        return null;
    }
    // console.log('getPostBySlug:', slug);
    const realSlug = slug.replace(/\.md$/, '');
    const files = getPostSlugs();
    const file = files.find(f => slugify(f.replace(/\.md$/, '')) === slug);

    if (!file) return null;

    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: any = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = slug;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (field === 'title') {
            items[field] = data.title || file.replace(/\.md$/, '');
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slugify(slug.replace(/\.md$/, '')), fields))
        .filter((post) => post !== null)
        .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export async function markdownToHtml(markdown: string) {
    if (typeof markdown !== 'string') return '';

    // Pre-process Wikilinks
    const contentWithLinks = markdown.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, p1, p2) => {
        const slug = slugify(p1);
        return `[${p2 || p1}](/note/${slug})`;
    });

    const result = await remark().use(html).process(contentWithLinks);
    return result.toString();
}

export function getGraphData() {
    const files = getPostSlugs();
    const nodes: any[] = [];
    const links: any[] = [];

    files.forEach(file => {
        const fullPath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { content } = matter(fileContents);
        const slug = slugify(file.replace(/\.md$/, ''));
        const title = file.replace(/\.md$/, '');

        nodes.push({ id: slug, name: title, val: 1 });

        // Extract links
        const linkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
        let match;
        while ((match = linkRegex.exec(content)) !== null) {
            const target = slugify(match[1]);
            links.push({ source: slug, target: target });
        }
    });

    return { nodes, links };
}
