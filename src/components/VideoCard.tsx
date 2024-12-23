"use client";

import { Card, Text, Image, Flex } from "@mantine/core";
import Link from "next/link";

interface VideoCardProps {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    channel: string;
    views: string;
    timestamp: string;
  };
  compact?: boolean;
}

export default function VideoCard({ video, compact = false }: VideoCardProps) {
  return (
    <Link href={`/watch/${video.id}`} className="block">
      <Card padding={0} radius="md" className="overflow-hidden">
        <Flex gap="sm" direction={compact ? "row" : "column"}>
          <Card.Section className={compact ? "min-w-[160px] w-[160px]" : "w-full"}>
            <Image
              src={video.thumbnail}
              height={compact ? 90 : 140}
              alt={video.title}
              className="w-full object-cover"
            />
          </Card.Section>
          <div className={`p-2 ${compact ? "flex-1 min-w-0" : ""}`}>
            <Text size="sm" fw={500} lineClamp={2}>
              {video.title}
            </Text>
            <Text size="xs" c="dimmed">
              {video.channel}
            </Text>
            <Text size="xs" c="dimmed">
              {video.views} views • {video.timestamp}
            </Text>
          </div>
        </Flex>
      </Card>
    </Link>
  );
}
