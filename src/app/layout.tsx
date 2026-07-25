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
  title: "Nguyen Hong Son | Full-stack Developer Portfolio",
  description: "Portfolio cá nhân của Nguyễn Hồng Sơn - Full-stack Developer & UX/UI Designer tại Đà Nẵng, Việt Nam. Chuyên thiết kế và phát triển các hệ thống web tối ưu.",
  keywords: ["Nguyễn Hồng Sơn", "Nguyen Hong Son", "Sony Portfolio", "Full-stack Developer", "Front-end Developer", "Web Developer Vietnam", "DUT", "GDGC DUT"],
  authors: [{ name: "Nguyễn Hồng Sơn" }],
  openGraph: {
    title: "Nguyen Hong Son | Full-stack Developer Portfolio",
    description: "Khám phá các dự án phần mềm nổi bật và kỹ năng lập trình của Nguyễn Hồng Sơn.",
    url: "https://sony-portfolio-ten.vercel.app",
    siteName: "Sony Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nguyen Hong Son Portfolio Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Hong Son | Full-stack Developer Portfolio",
    description: "Khám phá các dự án phần mềm nổi bật và kỹ năng lập trình của Nguyễn Hồng Sơn.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nguyễn Hồng Sơn",
  "jobTitle": "Full-stack Developer",
  "url": "https://sony-portfolio-ten.vercel.app",
  "sameAs": [
    "https://github.com/NHSon05",
    "https://www.linkedin.com/in/sonnguyen2005/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}