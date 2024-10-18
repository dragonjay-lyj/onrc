import React from 'react';
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import GameDownloadSection from './GameDownloadSection';
import SteamCommonCard from './SteamCommonCard';

const GameDetailPage = ({ game }) => {
  const { title, coverImage, publishDate, tags, screenshots, video, content, downloads = [] } = game;

  return (
    <div className="game-detail-page container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="cover-image mb-4">
        <Image
          src={coverImage}
          alt={title}
          width="100%"
          height={400}
          radius="lg"
          shadow="lg"
          loading="lazy"
          fallbackSrc="/images/fallback.jpg"
          isBlurred
        />
      </div>

      <p className="mb-4 text-gray-600">发布时间: {publishDate}</p>

      <div className="tags mb-4">
        {tags.map((tag) => (
          <Chip key={tag} size="md" color="primary" className="mr-2">
            {tag}
          </Chip>
        ))}
      </div>

      <Divider orientation="horizontal" />

      <div className="game-description my-4">
        <p>{content}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-2">游戏截图</h2>
      <div className="screenshots grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {screenshots.map((screenshot, index) => (
          <Image
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            width="100%"
            height={200}
            radius="lg"
            shadow="md"
            loading="lazy"
            fallbackSrc="/images/fallback.jpg"
          />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">游戏视频</h2>
      <div className="game-video mb-4">
        <iframe
          width="100%"
          height="400"
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="游戏视频"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mb-2">游戏评价</h2>
        {game.comments.map((comment, index) => (
          <SteamCommonCard key={index} user={comment.user} avatar={comment.avatar} common={comment.common} />
        ))}

      {/* 下载链接部分 */}
      <GameDownloadSection downloads={downloads} />
    </div>
  );
};

export default GameDetailPage;
