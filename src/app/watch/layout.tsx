import Sidebar from "@/components/Sidebar";

export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
} 