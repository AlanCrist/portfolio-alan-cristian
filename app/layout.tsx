import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const playfair = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Cristian",
  description: "Web Developer | Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
