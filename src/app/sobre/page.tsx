import Link from 'next/link';

export default function About() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Cabeçalho da Seção */}
      <section className="border-l-4 border-orange-500 pl-6 py-2">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">/root/sobre</h1>
        <p className="text-gray-400 font-mono text-sm">Atualizado em: 26/11/2025</p>
      </section>

      {/* Conteúdo Principal */}
      <div className="prose prose-invert prose-p:text-gray-300 max-w-none">
        <p className="text-lg leading-relaxed">
          Olá! 👋 Sou Jeronimo Molina, doutorando em Administração, pesquisador e empreendedor.
          <span className="text-orange-500 font-bold mx-1">Aqui estão parte de minhas ideias</span>.
        </p>
        <p>
          Este é um experimento para publicar minhas notas do Obsidian diretamente na web, 
          sem intermediários. Tudo o que você vê aqui é gerado estaticamente a partir de arquivos Markdown.
        </p>
      </div>

      {/* Decoração estilo Terminal */}
      <div className="bg-black border border-gray-800 p-4 rounded-sm font-mono text-sm shadow-inner">
        <div className="flex gap-2">
          <span className="text-green-500">user@brain:~$</span>
          <span className="typing-effect text-white">whoami</span>
        </div>
        <div className="text-gray-400 mt-1">
          &gt; Um eterno aprendiz apaixonado por tecnologia.
        </div>
      </div>

      {/* Botão de Voltar */}
      <div className="pt-6 border-t border-gray-800">
        <Link href="/" className="inline-flex items-center text-orange-500 hover:text-orange-400 hover:underline">
          &lt; cd .. (Voltar ao Início)
        </Link>
      </div>
    </div>
  );
}