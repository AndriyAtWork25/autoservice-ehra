import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autoservice Ehra",
  description:
    "Modern and fast static website for Autoservice Ehra (KFZ & Motorrad Service).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}