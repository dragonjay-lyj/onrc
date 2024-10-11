// src/components/DownloadCard.jsx
import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Skeleton } from '@nextui-org/skeleton';

export default function DownloadCard({ download, isLoading }) {
  return (
    <Card className="max-w-[400px]" isPressable>
      <CardBody className="p-4">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="w-3/4 h-6 rounded-lg" />
            <Skeleton className="w-1/2 h-4 rounded-lg" />
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-bold">{download.source}</h2>
            <Divider className="my-2" />
            <div className="flex flex-col space-y-2">
              {download.links.map((link, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Image
                    removeWrapper
                    alt={link.type}
                    className="w-6 h-6"
                    src={link.icon}
                  />
                  <Link href={link.url} color="primary" isExternal>
                    {link.type}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
