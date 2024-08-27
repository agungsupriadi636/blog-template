import { getCollection } from "astro:content";
// layouts and components
import MainLayout from "@layouts/MainLayout.astro";
import FormattedDate from "@components/FormattedDate.astro";
import WidgetAuthor from "@components/widget/WidgetAuthor.astro";
import WidgetCategories from "@components/widget/WidgetCategories.astro";
import WidgetLatestPost from "@components/widget/WidgetLatestPost.astro";

const blogList = (await getCollection('blog')).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

export { blogList, MainLayout, FormattedDate, WidgetAuthor, WidgetCategories, WidgetLatestPost }
