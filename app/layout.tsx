import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Krona_One } from 'next/font/google';
import { Inter as InterFont } from "next/font/google"; 

const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: '400',
});
const inter = InterFont({
  subsets: ['latin'],
  weight: '400',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Strength",
  description: "Strength Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
          {children}
      <div className={`${kronaOne.className} special-font`}></div>
        <Analytics />
      </body>
    </html>
  );
}
