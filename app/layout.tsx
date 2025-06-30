import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aspekta = localFont({
  src: './fonts/AspektaVF.woff2',
  variable: '--font-aspekta',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "TECHOFF",
  description: "Spotlighting the best tech talents in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aspekta.variable} ${geistMono.variable}`}>
      <body
        className={`${aspekta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
