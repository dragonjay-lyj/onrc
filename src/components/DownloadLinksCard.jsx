// src/components/DownloadLinksCard.jsx
import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Skeleton } from "@nextui-org/skeleton";

const DownloadLinksCard = ({ source, sourceIcon, links, isLoading }) => {
  return (
    <Card shadow="md" radius="lg" isHoverable className="mb-4">
      <CardHeader>
        <Skeleton isLoaded={!isLoading}>
          <div className="flex items-center space-x-2">
            <Image src={sourceIcon} alt={source} width={40} height={40} radius="full" />
            <h3 className="text-lg font-semibold">{source}</h3>
          </div>
        </Skeleton>
      </CardHeader>
      <CardBody>
        <Skeleton isLoaded={!isLoading}>
          <div className="flex flex-col space-y-2">
            {links.map((link, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Chip size="sm" color="primary">{link.type}</Chip>
                <Link href={link.url} target="_blank" isExternal>
                  {link.url}
                </Link>
                {/* 如果存在提取码，显示提取码 */}
                {link.password && (
                  <span className="text-sm text-gray-500">提取码: {link.password}</span>
                )}
              </div>
            ))}
          </div>
        </Skeleton>
      </CardBody>
    </Card>
  );
};

export default DownloadLinksCard;
