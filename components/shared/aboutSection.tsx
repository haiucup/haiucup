import { profile } from "@/lib/profile";
import { ProfileFields } from "@/components/shared/profileBar";
import { SocialLinks } from "@/components/shared/socialLinks";

const AboutSection = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="relative isolate grid scroll-mt-28 gap-[18px] rounded-[20px] border-[3px] border-[#141822] bg-white px-5 py-[22px] shadow-[5px_5px_0_#141822] lg:scroll-mt-6 lg:grid-cols-2 lg:gap-[22px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
  >
    <div className="relative isolate min-w-0 lg:overflow-hidden lg:rounded-[22px] lg:border-[3px] lg:border-[#141822] lg:bg-white lg:p-8 lg:shadow-[7px_7px_0_#141822]">
      <div aria-hidden="true" className="pointer-events-none absolute -top-[25px] -right-[23px] -z-10 size-24 rounded-full bg-[#DEE8FC] lg:-top-9 lg:-right-9 lg:size-28 lg:bg-[#FFF0C2]" />
      <p className="text-[11px] font-medium leading-[17px] tracking-[0.14em] text-[#6A7186] uppercase">About Me</p>
      <h2 id="about-heading" className="mt-2 text-[22px] font-semibold leading-[33px] tracking-[-0.02em] lg:text-[24px] lg:leading-9">A little about me</h2>
      <p className="mt-3 text-[13.5px] font-light leading-6 text-[#565C6B] lg:text-[14.5px] lg:leading-[26px]">{profile.about}</p>
      <svg aria-hidden="true" viewBox="0 0 80 80" className="pointer-events-none absolute right-0 bottom-0 -z-10 hidden size-24 fill-[#D7E0F6] lg:block">
        <path d="M8 0 40 29 72 0 51 40 80 72 40 51 8 80 29 40Z" />
      </svg>
    </div>

    <div className="lg:hidden"><ProfileFields /></div>
    <div className="lg:hidden"><SocialLinks /></div>

    <ul aria-label="Profile highlights" className="flex min-w-0 flex-col gap-3.5">
      {profile.highlights.map(({ value, title, note }) => (
        <li key={title} className="flex min-w-0 items-center gap-3 rounded-[14px] border-[3px] border-[#141822] bg-[#F4F6FC] p-3 shadow-[3px_3px_0_#141822] lg:gap-3.5 lg:bg-white lg:px-5 lg:py-[18px] lg:shadow-[5px_5px_0_#141822]">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] border-[3px] border-[#141822] bg-[#FFDF8F] text-[13px] font-semibold tabular-nums lg:size-[50px] lg:text-sm">{value}</span>
          <div className="min-w-0">
            <h3 className="text-[13px] font-semibold leading-5 lg:text-[14px] lg:leading-[21px]">{title}</h3>
            <p className="mt-0.5 text-[11px] font-light leading-[18px] text-[#565C6B] lg:text-xs">{note}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export { AboutSection };
