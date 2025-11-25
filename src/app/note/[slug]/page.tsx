import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export default async function Note({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || '');

    return (
        <div className="min-h-screen bg-black text-gray-200 font-mono p-8 md:p-20">
            <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Graph
            </Link>

            <article className="prose prose-invert prose-purple max-w-3xl mx-auto border border-white/10 p-8 rounded-xl bg-white/5 backdrop-blur-sm">
                <header className="mb-8 border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">{post.title}</h1>
                    <time className="text-gray-500 text-sm">{post.date}</time>
                </header>

                <div
                    className="prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-headings:text-white prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </article>
        </div>
    );
}
