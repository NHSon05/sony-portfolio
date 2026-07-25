import { sectionTitleClass } from "@/libs/sectionTitleClass";
import BehanceDarkIcon from "./icons/behance-dark";
import GithubDarkIcon from "./icons/github-dark";
import InsDarkIcon from "./icons/ins-dark";
import insPicture from "../assets/imgs/ins.png";
import LinkedinIcon from "./icons/linkedin";
import PinterestLightIcon from "./icons/pinterest-light";
import ScrollReveal from "./scroll-reveal";

export default function ContactSection() {
  const contactCardClass =
    "bg-[rgba(255,255,255,0.78)] border border-[rgba(255,255,255,0.9)] rounded-[22px] p-8 shadow-[0_14px_34px_rgba(25,30,44,0.08)] transition-[transform,box-shadow] duration-[250ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(25,30,44,0.13)]";

  return (
    <section className="mt-14" id="contact">
      <ScrollReveal>
        <h2 className={sectionTitleClass}>Contact</h2>
      </ScrollReveal>
      <div className="grid grid-cols-4 items-stretch gap-8 max-[980px]:grid-cols-1">
        {/* Column 1: Pinterest Card */}
        <ScrollReveal delay={0} className="flex flex-col col-span-1 max-[980px]:col-span-full w-full h-full">
          <a
            className="flex flex-col justify-between rounded-[22px] bg-[linear-gradient(155deg,#ff9d2f,#ff6652)] p-16 text-white shadow-[0_20px_45px_rgba(255,110,70,0.22)] transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(255,110,70,0.30)] max-[980px]:min-h-55 w-full h-full"
            href="#"
            aria-label="Xem dự án khác"
          >
            <PinterestLightIcon className="w-8 h-auto" />
            <h3 className="font-display text-[23px] leading-[0.92] max-w-37.5 font-bold">
              Check My Other Projects
            </h3>
            <span className="w-fit bg-white text-[#3f4248] p-[8px_12px] rounded-lg text-xs font-extrabold">
              sony.next.dev
            </span>
          </a>
        </ScrollReveal>

        {/* Column 2: Center Column (width 3) */}
        <ScrollReveal delay={150} className="flex col-span-3 flex-col gap-6 max-[980px]:col-span-full w-full h-full">
          <div className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
            {/* Left Column (width 2) */}
            <div className="col-span-2 flex flex-col gap-6 max-[720px]:col-span-1">
              {/* gmail */}
              <a
                className={` flex items-center justify-center gap-3
                bg-[rgba(255,255,255,0.78)] border border-[rgba(255,255,255,0.9)] rounded-[22px] p-2 shadow-[0_14px_34px_rgba(25,30,44,0.08)] transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(25,30,44,0.13)]
                `}
                href="mailto:snguyenhong8@gmail.com"
              >
                <h4 className="text-4xl text-slate-700 dark:text-slate-300 leading-none">
                  ✉{" "}
                </h4>
                <strong className="block font-display text-slate-700 dark:text-slate-300 text-xl wrap-anywhere font-bold">
                  snguyenhong8@gmail.com
                </strong>
              </a>

              {/* Ig */}
              <a
                className={` 
                bg-[rgba(255,255,255,0.78)] border border-[rgba(255,255,255,0.9)] rounded-[22px] shadow-[0_14px_34px_rgba(25,30,44,0.08)] transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(25,30,44,0.13)]"
                flex flex-row items-center justify-between gap-6 p-4 max-[500px]:flex-col max-[500px]:items-start`}
                href="https://www.instagram.com/songuyen.33/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col p-6 justify-between h-full gap-5">
                  <div className="flex flex-col gap-3">
                    <InsDarkIcon className="size-9 text-slate-700" />
                    <strong className="block font-display text-slate-700 dark:text-slate-300 text-xl wrap-anywhere font-bold">
                      @songuyen.33
                    </strong>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#a259ff] p-[8px_16px] text-xs font-bold text-white shadow-sm transition-transform active:scale-95 hover:bg-[#9242ff] w-fit">
                      Follow <span className="opacity-75">204</span>
                    </div>
                  </div>
                </div>

                <div className="w-45 h-45 shrink-0 rounded-xl overflow-hidden border border-slate-100 max-[500px]:mx-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={insPicture.src}
                    alt="Instagram preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>

            {/* Right Column (width 1) */}
            <div className="col-span-1 flex flex-col gap-6 max-[720px]:col-span-1">
              {/* linkedIn */}
              <a
                className="bg-[linear-gradient(135deg,#e2e7ec,#ffffff)] rounded-[22px] p-8 shadow-[0_14px_34px_rgba(25,30,44,0.08)] transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(25,30,44,0.13)] flex-1 flex flex-col justify-between"
                href="https://www.linkedin.com/in/sonnguyen2005/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center gap-3.5 text-center">
                  <LinkedinIcon className="size-9" />
                  <strong className="flex flex-col font-display text-xl text-slate-700 dark:text-slate-300 wrap-anywhere font-bold">
                    Nguyen Hong Son
                    <span className="text-xs font-semibold">
                      linkedin.com/in/sonnguyen2005/
                    </span>
                  </strong>
                </div>
              </a>

              {/* GitHub */}
              <a
                className={`${contactCardClass} flex flex-col justify-center items-center text-center`}
                href="https://github.com/NHSon05"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3.5 text-center">
                  <GithubDarkIcon className="size-9 fill-slate-700" />
                  <strong className="block font-display text-slate-700 dark:text-slate-300 text-xl wrap-anywhere font-bold">
                    NHSon05
                  </strong>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
            {/* Landscape Photo Card */}
            <div className="relative col-span-1 aspect-[2.4] max-[720px]:aspect-[1.8] overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.9)] shadow-[0_14px_34px_rgba(25,30,44,0.08)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&h=230&q=80"
                alt="Landscape capture"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent)] p-3.5 text-white">
                <p className="text-[11px] font-bold tracking-tight">
                  Love to Captured Moment.
                </p>
              </div>
            </div>

            {/* Behance */}
            <a
              className="bg-[linear-gradient(135deg,#d1dbf4,#ffffff)] rounded-[22px] p-8 shadow-[0_14px_34px_rgba(25,30,44,0.08)] transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(25,30,44,0.13)] flex col-span-2 max-[720px]:col-span-1 flex-col justify-center items-center text-center"
              href="https://www.behance.net/sonnguyen05"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-3.5 text-center">
                <BehanceDarkIcon className="size-16 fill-[#003087]" />
                <strong className="flex flex-col text-start font-display text-[#003087] text-xl wrap-anywhere font-bold">
                  Nguyen Hong Son
                  <span className="text-xs font-semibold text-[#6882b5]">
                    behance.net/sonnguyen05
                  </span>
                </strong>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
      <footer className="mt-13.75 pt-6 border-t border-[rgba(15,17,20,0.12)] flex justify-between gap-4.5 text-slate-700 dark:text-slate-300 text-[13px] max-[720px]:flex-col">
        <span>
          © <span id="currentYear"></span> Hong Son Portfolio
        </span>
        <span>Designed & developed with care.</span>
      </footer>
    </section>
  );
}
