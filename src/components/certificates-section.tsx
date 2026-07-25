import { sectionTitleClass } from "@/libs/sectionTitleClass";
import aiFundamentals from "../assets/imgs/AI-fundementals.png";
import introToAi from "../assets/imgs/introduction-to-ai.png";
import ScrollReveal from "./scroll-reveal";

import { StaticImageData } from "next/image";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  image?: StaticImageData;
}

const certificates: Certificate[] = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "IBM",
    date: "2026",
    description:
      "Understanding core Artificial Intelligence concepts, machine learning models, deep learning, and generative AI systems.",
    image: aiFundamentals,
    credentialUrl: "#",
  },
  {
    id: "intro-to-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    date: "2026",
    description:
      "Introduction to AI history, applications, ethics, and fundamental frameworks for neural networks.",
    image: introToAi,
    credentialUrl: "#",
  },
  {
    id: "google-ux",
    title: "Google UX Design Professional",
    issuer: "Google / Coursera",
    date: "2024",
    description:
      "Foundations of UX design, including user research, wireframing, high-fidelity prototyping, and usability testing in Figma.",
    credentialUrl: "#",
  },
];

export default function CertificatesSection() {
  const cardClass =
    "bg-[rgba(255,255,255,0.78)] border border-[rgba(255,255,255,0.9)] rounded-[22px] p-8 shadow-[0_14px_34px_rgba(25,30,44,0.08)] transition-[transform,box-shadow] duration-[250ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(25,30,44,0.13)] flex flex-col justify-between min-h-[220px] w-full";

  return (
    <section className="mt-14" id="certificates">
      <ScrollReveal>
        <h2 className={sectionTitleClass}>Certificates</h2>
      </ScrollReveal>
      <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
        {certificates.map((cert, idx) => (
          <ScrollReveal
            key={cert.id}
            delay={idx * 100}
            className="flex w-full h-full"
          >
            <div className={cardClass}>
              <div className="flex flex-col gap-3">
                {cert.image && (
                  <div className="relative w-full aspect-[1.6] overflow-hidden rounded-sm border border-slate-100 dark:border-slate-800 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image.src}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-display text-slate-800 dark:text-slate-200 text-lg font-bold leading-snug">
                  {cert.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mt-1">
                  {cert.description}
                </p>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#007ebb] dark:hover:text-[#007ebb] transition-colors w-fit group"
                >
                  View Credential
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
