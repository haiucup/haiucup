import Image from "next/image";
import { profile } from "@/lib/profile";

const PortfolioSection = () => (
  <section
    id="portfolio"
    aria-labelledby="portfolio-heading"
    className="relative isolate scroll-mt-28 overflow-hidden rounded-[20px] border-[3px] border-[#141822] bg-white px-5 py-[22px] shadow-[5px_5px_0_#141822] lg:scroll-mt-6 lg:rounded-[22px] lg:p-8 lg:shadow-[7px_7px_0_#141822]"
  >
    <Image src="/images/contact-globe.png" alt="" width={170} height={170} className="pointer-events-none absolute -top-7 -right-5 -z-10 size-36 lg:-top-8 lg:-right-4 lg:size-[170px]" />
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
      <div>
        <p className="text-[11px] font-medium leading-[17px] tracking-[0.14em] text-[#6A7186] uppercase">Portfolio</p>
        <h2 id="portfolio-heading" className="mt-2 text-[22px] font-semibold leading-[33px] tracking-[-0.02em] lg:text-[24px] lg:leading-9">Selected work</h2>
      </div>
      <div aria-hidden="true" className="h-1.5 w-32 overflow-hidden rounded-full bg-[#E4EAF7] lg:w-44">
        <div className="h-full w-2/3 rounded-full bg-[#FFDF8F]" />
      </div>
    </div>

    <ul className="mt-[18px] grid grid-cols-1 items-start gap-4 lg:mt-6 lg:grid-cols-3">
      {profile.projects.map(({ id, title, description, stack }) => (
        <li key={id} className="flex min-w-0 flex-col gap-1.5 rounded-[14px] border-[3px] border-[#141822] bg-white p-3.5 shadow-[4px_4px_0_#141822] lg:p-4 lg:shadow-[5px_5px_0_#141822]">
          <h3 className="text-sm font-semibold leading-[21px] lg:text-[14.5px] lg:leading-[22px]">{title}</h3>
          <p className="text-[12.5px] font-light leading-5 text-[#565C6B]">{description}</p>
          <p className="text-xs font-light leading-[19px] text-[#565C6B] lg:text-[12.5px]">{stack}</p>
        </li>
      ))}
    </ul>
    <div aria-hidden="true" className="pointer-events-none relative mt-3 ml-auto hidden size-16 overflow-hidden rounded-full bg-[#C7D7FA] lg:block">
      <div className="absolute -top-2 -left-4 size-16 rounded-full bg-white" />
    </div>
  </section>
);

export { PortfolioSection };
