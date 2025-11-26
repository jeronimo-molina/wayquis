import { getPostData } from "@/lib/posts";
import { get } from "http";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. Esperamos os parâmetros serem resolvidos
  const { id } = await params;

  // 2. Agora usamos o 'id' que extraímos acima (e não mais params.id direto)
  const postData = await getPostData(id);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      
      {/* Aqui está a mágica do HTML */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}