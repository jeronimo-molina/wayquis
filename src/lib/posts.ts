import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export function getSortedPostsData() {
  // Obtém os nomes dos ficheiros em /content
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" do nome do ficheiro para criar o ID
    const id = fileName.replace(/\.md$/, '');

    // Lê o ficheiro markdown como string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usa o gray-matter para analisar os metadados
    const matterResult = matter(fileContents);

    // Combina os dados com o id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // Ordena os posts por data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usa o gray-matter para separar o cabeçalho do conteúdo
  const matterResult = matter(fileContents);

  // Usa o remark para converter o markdown em string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combina os dados com o id e o html
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}