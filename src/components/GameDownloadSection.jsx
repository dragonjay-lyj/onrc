import React from 'react';
import DownloadLinksCard from './DownloadLinksCard';
import { Skeleton } from "@nextui-org/skeleton";

const GameDownloadSection = ({ downloads = [] }) => {
  const isLoading = downloads.length === 0;

  return (
    <div className="download-section">
      <h2 className="text-2xl font-semibold mb-4">游戏下载链接</h2>
      <div className="flex flex-col space-y-4">
        {isLoading ? (
          <>
            <Skeleton isLoaded={false}>
              <DownloadLinksCard />
            </Skeleton>
            <Skeleton isLoaded={false}>
              <DownloadLinksCard />
            </Skeleton>
          </>
        ) : (
          downloads.map((linkData, index) => (
            <DownloadLinksCard
              key={index}
              source={linkData.source}
              sourceIcon={linkData.sourceIcon}
              links={linkData.links}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameDownloadSection;
