"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React, { useEffect, useState } from "react";

const theme = createTheme({
  primaryColor: "gray",
});

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setColorScheme(savedTheme);
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MantineProvider 
      theme={theme} 
      defaultColorScheme={colorScheme}
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
}
