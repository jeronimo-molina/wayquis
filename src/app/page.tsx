import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-12">
      
      {/* SEÇÃO DE BOAS-VINDAS */}
      <section className="border border-gray-700 p-6 relative">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">Bem-vindo! 👋</h1>
        <p className="text-lg leading-relaxed">
          O meu nome é <span className="text-orange-500 font-bold">Jeronimo Molina</span>. 
          Este é o meu jardim digital rodando em Next.js.
        </p>
      </section>

      {/* GRID DE POSTS ESTILO TERMINAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allPostsData.map(({ id, date, title }) => (
          <Link href={`/posts/${id}`} key={id} className="block group h-full">
            <article className="border border-gray-700 hover:border-orange-500 p-5 h-full transition-colors relative">
              {/* Detalhe decorativo no topo do card */}
              <div className="absolute top-0 left-0 bg-gray-700 group-hover:bg-orange-500 w-full h-1 transition-colors"></div>
              
              <h2 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-orange-500">
                {title}
              </h2>
              <time className="text-sm text-gray-500 block font-mono">
                &gt; {date}
              </time>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}