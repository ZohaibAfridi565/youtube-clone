"use client";

import Sidebar from "@/components/Sidebar";
import { useSidebarStore } from "@/atoms/sidebarStore";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarStore();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className={`flex-1 transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-16"
      }`}>
        {children}
      </main>
    </div>
  );
} 