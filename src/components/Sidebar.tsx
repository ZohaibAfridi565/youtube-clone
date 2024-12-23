"use client";

import {
  Stack,
  UnstyledButton,
  Text,
  useMantineColorScheme,
  ScrollArea,
} from "@mantine/core";
import {
  IconHome2,
  IconCompass,
  IconHistory,
  IconPlaylist,
  IconSubscript,
} from "@tabler/icons-react";
import { useSidebarStore } from "@/atoms/sidebarStore";

const SIDEBAR_ITEMS = [
  { icon: IconHome2, label: "Home" },
  { icon: IconCompass, label: "Explore" },
  { icon: IconSubscript, label: "Subscriptions" },
  { icon: IconHistory, label: "History" },
  { icon: IconPlaylist, label: "Library" },
];

export default function Sidebar() {
  const { isOpen } = useSidebarStore();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Stack
      className={`fixed left-0 top-14 bottom-0 z-40 transition-all duration-300 overflow-hidden
        ${isDark ? "bg-black" : "bg-white"} border-r ${
        isDark ? "border-zinc-800" : "border-gray-200"
      }
        ${isOpen ? "w-64" : "w-16"}`}
    >
      <ScrollArea className="h-full">
        <div className="p-3 overflow-hidden">
          {SIDEBAR_ITEMS.map(({ icon: Icon, label }) => (
            <UnstyledButton
              key={label}
              className={`flex items-center gap-4 ${
                isOpen ? "p-3" : "p-0 w-11 h-11 justify-center"
              } rounded-lg hover:bg-opacity-80
                ${isDark ? "hover:bg-zinc-800" : "hover:bg-gray-100"}`}
            >
              <Icon size={24} />
              <Text className={isOpen ? "block" : "hidden"}>{label}</Text>
            </UnstyledButton>
          ))}
        </div>
      </ScrollArea>
    </Stack>
  );
}
