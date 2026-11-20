import Image from "next/image";
import { profile } from "@/lib/profile";

const ExperienceSection = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="relative isolate scroll-mt-28 overflow-hidden rounded-[20px] border-[3px] border-[#141822] bg-white px-5 py-[22px] shadow-[5px_5px_0_#141822] lg:scroll-mt-6 lg:rounded-[22px] lg:p-8 lg:shadow-[7px_7px_0_#141822]"
  >
    <Image src="/images/contact-globe.png" alt="" width={110} height={110} className="pointer-events-none absolute -top-4 -right-4 -z-10 size-24 lg:-top-5 lg:-right-5 lg:size-28" />
    <p className="text-[11px] font-medium leading-[17px] tracking-[0.14em] text-[#6A7186] uppercase">Experience</p>
    <h2 id="experience-heading" className="mt-2 text-[22px] font-semibold leading-[33px] tracking-[-0.02em] lg:text-[24px] lg:leading-9">Work &amp; community</h2>

    <ol className="relative mt-6 ml-[9px] border-l-2 border-[#D5D7DF] lg:mt-8 lg:ml-[10px]">
      {profile.experiences.map(({ id, role, period, company, summary, stack }) => (
        <li key={id} className="relative pb-6 pl-6 lg:pb-8 lg:pl-7">
          <span aria-hidden="true" className="absolute top-1 -left-[11px] size-5 rounded-full border-[3px] border-[#141822] bg-[#FFDF8F] lg:-left-3 lg:size-[22px]" />
          <div className="flex flex-col items-start gap-1.5 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            <h3 className="min-w-0 text-[14px] font-semibold leading-[21px] lg:text-base lg:leading-6">{role}</h3>
            <span className="shrink-0 rounded-full border-[1.5px] border-[#141822] bg-[#FFDF8F] px-2.5 py-1 text-[10.5px] font-medium leading-4 lg:text-xs">{period}</span>
          </div>
          <p className="mt-1.5 text-[12.5px] font-medium leading-5 text-[#2247A8] lg:text-[13.5px]">{company}</p>
          <p className="mt-2 text-[13px] font-light leading-6 text-[#565C6B] lg:text-sm lg:leading-[25px]">{summary}</p>
          <ul aria-label={`${company} skills`} className="mt-3 flex flex-wrap gap-2">
            {stack.map((skill) => (
              <li key={skill} className="rounded-full border-[1.5px] border-[#141822] bg-[#F4F6FC] px-2.5 py-1 text-[10.5px] font-normal leading-4 lg:text-xs">{skill}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
    <svg aria-hidden="true" viewBox="0 0 64 64" className="pointer-events-none absolute right-5 bottom-5 -z-10 size-14 fill-none stroke-[#FFDF8F] stroke-8 lg:right-8 lg:bottom-8 lg:size-16">
      <path d="M8 0a24 24 0 0 0 48 0M8 64a24 24 0 0 1 48 0" />
    </svg>
  </section>
);

export { ExperienceSection };
