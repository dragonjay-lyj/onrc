import React from 'react';
import { Card, CardBody } from '@nextui-org/card';
import { User } from "@nextui-org/user";
import {Tooltip} from "@nextui-org/tooltip";

export default function SteamCommonCard({ user, avatar, common }) {
  return (
    <div className="flex items-start mb-4">
      <Tooltip content={user}>
      <User avatarProps={{ src: avatar }} className="w-[72px] h-[72px] relative float-left mr-2" />
      </Tooltip>
      <Card className="flex-1">
        <CardBody className="overflow-hidden text-[13px] text-[#C6D4DF]">
          <p>{common}</p>
        </CardBody>
      </Card>
    </div>
  );
}
