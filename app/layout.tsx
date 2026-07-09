import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YO YO TEST  Dashboard",
  description: "A simple dashboard with dummy gfgf hh business data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

