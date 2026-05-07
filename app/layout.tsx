import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ol' Skool Big Time Steak Club",
  description: "Minneapolis, MN · Est. 1999 · Purveyors of Fine Beef Since Day One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Alfa+Slab+One&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
