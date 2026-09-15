import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
  return rss({
    title: "mopango · 工程与研究",
    description: "通信、FPGA、Linux 与实验系统的工程记录。",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
