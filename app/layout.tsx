import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alan Cristian | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
