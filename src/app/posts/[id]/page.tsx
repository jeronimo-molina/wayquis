import { getPostData } from "@/lib/posts";
import { get } from "http";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. Here params are be solved
  const { id } = await params;

  // 2. Here we use 'id' to extract above (not params.id directly) 
  const postData = await getPostData(id);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      
      {/* Here are HTML magic */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}