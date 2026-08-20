import ReactJSBadge from "./badges/reactjs";
import NextJSBadge from "./badges/nextjs";
import TailwindCSSBadge from "./badges/tailwindcss";
import TypeScriptBadge from "./badges/typescript";
import AstroBadge from "./badges/astro";
import DockerBadge from "./badges/docker";
import ExpressjsBadge from "./badges/expressjs";
import FigmaBadge from "./badges/figma";
import GitBadge from "./badges/git";
import JavaScriptBadge from "./badges/javascript";
import MongoBadge from "./badges/mongo";
import NestJSBadge from "./badges/nestjs";
import NodeJSBadge from "./badges/nodejs";
import PostgreSQLBadge from "./badges/postgresql";
import PostmanBadge from "./badges/postman";
import PrismaBadge from "./badges/prisma";
import ReactQueryBadge from "./badges/react-query";
import ShadcnBadge from "./badges/shadcn";
import SocketIOBadge from "./badges/socket-io";
import ViteBadge from "./badges/vite";
import ZustandBadge from "./badges/zustand";

import riskmanagement from "../assets/imgs/riskmanagement.png";
import localism from "../assets/imgs/localism.png";
import sharingHub from "../assets/imgs/sharing-hub.png";
import fairinsights from "../assets/imgs/fairinsights.png";
import chatApp from "../assets/imgs/chat-app.png";
import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

const badgeMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: ReactJSBadge,
  reactjs: ReactJSBadge,
  ReactJS: ReactJSBadge,
  "Next.js": NextJSBadge,
  Nextjs: NextJSBadge,
  "Tailwind CSS": TailwindCSSBadge,
  TailwindCSS: TailwindCSSBadge,
  TypeScript: TypeScriptBadge,
  typescript: TypeScriptBadge,
  Astro: AstroBadge,
  Docker: DockerBadge,
  docker: DockerBadge,
  "Express.js": ExpressjsBadge,
  Expressjs: ExpressjsBadge,
  Figma: FigmaBadge,
  figma: FigmaBadge,
  Git: GitBadge,
  git: GitBadge,
  JavaScript: JavaScriptBadge,
  javascript: JavaScriptBadge,
  MongoDB: MongoBadge,
  mongodb: MongoBadge,
  NestJS: NestJSBadge,
  "Node.js": NodeJSBadge,
  Nodejs: NodeJSBadge,
  PostgreSQL: PostgreSQLBadge,
  postgresql: PostgreSQLBadge,
  Postman: PostmanBadge,
  Prisma: PrismaBadge,
  "React Query": ReactQueryBadge,
  "shadcn/ui": ShadcnBadge,
  "Shadcn/UI (Radix)": ShadcnBadge,
  "Socket.IO": SocketIOBadge,
  "Socket.io": SocketIOBadge,
  "socket.io": SocketIOBadge,
  Vite: ViteBadge,
  Zustand: ZustandBadge,
  zustand: ZustandBadge,
};

export default function ProjectsSection() {
  const projects = [
    {
      title: "FairInsights",
      description:
        "An AI-powered LegalTech MVP that simplifies initial legal consulting and matches users with specialized lawyers using multi-step AI reasoning.",
      tags: ["React", "Zustand", "Figma", "socket.io"],
      link: "https://fairinsight.gdsc.dev/",
      image: fairinsights,
    },
    {
      title: "Risk Tracking",
      description:
        "A web app designed to identify and mitigate operational risks using SWOT, PESTEL, and real-time risk matrices.",
      tags: ["React", "TypeScript", "Git"],
      link: "https://github.com/NHSon05/RiskManagement",
      image: riskmanagement,
    },
    {
      title: "Localism",
      description:
        "A mobile app connecting international tourists directly with local guides for authentic cultural experiences.",
      tags: [
        "NestJS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Socket.IO",
        "Figma",
      ],
      link: "https://ln.run/IRQYY",
      image: localism,
    },
    {
      title: "Lydinc Sharing Hub",
      description:
        "A full-stack task and project management system with role-based access control, task assignments, and progress tracking.",
      tags: [
        "Nextjs",
        "Nodejs",
        "Expressjs",
        "Docker",
        "postgresql",
        "zustand",
      ],
      link: "https://github.com/NHSon05/lydinc-sharing-hub",
      image: sharingHub,
    },
    {
      title: "Chat-app-realtime",
      description:
        "A real-time messaging application featuring friend discovery, a modern UI, and smooth chat performance.",
      tags: ["mongodb", "reactjs", "nodejs", "expressjs", "socket.io"],
      link: "https://chat-app-realtime-brown.vercel.app/login",
      image: chatApp,
    },
  ];

  return (
    <section className="mt-14" id="projects">
      <ScrollReveal>
        <h2 className="relative mb-7.5 inline-flex items-center border-2 border-[#3448d9] px-4 pt-1 pb-1.75 text-[#3345b7] font-display text-[clamp(27px,3vw,38px)] font-bold leading-none tracking-[-1.5px] [text-shadow:2px_0_rgba(244,61,86,0.35),-2px_0_rgba(0,190,214,0.35)] before:absolute before:-top-1.5 before:-left-1.5 before:size-2 before:border-2 before:border-[#3448d9] before:bg-white before:content-[''] after:absolute after:-right-1.5 after:-bottom-1.5 after:size-2 after:border-2 after:border-[#3448d9] after:bg-white after:content-['']">
          Projects
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-6.5 max-[1024px]:grid-cols-2 max-[720px]:grid-cols-1">
        {projects.map((proj, idx) => (
          <ScrollReveal
            key={idx}
            delay={(idx % 3) * 100}
            className="flex w-full h-full"
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-[rgba(255,255,255,0.72)] border border-[rgba(255,255,255,0.82)] shadow-[0_15px_35px_rgba(22,28,42,0.08)] backdrop-blur-[18px] rounded-2xl p-2 flex flex-col justify-between transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1.25 hover:shadow-[0_20px_40px_rgba(25,29,40,0.12)] w-full"
            >
              <div>
                {proj.image && (
                  <div className="relative w-full aspect-16/10 overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/50 mb-4.5 bg-slate-50 dark:bg-slate-900">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    />
                  </div>
                )}
                <div className="px-4">
                  <h3 className="font-display text-2xl font-bold mb-2.5 text-slate-700 dark:text-slate-300 group-hover:text-[#3448d9] transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-[#6c7078] mb-5 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 px-4">
                  {proj.tags.map((tag, tIdx) => {
                    const BadgeComponent = badgeMap[tag];
                    if (BadgeComponent) {
                      return <BadgeComponent key={tIdx} />;
                    }
                    return (
                      <span
                        key={tIdx}
                        className="bg-white/80 border border-[rgba(255,255,255,0.9)] text-xs font-bold px-3 py-1.25 rounded-full text-[#3448d9] shadow-sm"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
