import { Inter, Space_Grotesk } from "next/font/google";

export const bodyFont = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const displayFont = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

export const typography = {
  aboutTitle: `${displayFont.className} text-[25px] leading-[.95] tracking-[-.6px]`,
  bigLetter: `${displayFont.className} text-[clamp(310px,31vw,470px)] font-black leading-[.78] tracking-[-40px] max-[720px]:text-[350px]`,
  identityTitle: `${displayFont.className} text-[clamp(42px,5vw,68px)] leading-[.88] tracking-[-3.2px] max-[430px]:text-[46px]`,
  ageNumber: `${displayFont.className} text-[28px] font-extrabold`,
  sectionTitle: `${displayFont.className} text-[clamp(27px,3vw,38px)] font-bold leading-none tracking-[-1.5px] [text-shadow:2px_0_rgba(244,61,86,.35),-2px_0_rgba(0,190,214,.35)]`,
  timelineTitle: `${displayFont.className} text-xl`,
  softwareItem: `${displayFont.className} text-[clamp(20px,2.3vw,34px)] font-extrabold`,
  pinterestLogo: "font-serif text-[40px] font-bold",
  pinterestTitle: `${displayFont.className} text-[23px] leading-[.92]`,
  contactStrong: `${displayFont.className} text-xl`,
  behanceBrand: `${displayFont.className} text-[38px] font-extrabold`,
};