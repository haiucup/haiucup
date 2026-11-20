import { ArrowRight } from "lucide-react";
import { ProfilePhoto } from "@/components/shared/profilePhoto";
import { profile } from "@/lib/profile";

const HomeSection = () => (
  <section id="home" aria-labelledby="home-heading" className="relative isolate scroll-mt-28 overflow-hidden rounded-[18px] border-[3px] border-[#141822] bg-white px-5 pt-6 pb-7 shadow-[6px_6px_0_#141822] lg:flex lg:min-h-[760px] lg:scroll-mt-6 lg:flex-col lg:justify-center lg:px-11 lg:py-[54px]">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-16 -z-10 size-[230px] rounded-full bg-[#DEE8FC] lg:-top-28 lg:-right-24 lg:size-[380px] lg:bg-[#FFF0C2]" />
    <svg aria-hidden="true" viewBox="0 0 100 100" className="pointer-events-none absolute top-4 right-4 -z-10 size-20 fill-[#AAC4F5] lg:top-5 lg:right-8 lg:size-36 lg:fill-[#E7DDBA]">
      {Array.from({ length: 8 }, (_, index) => <ellipse key={index} cx="50" cy="24" rx="7" ry="20" transform={`rotate(${index * 45} 50 50)`} />)}
    </svg>
    <div aria-hidden="true" className="pointer-events-none absolute top-5 left-4 -z-10 h-16 w-24 bg-[radial-gradient(circle,#D7DBE4_1.5px,transparent_2px)] bg-size-[12px_12px] lg:top-auto lg:right-10 lg:bottom-12 lg:left-auto" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-12 -z-10 size-36 rounded-full border-4 border-double border-[#DDE2EF] lg:-bottom-2 lg:-left-14 lg:size-48" />
    </div>

    <div className="w-full lg:max-w-[600px]">
      <a href={profile.email ? `mailto:${profile.email}` : "mailto:"} className="mb-4 inline-flex items-center gap-3 rounded-xl border-[3px] border-[#141822] bg-[#355FC7] px-4 py-2.5 text-xs font-semibold text-white shadow-[4px_4px_0_#141822] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7] lg:hidden">
        Hire Me <span className="flex size-5 items-center justify-center rounded-full bg-[#FFDF8F] text-[#141822]"><ArrowRight aria-hidden="true" size={13} /></span>
      </a>
      <ProfilePhoto className="mb-5 lg:hidden" />
      <p className="mb-5 hidden w-fit rounded-full border-2 border-[#141822] bg-[#FFDF8F] px-4 py-1.5 text-xs font-normal lg:block">{profile.specialization}</p>
      <h1 id="home-heading" className="text-[30px] font-bold leading-[1.15] tracking-[-0.04em] sm:text-[38px] lg:text-[44px]">
        Hello, I&apos;m<br />Yusup Maulana
      </h1>
      <p className="mt-4 max-w-[560px] text-sm font-normal leading-[1.85] text-[#596177] lg:mt-5 lg:text-lg lg:leading-[1.7]">{profile.introduction}</p>
      <div className="mt-6 flex flex-col items-stretch gap-3 pb-1 pr-1 lg:mt-8 lg:flex-row lg:items-center lg:gap-7">
        <a href="#portfolio" className="inline-flex min-h-12 items-center justify-center rounded-[13px] border-[3px] border-[#141822] bg-[#355FC7] px-6 py-3 text-sm font-semibold text-white shadow-[5px_5px_0_#141822] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7]">View Portfolio</a>
        <a href="#about" className="inline-flex min-h-12 items-center justify-center rounded-[13px] border-[3px] border-[#141822] bg-white px-5 py-3 text-center text-sm font-normal transition-colors hover:bg-[#EEF1FA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7] lg:border-0 lg:bg-transparent lg:px-0">More about me →</a>
      </div>
    </div>
  </section>
);

export { HomeSection };
