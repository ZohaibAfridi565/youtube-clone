"use client";

import {
  ActionIcon,
  Flex,
  TextInput,
  useMantineColorScheme,
  Menu,
  Text,
} from "@mantine/core";
import {
  IconMenu2,
  IconSearch,
  IconVideo,
  IconBell,
  IconMicrophone,
  IconMoon,
  IconSun,
  IconUser,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";
import Image from "next/image";
import { useSidebarStore } from "@/atoms/sidebarStore";
import { useEffect } from "react";

export default function Header() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { isOpen, setIsOpen } = useSidebarStore();

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setColorScheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== colorScheme) {
      setColorScheme(savedTheme as 'light' | 'dark');
    }
  }, [colorScheme, setColorScheme]);

  return (
    <Flex
      className={`fixed top-[-1px] w-full h-14 px-2 sm:px-4 ${
        isDark ? "bg-black" : "bg-white"
      } items-center justify-between z-50`}
    >
      <Flex className="items-center gap-2 sm:gap-4">
        <ActionIcon
          variant="subtle"
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconMenu2 />
        </ActionIcon>
        {isDark ? (
          <Image
            src="/icons/logo.png"
            alt="YouTube"
            width={110}
            height={30}
            className="hidden sm:block mb-1"
          />
        ) : (
          <Image
            src="/icons/logo-dark.svg"
            alt="YouTube"
            width={80}
            height={20}
            className="hidden sm:block"
          />
        )}
        <Image
          src="/icons/youtube-mobile.png"
          alt="YouTube"
          width={24}
          height={24}
          className="block sm:hidden"
        />
      </Flex>

      <Flex className="flex-1 max-w-[600px] items-center gap-2 sm:gap-4 mx-2 sm:mx-4">
        <TextInput
          className="flex-1 border border-[var(--mantine-color-gray-8)] rounded-full"
          variant="transparent"
          placeholder="Search"
          rightSection={<IconSearch size={20} />}
          styles={{
            section: {
              backgroundColor: "var(--mantine-color-gray-8)",
              width: "50px",
            },
          }}
          radius="xl"
        />
        <ActionIcon
          radius={"xl"}
          w={40}
          h={40}
          variant="filled"
          size="lg"
          className="hidden sm:flex"
        >
          <IconMicrophone size={20} />
        </ActionIcon>
      </Flex>

      <Flex className="items-center gap-1 sm:gap-4">
        <ActionIcon
          radius={"xl"}
          w={40}
          h={40}
          variant="filled"
          size="lg"
          className="hidden sm:flex"
        >
          <IconVideo />
        </ActionIcon>
        <ActionIcon
          radius={"xl"}
          w={40}
          h={40}
          variant="filled"
          size="lg"
          className="hidden sm:flex"
        >
          <IconBell />
        </ActionIcon>
        <Menu shadow="md" width={200} withArrow position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" w={40} h={40} size="lg" radius="xl">
              <Image
                src="/icons/avatar.jpg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item leftSection={<IconUser size={14} />}>Profile</Menu.Item>
            <Menu.Item leftSection={<IconSettings size={14} />}>
              Settings
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Appearance</Menu.Label>
            <Menu.Item
              leftSection={isDark ? <IconSun size={14} /> : <IconMoon size={14} />}
              onClick={toggleTheme}
            >
              <Flex justify="space-between" align="center">
                <Text size="sm">Theme</Text>
                <Text size="xs" c="dimmed">
                  {isDark ? "Light" : "Dark"} mode
                </Text>
              </Flex>
            </Menu.Item>

            <Menu.Divider />

            <Menu.Item color="red" leftSection={<IconLogout size={14} />}>
              Sign out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Flex>
  );
}
