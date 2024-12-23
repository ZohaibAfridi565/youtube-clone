export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

export const DUMMY_VIDEOS: Video[] = [
  {
    id: "1",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Building a YouTube Clone with Next.js",
    channel: "Code Master",
    views: "120K",
    timestamp: "2 days ago",
  },
  {
    id: "2",
    thumbnail: "/icons/thumbnail.jpg",
    title: "React Hooks Deep Dive",
    channel: "Code Master",
    views: "85K",
    timestamp: "3 days ago",
  },
  {
    id: "3",
    thumbnail: "/icons/thumbnail.jpg",
    title: "TypeScript Tips and Tricks",
    channel: "Code Master",
    views: "92K",
    timestamp: "1 week ago",
  },
  {
    id: "4",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Mantine UI Components Tutorial",
    channel: "Code Master",
    views: "45K",
    timestamp: "5 days ago",
  },
  {
    id: "5",
    thumbnail: "/icons/thumbnail.jpg",
    title: "Next.js 13 App Router Guide",
    channel: "Code Master",
    views: "150K",
    timestamp: "1 day ago",
  }
  // Add more videos as needed
]; 