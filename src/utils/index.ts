import { getCollection } from "astro:content";
// layouts and components
import MainLayout from "@layouts/MainLayout.astro";
import FormattedDate from "@components/FormattedDate.astro";

const blogList = (await getCollection('blog')).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

export { blogList, MainLayout, FormattedDate }
