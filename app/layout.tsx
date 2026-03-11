import "./globals.css";
import { BioRhyme } from "next/font/google";

const bioRhyme = BioRhyme({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={bioRhyme.className}>
        {children}
      </body>
    </html>
  );
}