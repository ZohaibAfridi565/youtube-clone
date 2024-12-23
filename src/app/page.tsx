"use client";

import {
  Grid,
  Button,
  ScrollArea,
  Flex,
  Title,
  Card,
  Text,
} from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";
import VideoCard from "@/components/VideoCard";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { useSidebarStore } from "@/atoms/sidebarStore";

const DUMMY_VIDEOS = [
  {
    id: "1",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "2", 
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "3",
    thumbnail: "/icons/thumbnail.jpg", 
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "4",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js", 
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "5",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master", 
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "6",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "7",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K", 
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "8",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "9",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "10",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "11",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "12",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "13",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "14",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
  {
    id: "15",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
    category: "Technology"
  },
];

const CATEGORIES = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "News",
  "Sports",
  "Learning",
  "Fashion & Beauty",
  "Comedy",
  "Entertainment",
  "Movies",
  "Technology",
];

const SHORTS = [
  {
    id: "s1",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #1",
    views: "1.2M",
  },
  {
    id: "s2",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #2",
    views: "1.2M",
  },
  {
    id: "s3",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #3",
    views: "1.2M",
  },
  {
    id: "s4",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #4",
    views: "1.2M",
  },
  {
    id: "s5",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #5",
    views: "1.2M",
  },
  {
    id: "s6",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #6",
    views: "1.2M",
  },
  {
    id: "s7",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #7",
    views: "1.2M",
  },
  {
    id: "s8",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #8",
    views: "1.2M",
  },
  {
    id: "s9",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #9",
    views: "1.2M",
  },
  {
    id: "s10",
    thumbnail: "/icons/short.jpg",
    title: "Amazing Short Video #10",
    views: "1.2M",
  },
  // Add more shorts...
];

const SUGGESTED_VIDEOS = DUMMY_VIDEOS.slice(0, 8); // First 8 videos for suggested
const REGULAR_VIDEOS = DUMMY_VIDEOS.slice(8); // Rest of the videos

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isOpen } = useSidebarStore();

  const filteredSuggestedVideos = selectedCategory === "All" 
    ? SUGGESTED_VIDEOS
    : SUGGESTED_VIDEOS.filter(video => video.category === selectedCategory);

  const filteredRegularVideos = selectedCategory === "All"
    ? REGULAR_VIDEOS
    : REGULAR_VIDEOS.filter(video => video.category === selectedCategory);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 mt-14 ${isOpen ? 'ml-64' : 'ml-16'} overflow-y-auto`}>
        <div className="p-2 sm:p-4 pb-20 sm:pb-4">
          {/* Categories */}
          <ScrollArea className="mb-4">
            <Flex gap="sm" className="min-w-max">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "filled" : "subtle"}
                  radius="xl"
                  size="xs"
                  className={`px-3 sm:px-4 transition-colors ${
                    selectedCategory === category
                      ? "bg-gray-100 text-black hover:bg-gray-200 dark:[data-mantine-color-scheme='dark']:bg-zinc-800 dark:[data-mantine-color-scheme='dark']:text-white dark:[data-mantine-color-scheme='dark']:hover:bg-zinc-700"
                      : "hover:bg-gray-50 dark:[data-mantine-color-scheme='dark']:hover:bg-zinc-800"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </Flex>
          </ScrollArea>

          {/* Suggested Videos */}
          <Grid>
            {filteredSuggestedVideos.map((video) => (
              <Grid.Col
                key={video.id}
                span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3 }}
              >
                <VideoCard video={video} />
              </Grid.Col>
            ))}
          </Grid>

          {/* Shorts Section */}
          <div className="my-8">
            <Title order={2} size="h4" className="mb-4 flex items-center gap-2">
              <IconPlayerPlay size={24} className="text-red-600" />
              Shorts
            </Title>
            <ScrollArea>
              <Flex gap="md" className="min-w-max cursor-pointer">
                {SHORTS.map((short) => (
                  <div key={short.id} className="w-[244px] h-[540] flex flex-col gap-3">
                    <img
                      src={short.thumbnail}
                      alt={short.title}
                      className="mx-auto w-[244px] h-[432px] rounded-lg"
                    />
                    <div className="p-2">
                      <Text size="sm" lineClamp={2} fw={500}>
                        {short.title}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {short.views} views
                      </Text>
                    </div>
                  </div>
                ))}
              </Flex>
            </ScrollArea>
          </div>

          {/* Regular Videos */}
          <Grid className="my-8">
            {filteredRegularVideos.map((video) => (
              <Grid.Col
                key={video.id}
                span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3 }}
              >
                <VideoCard video={video} />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
