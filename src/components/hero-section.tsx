import NextIcon from "@/components/icons/next";
import NestIcon from "@/components/icons/nest";
import TailwindCSSIcon from "@/components/icons/tailwindcss";
import TypeScriptIcon from "@/components/icons/typescript";
import ViteIcon from "@/components/icons/vite";
import GitIcon from "@/components/icons/git";
import mePhoto from "../assets/imgs/me.png";
import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

export default function HeroSection() {
  const traits = [
    { icon: "🧠", label: "Critical Thinking", className: "bg-[#ff876f]" },
    { icon: "🔎", label: "Attention to Detail", className: "bg-white/80" },
    {
      icon: "◉",
      label: "Visual Aesthetic",
      className: "bg-[#303236] text-white",
    },
    { icon: "✦", label: "Creativity", className: "bg-[#9a5ad8] text-white" },
    { icon: "▦", label: "Organized", className: "bg-[#d9dcdf]" },
  ];

  return (
    <section
      className="relative grid min-h-130 grid-cols-[1.05fr_1.35fr_1fr] items-center gap-4 after:absolute after:left-[24%] after:right-[17%] after:bottom-[6%] after:z-0 after:h-22.5 after:bg-[radial-gradient(ellipse,rgba(20,24,34,0.22),transparent_65%)] after:blur-[18px] after:content-[''] max-[980px]:grid-cols-2 max-[720px]:flex max-[720px]:flex-col"
      id="about"
    >
      {/* About Column */}
      <ScrollReveal
        className="relative z-2 max-[980px]:order-2 max-[720px]:w-full"
        delay={0}
        xOffset={-50}
        yOffset={0}
      >
        <div className="bg-[rgba(255,255,255,0.72)] border border-[rgba(255,255,255,0.82)] shadow-[0_15px_35px_rgba(22,28,42,0.08)] backdrop-blur-[18px] w-full rounded-4xl px-6 pt-6.5 pb-7.5 text-lg text-[#35383e] max-[720px]:max-w-none">
          <div className="mb-3 flex justify-start items-center gap-3.5">
            <div
              className="-rotate-12 text-5xl drop-shadow-[0_8px_14px_rgba(255,150,30,0.22)]"
              aria-hidden="true"
            >
              🔔
            </div>
            <h2 className="font-display text-[25px] leading-[0.95] tracking-[-0.6px] font-bold">
              About Me
            </h2>
          </div>
          <strong className="text-slate-700 dark:text-slate-300">
            Full-stack Developer
          </strong>{" "}
          based in Vietnam, passionate about building robust back-end systems
          and crafting intuitive, modern user interfaces. I focus on end-to-end
          web development, system architecture, and delivering seamless user
          experiences.
        </div>

        <div className="mt-6.5 grid grid-cols-2 gap-2.5 max-[720px]:max-w-none">
          {traits.map((trait) => (
            <div
              className={`flex min-h-19.5 w-full flex-col text-slate-700 dark:text-slate-300 justify-between gap-2.5 rounded-[17px] p-3.25 text-[13px] font-bold transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1.25 hover:shadow-[0_14px_28px_rgba(25,29,40,0.13)] ${trait.className}`}
              key={trait.label}
            >
              <span className="text-xl">{trait.icon}</span>
              <span>{trait.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Portrait Wrap */}
      <ScrollReveal
        className="relative z-2 grid min-h-125 place-items-end justify-items-center max-[980px]:order-1 max-[720px]:min-h-100 max-[720px]:w-full"
        delay={100}
        yOffset={40}
      >
        <div className="relative grid h-full w-[min(100%,390px)] place-items-end justify-items-center overflow-hidden max-[720px]:h-97.5">
          <div className="relative h-full w-full overflow-hidden rounded-[42%_42%_20%_20%/30%_30%_18%_18%] bg-transparent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
            <Image
              src={mePhoto}
              alt="Me"
              fill
              priority
              className="object-cover object-bottom"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 20%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
              }}
            />
          </div>
          <div
            className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2.5 rounded-full bg-white/76 px-4.5 py-2.75 shadow-[0_14px_30px_rgba(20,25,38,0.14)] backdrop-blur-xl"
            aria-label="Ảnh đại diện"
          >
            <span className="size-2.25 rounded-full bg-[#1b1d21]"></span>
            <span className="size-2.25 rounded-full bg-[#b6b8bd]"></span>
            <span className="size-2.25 rounded-full bg-[#b6b8bd]"></span>
          </div>
        </div>
      </ScrollReveal>

      {/* Identity Column */}
      <ScrollReveal
        className="relative z-2 flex self-stretch flex-col justify-center max-[980px]:col-span-full max-[980px]:order-3 max-[980px]:flex-row max-[980px]:items-center max-[980px]:justify-between max-[720px]:w-full max-[720px]:flex-col max-[720px]:items-start"
        delay={200}
        xOffset={50}
        yOffset={0}
      >
        <div className="flex flex-col gap-4">
          <div
            className="font-display text-4xl font-medium text-slate-700 dark:text-slate-300"
            aria-hidden="true"
          >
            hi! ✌️, I&apos;m
          </div>

          <h1 className="font-display text-slate-700 dark:text-slate-300 text-[clamp(42px,5vw,68px)] font-bold tracking-[-3.2px] leading-[0.88] max-[430px]:text-[46px]">
            {/* I&apos;m */}
            Nguyen
            <br />
            Hong Son
          </h1>
          <p className="font-semibold text-[#6c7078]">Da Nang, Viet Nam</p>

          {/* Action Buttons */}
          <div className=" flex items-center gap-5.5 flex-wrap">
            {/* About Me Button */}
            <a
              href="#about"
              className="bg-[#3448d9] hover:bg-[#515fcb] text-white font-bold py-3.5 px-8.5 rounded-2xl shadow-[0_10px_20px_rgba(139,92,246,0.15)] transition-all duration-250 hover:-translate-y-0.5 text-base cursor-pointer"
            >
              About me
            </a>
            {/* Contact Group */}
            <div className="flex items-center gap-3">
              <span className="text-2xl animate-pulse">👋</span>
              <span className="font-display font-bold text-slate-700 dark:text-slate-300 tracking-wider text-sm">
                CONTACT
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack & Tools */}
        <div className="mt-8 flex flex-col gap-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            My favorite tech stack & tools:
          </span>
          <div className="flex items-center gap-4.5 text-[#64748b]">
            <NextIcon className="w-6.5 h-6.5 fill-current hover:text-[#000000] transition-colors" />
            <NestIcon className="w-6.5 h-6.5 fill-current hover:text-[#e0234e] transition-colors" />
            <TailwindCSSIcon className="w-6.5 h-6.5 fill-current hover:text-[#38bdf8] transition-colors" />
            <TypeScriptIcon className="w-6.5 h-6.5 fill-current hover:text-[#3178c6] transition-colors" />
            <ViteIcon className="w-6.5 h-6.5 fill-current hover:text-[#646cff] transition-colors" />
            <div className="h-6.25 border-r border-[#cbd5e1] mx-1" />
            <GitIcon className="w-6.5 h-6.5 fill-current hover:text-[#f05032] transition-colors" />
          </div>
        </div>

        {/* <div className="mt-4 bg-[rgba(255,255,255,0.72)] border border-[rgba(255,255,255,0.82)] shadow-[0_15px_35px_rgba(22,28,42,0.08)] backdrop-blur-[18px] relative grid min-h-51.25 w-[min(100%,225px)] place-items-center overflow-hidden rounded-4xl p-6 max-[720px]:min-h-42.5 max-[720px]:w-full max-[720px]:self-stretch min-[721px]:self-end">
          <small className="absolute top-4.5 left-5.5 font-bold text-[#6c7078] text-xs">
            Years old
          </small>
          <div className="grid size-29 rotate-[-22deg] place-items-center rounded-full border-18 border-[#3448d9] border-r-transparent">
            <span className="font-display text-[28px] font-extrabold grid size-16.5 rotate-22 place-items-center rounded-full bg-[#f8f9fb]">
              21
            </span>
          </div>
        </div> */}
      </ScrollReveal>
    </section>
  );
}
