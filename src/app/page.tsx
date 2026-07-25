import Script from "next/script";
import HeroSection from "@/components/hero-section";
import EducationOrganizationSection from "@/components/education-organization-section";
import SoftwareSection from "@/components/software-section";
import ProjectsSection from "@/components/projects-section";
import CertificatesSection from "@/components/certificates-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen overflow-hidden bg-[rgba(250,251,252,0.72)] p-[clamp(20px,4vw,54px)] backdrop-blur-[18px] max-[720px]:p-5">
        {/* Topbar */}
        <header className="mb-7 flex items-center justify-between text-slate-700 dark:text-slate-300 gap-5 text-sm font-bold max-[720px]:items-start max-[720px]:text-xs">
          <div id="currentDate">May 4th, 2026</div>
          <div className="flex items-center gap-2.25 text-slate-700 dark:text-slate-300">
            Fullstack Developer / UX/UI Designer
            <span
              className="size-2.5 rounded-full bg-[#101114] shadow-[0_0_0_4px_rgba(16,17,20,0.08)]"
              aria-hidden="true"
            ></span>
          </div>
        </header>

        {/* Modules */}
        <HeroSection />
        <EducationOrganizationSection />
        <SoftwareSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <Script id="portfolio-current-date">
        {`// Tự động hiển thị ngày và năm hiện tại.
const dateElement = document.getElementById("currentDate");
const yearElement = document.getElementById("currentYear");
const now = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric"
}).format(now);

if (dateElement) dateElement.textContent = formattedDate;
if (yearElement) yearElement.textContent = now.getFullYear();`}
      </Script>
    </>
  );
}
