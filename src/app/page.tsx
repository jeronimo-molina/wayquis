import { getGraphData, getAllPosts } from '@/lib/markdown';
import Graph from '@/components/Graph';
import Link from 'next/link';

export default function Home() {
  const graphData = getGraphData();
  const posts = getAllPosts(['title', 'date', 'slug']);

  return (
    <main className="relative min-h-screen text-white font-mono selection:bg-purple-500 selection:text-black">
      <Graph graphData={graphData} />

      <div className="absolute top-0 left-0 p-8 z-10 pointer-events-none">
        <h1 className="text-6xl font-bold tracking-tighter mb-4 pointer-events-auto">
          DIGITAL<br />GARDEN
        </h1>
        <p className="text-gray-400 max-w-md mb-8 pointer-events-auto">
          A collection of interconnected thoughts, notes, and ideas.
          Explore the graph or browse the list below.
        </p>

        <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-lg max-w-sm max-h-[60vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Recent Notes</h2>
          <ul className="space-y-3">
            {posts.map((post: any) => (
              <li key={post.slug}>
                <Link
                  href={`/note/${post.slug}`}
                  className="block group"
                >
                  <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {post.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
