import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-plus-jakarta-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sony Portfolio",
  description: "Portfolio cá nhân - Front-end Developer & UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}