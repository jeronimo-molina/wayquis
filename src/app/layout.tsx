import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terminal Blog",
  description: "Notas do Obsidian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 1. FONT-MONO: A chave do visual "Terminal" */}
      <body className="font-mono bg-[#1c1c1c] text-gray-300 min-h-screen p-4 md:p-8 flex flex-col items-center">
        
        {/* A JANELA DO TERMINAL (Container Principal) */}
        <div className="w-full max-w-3xl border border-orange-500 min-h-[90vh] flex flex-col bg-[#1c1c1c] shadow-lg shadow-orange-500/10">
          
          {/* CABEÇALHO DA JANELA */}
          <header className="border-b border-orange-500 p-6 flex justify-between items-center bg-[#1c1c1c]">
            <div className="bg-orange-500 text-black px-2 py-1 font-bold text-lg">
              <Link href="/">Wayquis</Link>
            </div>
            
            <nav className="flex gap-4 text-sm">
               {/* Links com hover laranja */}
              <Link href="/" className="hover:text-orange-500 hover:underline decoration-2 underline-offset-4">
                Início
              </Link>
              <Link href="/sobre" className="hover:text-orange-500 hover:underline decoration-2 underline-offset-4">
                Sobre
              </Link>
            </nav>
          </header>

          {/* ÁREA DE CONTEÚDO (Onde as páginas entram) */}
          <main className="flex-1 p-6 md:p-10">
             {children}
          </main>

          {/* RODAPÉ */}
          <footer className="border-t border-orange-500 p-4 text-center text-xs text-gray-600">
            Feito com Next.js + Obsidian
          </footer>

        </div>
      </body>
    </html>
  );
}