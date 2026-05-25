import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Builder — New Level Creations",
  description: "AI-powered 3D fight kit builder by New Level Creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
