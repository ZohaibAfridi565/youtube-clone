"use client";

import { Avatar, Text, Flex, ActionIcon } from "@mantine/core";
import { IconThumbUp, IconThumbDown } from "@tabler/icons-react";

const COMMENTS = [
  {
    id: 1,
    user: "John Doe",
    avatar: "/icons/avatar1.jpg",
    comment: "This is an amazing video! Thanks for sharing.",
    likes: 245,
    timestamp: "2 days ago",
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "/icons/avatar2.jpg",
    comment: "Very informative content, keep it up!",
    likes: 123,
    timestamp: "1 day ago",
  },
  // Add more comments...
];

export default function CommentsList() {
  return (
    <Flex direction="column" gap="lg">
      {COMMENTS.map((comment) => (
        <Flex key={comment.id} gap="md">
          <Avatar src={comment.avatar} radius="xl" />
          <div className="flex-1">
            <Flex align="center" gap="sm">
              <Text size="sm" fw={500}>
                {comment.user}
              </Text>
              <Text size="sm" c="dimmed">
                {comment.timestamp}
              </Text>
            </Flex>
            <Text size="sm" mt={4}>
              {comment.comment}
            </Text>
            <Flex gap="sm" mt={4} align="center">
              <ActionIcon variant="subtle" size="sm">
                <IconThumbUp size={16} />
              </ActionIcon>
              <Text size="sm">{comment.likes}</Text>
              <ActionIcon variant="subtle" size="sm">
                <IconThumbDown size={16} />
              </ActionIcon>
              <Text size="sm" c="dimmed">
                Reply
              </Text>
            </Flex>
          </div>
        </Flex>
      ))}
    </Flex>
  );
} 