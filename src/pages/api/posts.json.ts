import type { APIRoutes } from "astro";
import { getCollection } from "astro:content";

async function getPost(){
  const blogList = (await getCollection('blog')).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  
  return blogList.map((blog) => ({
      slug: blog.slug,
      title: blog.data.title,
      description: blog.data.description,
      date: blog.data.pubDate,
  }));
}


export const GET: APIRoutes = async ({}) => {
  return new Response(
    JSON.stringify(await getPost()), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      }
    }
  )
}
