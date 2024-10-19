// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 定义游戏集合的模式
const gameCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    coverImage: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
    screenshots: z.array(z.string()).optional(),  // 游戏截图，可以是可选字段
    video: z.string().optional(),  // 视频链接，可以是可选字段
    comments: z.array(
      z.object({
        user: z.string(),
        avatar: z.string(),
        common: z.string(),
      })
    ),
    downloads: z.array(
      z.object({
        source: z.string(),  // 下载源名称
        sourceIcon: z.string(),  // 下载源图标
        links: z.array(
          z.object({
            type: z.string(),  // 下载链接类型（如磁力链接、网盘等）
            url: z.string(),  // 下载链接地址
            password: z.string().optional(),  // 可选的提取码或密码
          })
        )
      })
    ).optional(),  // 下载信息，可以是可选字段
  }),
});

const cepingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    coverImage: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  game: gameCollection,
  ceping: cepingCollection,
};
