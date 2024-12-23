import "@mantine/core/styles.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppWrapper>
          <Header />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
