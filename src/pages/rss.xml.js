import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const game = await getCollection('game');
  
  return rss({
    title: '游戏合集',
    description: '一个小小的游戏合集',
    site: context.site,
    items: game.map((post) => {
      const slug = post.slug;

      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        link: `/game/${slug}/`, // 正确访问 service 和 slug
        ...post.data,
      };
    }),
  });
}
