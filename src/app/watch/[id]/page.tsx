"use client";

import {
  Grid,
  Title,
  Text,
  Avatar,
  Button,
  Flex,
  ActionIcon,
  Divider,
  ScrollArea,
  Chip,
} from "@mantine/core";
import {
  IconThumbUp,
  IconThumbDown,
  IconShare,
  IconDownload,
  IconDotsVertical,
} from "@tabler/icons-react";
import VideoCard from "@/components/VideoCard";
import CommentsList from "@/components/CommentsList";
import { DUMMY_VIDEOS, Video } from "@/data/videos";

export default function WatchPage({ params }: { params: { id: string } }) {
  const video = DUMMY_VIDEOS.find((v) => v.id === params.id);
  const relatedVideos = DUMMY_VIDEOS.filter((v) => v.id !== params.id).slice(0, 10);

  if (!video) return null;

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 mt-14">
      {/* Main Content */}
      <div className="w-full lg:flex-1">
        {/* Video Player */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <Title order={1} size="h3" mt="md">
          {video.title}
        </Title>

        {/* Channel Info & Actions */}
        <Flex justify="space-between" align="center" mt="md">
          <Flex gap="md" align="center">
            <Avatar size="lg" radius="xl" src="/icons/channel-avatar.jpg" />
            <div>
              <Text fw={500}>{video.channel}</Text>
              <Text size="sm" c="dimmed">
                1.2M subscribers
              </Text>
            </div>
            <Button variant="filled" radius="xl">
              Subscribe
            </Button>
          </Flex>

          <Flex gap="sm">
            <Button
              variant="subtle"
              leftSection={<IconThumbUp size={20} />}
              rightSection={<Text>12K</Text>}
              radius="xl"
            />
            <Button
              variant="subtle"
              leftSection={<IconThumbDown size={20} />}
              radius="xl"
            />
            <Button
              variant="subtle"
              leftSection={<IconShare size={20} />}
              radius="xl"
            >
              Share
            </Button>
            <Button
              variant="subtle"
              leftSection={<IconDownload size={20} />}
              radius="xl"
            >
              Download
            </Button>
            <ActionIcon variant="subtle" radius="xl" size="lg">
              <IconDotsVertical size={20} />
            </ActionIcon>
          </Flex>
        </Flex>

        {/* Video Description */}
        <div className="mt-4 p-4 rounded-xl bg-gray-100 dark:bg-zinc-800">
          <Flex gap="md" mb={2}>
            <Text fw={500}>{video.views} views</Text>
            <Text fw={500}>{video.timestamp}</Text>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Text>
        </div>

        {/* Comments Section */}
        <div className="mt-4">
          <Title order={2} size="h4" mb="md">
            Comments • 1.2K
          </Title>
          <CommentsList />
        </div>
      </div>

      {/* Related Videos */}
      <div className="w-full lg:w-[400px]">
        {/* Categories */}
        <ScrollArea.Autosize mah={60} mb="md">
          <Flex gap="sm" wrap="nowrap">
            <Chip defaultChecked>All</Chip>
            <Chip>Related</Chip>
            <Chip>Recently uploaded</Chip>
            <Chip>Watched</Chip>
            <Chip>From same channel</Chip>
          </Flex>
        </ScrollArea.Autosize>

        <Flex direction="column" gap="md">
          {relatedVideos.map((video: Video) => (
            <VideoCard key={video.id} video={video} compact />
          ))}
        </Flex>
      </div>
    </div>
  );
}