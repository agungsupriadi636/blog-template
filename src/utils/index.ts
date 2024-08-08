import { getCollection } from "astro:content";

const blogList = (await getCollection('blog')).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

export { blogList }
