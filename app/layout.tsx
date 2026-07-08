import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YO YO TEST  Dashboard",
  description: "A simple dashboard with dummy business data",
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
// some dummy comment ... some more comments

// BAL: BLA BALK AAGYSD 