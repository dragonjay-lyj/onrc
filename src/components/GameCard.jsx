// src/components/GameCard.jsx
import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Skeleton } from '@nextui-org/skeleton';

export default function GameCard({ game, isLoading, slug }) {
  return (
    <Card className="max-w-[400px]" isPressable>
      <CardHeader className="p-0">
        {isLoading ? (
          <Skeleton className="w-full h-[200px] rounded-lg" />
        ) : (
          <Image
            removeWrapper
            alt={game.title}
            className="w-full h-[200px] object-cover rounded-lg"
            src={game.coverImage}
          />
        )}
      </CardHeader>
      <CardBody className="p-4">
        {isLoading ? (
          <Skeleton className="w-3/4 h-6 rounded-lg" />
        ) : (
          <Link href={`/game/${slug}`} color="foreground">
            <h2 className="text-lg font-bold">{game.title}</h2>
          </Link>
        )}
        <Divider className="my-2" />
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="w-1/2 h-4 rounded-lg" />
            <Skeleton className="w-1/3 h-4 rounded-lg" />
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">发布时间: {game.publishDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              {game.tags.map((tag) => (
                <Chip key={tag} size="sm" variant="flat">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
