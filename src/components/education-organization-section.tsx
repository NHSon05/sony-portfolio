import ScrollReveal from "./scroll-reveal";

export default function EducationOrganizationSection() {
  const education = [
    {
      year: "2023 -",
      strong: "Present",
      title: "Information Technology",
      description: "Danang University of Science and Technology",
    },
  ];

  const organization = [
    {
      year: "9/2026 -",
      strong: "Present",
      title: "Leader of Software Developer",
      description: "Google Developer Groups on Campus - DUT",
    },
    {
      year: "1/2025 -",
      strong: "7/2026",
      title: "Front-end Developer",
      description: "Google Developer Groups on Campus - DUT",
    },
  ];

  const sectionTitleClass =
    "relative mb-[30px] inline-flex items-center border-2 border-[#3448d9] px-4 pt-1 pb-[7px] text-[#3345b7] font-display text-[clamp(27px,3vw,38px)] font-bold leading-none tracking-[-1.5px] [text-shadow:2px_0_rgba(244,61,86,0.35),-2px_0_rgba(0,190,214,0.35)] before:absolute before:-top-1.5 before:-left-1.5 before:size-2 before:border-2 before:border-[#3448d9] before:bg-white before:content-[''] after:absolute after:-right-1.5 after:-bottom-1.5 after:size-2 after:border-2 after:border-[#3448d9] after:bg-white after:content-['']";

  return (
    <section className="mt-14.5 grid grid-cols-2 gap-17.5 max-[720px]:grid-cols-1 max-[720px]:gap-11.5">
      {/* Education Column */}
      <ScrollReveal delay={0}>
        <h2 className={sectionTitleClass}>Education</h2>
        <div className="grid gap-6.5">
          {education.map((item, idx) => (
            <article
              key={idx}
              className="grid grid-cols-[86px_1fr] items-start gap-5.5 max-[430px]:grid-cols-[68px_1fr] max-[430px]:gap-3.5"
            >
              <div className="text-[13px] text-[#6c7078] font-bold leading-[1.1]">
                {item.year}
                <strong className="block text-slate-700 dark:text-slate-300 text-[22px] mt-1">
                  {item.strong}
                </strong>
              </div>
              <div>
                <h3 className="font-display text-slate-700 dark:text-slate-300 text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-slate-700 dark:text-slate-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>

      {/* Organization Column */}
      <ScrollReveal delay={150}>
        <h2 className={sectionTitleClass}>Organization</h2>
        <div className="grid gap-6.5">
          {organization.map((item, idx) => (
            <article
              key={idx}
              className="grid grid-cols-[86px_1fr] items-start gap-5.5 max-[430px]:grid-cols-[68px_1fr] max-[430px]:gap-3.5"
            >
              <div className="text-[13px] text-[#6c7078] font-bold leading-[1.1]">
                {item.year}
                <strong className="block text-slate-700 dark:text-slate-300 text-[22px] mt-1">
                  {item.strong}
                </strong>
              </div>
              <div>
                <h3 className="font-display text-slate-700 dark:text-slate-300 text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#6c7078]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
