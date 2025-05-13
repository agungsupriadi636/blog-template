import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

// Handle GET request
export const GET: APIRoute = async ({ request }) => {

  const allPosts = await getCollection('blog')

  // Di endpoint API, filter sebelum mengirim response
  // const filtered = allPosts.filter(post => 
  //   post.data.title.toLowerCase()
  //   post.data.tags.some(tag => tag.toLowerCase()
  //   post.data.kategori.toLowerCase()
  // );

  return new Response(JSON.stringify(allPosts), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' // Cache 1 jam
    }
  });
};