import AstroDarkIcon from "./icons/astro-dark";
import ClaudeDarkIcon from "./icons/claude-dark";
import ColabDarkIcon from "./icons/colab-dark";
import FigmaDarkIcon from "./icons/figma-dark";
import DockerDarkIcon from "./icons/docker-dark";
import ExpressDarkIcon from "./icons/express-dark";
import GitDarkIcon from "./icons/git-dark";
import GithubDarkIcon from "./icons/github-dark";
import JavascriptDarkIcon from "./icons/javascript-dark";
import MongoDarkIcon from "./icons/mongo-dark";
import NestDarkIcon from "./icons/nest-dark";
import NextDarkIcon from "./icons/next-dark";
import NodejsDarkIcon from "./icons/nodejs-dark";
import PostgresqlDarkIcon from "./icons/postgresql-dark";
import PostmanDarkIcon from "./icons/postman-dark-";
import PrismaDarkIcon from "./icons/prisma-dark";
import RadixLightIcon from "./icons/radix-light";
import ReactQueryLightIcon from "./icons/react-query-light";
import ShadcnDarkIcon from "./icons/shadcn.dark";
import SupabaseDarkIcon from "./icons/supabase-dark";
import TypescriptDarkIcon from "./icons/typescript-dark";
import VercelLightIcon from "./icons/vercel-light";
import ViteDarkIcon from "./icons/vite-dark";
import ZustandLightIcon from "./icons/zustand-light";
import VscodeDarkIcon from "./icons/vscode-dark";
import AntigravityDarkIcon from "./icons/antigravity-dark";
import ReactDarkIcon from "./icons/react-dark";

import ScrollReveal from "./scroll-reveal";

export default function SoftwareSection() {
  const softwareSkills = [
    // Front-end
    { title: "JavaScript", Icon: JavascriptDarkIcon },
    { title: "TypeScript", Icon: TypescriptDarkIcon },
    { title: "React", Icon: ReactDarkIcon },
    { title: "Next.js", Icon: NextDarkIcon },
    { title: "Astro", Icon: AstroDarkIcon },
    { title: "Vite", Icon: ViteDarkIcon },
    { title: "React Query", Icon: ReactQueryLightIcon },
    { title: "Zustand", Icon: ZustandLightIcon },
    { title: "Shadcn UI", Icon: ShadcnDarkIcon },
    { title: "Radix UI", Icon: RadixLightIcon },

    // Backend-database
    { title: "Node.js", Icon: NodejsDarkIcon },
    { title: "Express", Icon: ExpressDarkIcon },
    { title: "NestJS", Icon: NestDarkIcon },
    { title: "MongoDB", Icon: MongoDarkIcon },
    { title: "PostgreSQL", Icon: PostgresqlDarkIcon },
    { title: "Prisma", Icon: PrismaDarkIcon },
    { title: "Supabase", Icon: SupabaseDarkIcon },

    // Design
    { title: "Figma", Icon: FigmaDarkIcon },

    // Tool
    { title: "Docker", Icon: DockerDarkIcon },
    { title: "Git", Icon: GitDarkIcon },
    { title: "GitHub", Icon: GithubDarkIcon },
    { title: "Postman", Icon: PostmanDarkIcon },
    { title: "VS Code", Icon: VscodeDarkIcon },
    { title: "Vercel", Icon: VercelLightIcon },
    { title: "Claude", Icon: ClaudeDarkIcon },
    { title: "Colab", Icon: ColabDarkIcon },
    { title: "Antigravity", Icon: AntigravityDarkIcon },
  ];

  return (
    <section className="mt-14.5" id="skills">
      <ScrollReveal>
        <h2 className="relative mb-7.5 inline-flex items-center border-2 border-[#3448d9] px-4 pt-1 pb-1.75 text-[#3345b7] font-display text-[clamp(27px,3vw,38px)] font-bold leading-none tracking-[-1.5px] [text-shadow:2px_0_rgba(244,61,86,0.35),-2px_0_rgba(0,190,214,0.35)] before:absolute before:-top-1.5 before:-left-1.5 before:size-2 before:border-2 before:border-[#3448d9] before:bg-white before:content-[''] after:absolute after:-right-1.5 after:-bottom-1.5 after:size-2 after:border-2 after:border-[#3448d9] after:bg-white after:content-[''] mx-auto">
          Software Skills
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3.5 items-center">
        {softwareSkills.map((skill, idx) => (
          <ScrollReveal
            key={skill.title}
            delay={(idx % 10) * 30}
            yOffset={15}
            duration={300}
            className="w-full"
          >
            <div
              className="aspect-square border-[3px] border-[#17191d] rounded-[15px] bg-white grid place-items-center transition-all duration-250 ease-in-out relative overflow-hidden after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1.75 after:bg-[#3448d9] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:-translate-y-2 hover:-rotate-1 hover:bg-white hover:after:scale-x-100 cursor-default w-full"
              title={skill.title}
            >
              <skill.Icon className="w-11 h-11 object-contain" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
