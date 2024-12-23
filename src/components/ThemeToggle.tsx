"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  
  return (
    <ActionIcon
      className="fixed bottom-4 right-4 z-50"
      variant="outline"
      radius="xl"
      color={colorScheme === "light" ? "gray" : "yellow"}
      onClick={() => setColorScheme(colorScheme === "light" ? "dark" : "light")}
      title="Toggle color scheme"
    >
      {colorScheme === "light" ? (
        <IconMoon size={24} />
      ) : (
        <IconSun size={24} />
      )}
    </ActionIcon>
  );
}
