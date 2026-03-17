import "./globals.css";
import { BioRhyme } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoservice Ehra – Werkstatt für Auto & Motorrad",
  description:
    "Autoservice Ehra – Wartung, Reparatur, Diagnose und Reifenservice in Ehra-Lessien.",
};

const bioRhyme = BioRhyme({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={bioRhyme.className}>{children}</body>
    </html>
  );
}