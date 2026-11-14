import { Navbar } from "@/components/shared/navbar";
import ProfileBar from "@/components/shared/profileBar";
import { HomeSection } from "@/components/shared/homeSection";
import Image from "next/image";
import { profile } from "@/lib/profile";

const Home = () => {
  return (
    // Mobile: navbar dengan hamburger → Home. Laptop: sidebar kiri, navbar dan Home kanan.
    <main className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 content-start items-start gap-4 px-4 pt-4 pb-7 font-poppins text-[#141822] lg:h-dvh lg:min-h-0 lg:grid-cols-[330px_minmax(0,1fr)] lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-[22px] lg:p-6">
      <div className="min-w-0 lg:col-start-2 lg:row-start-1"><Navbar /></div>
      <div className="flex min-w-0 flex-col gap-4 lg:col-start-2 lg:row-start-2 lg:h-full lg:min-h-0">
        <div className="lg:min-h-0 lg:flex-1"><HomeSection /></div>
        <footer
          id="contact"
          aria-labelledby="contact-heading"
          tabIndex={-1}
          className="shrink-0 scroll-mt-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7]"
        >
          <div className="relative isolate flex flex-col gap-[18px] overflow-hidden rounded-[20px] border-[3px] border-[#141822] bg-[#E4ECFF] px-5 py-[22px] shadow-[5px_5px_0_#141822] lg:flex-row lg:items-center lg:justify-between lg:gap-[22px] lg:rounded-[22px] lg:p-8 lg:shadow-[7px_7px_0_#141822]">
            <div aria-hidden="true" className="pointer-events-none absolute top-[132px] -right-[27px] -z-10 size-[130px] rounded-full bg-[#C7D7FA] opacity-45 lg:-top-[43px] lg:right-auto lg:-left-[27px] lg:size-[150px] lg:bg-[#FFDF8F]" />
            <Image src="/images/contact-globe.png" alt="" width={96} height={96} className="pointer-events-none absolute top-[17px] right-[17px] -z-10 lg:hidden" />
            <Image src="/images/contact-flower.png" alt="" width={82} height={82} className="pointer-events-none absolute -top-[15px] -right-[13px] -z-10 hidden lg:block" />
            <div className="min-w-0 lg:flex-1">
              <p className="mb-2 text-[11px] font-medium leading-[17px] tracking-[0.12em] text-[#3A4A6B] uppercase lg:mb-2.5">Contact Me</p>
              <h2 id="contact-heading" className="text-[22px] font-semibold leading-[33px] lg:text-[26px] lg:leading-[39px]">Let&apos;s work together</h2>
              <p className="mt-1.5 text-[13.5px] font-normal leading-5 text-[#3A4A6B] lg:text-sm lg:leading-[21px]">
                <span className="break-all">{profile.email}</span>
                <span className="hidden lg:inline"> — </span>
                <br className="lg:hidden" />
                Surabaya, Indonesia
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex shrink-0 items-center justify-center rounded-[13px] border-[3px] border-[#141822] bg-[#FFDF8F] px-5 py-[13px] text-sm font-semibold leading-[21px] shadow-[4px_4px_0_#141822] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7] lg:px-[26px] lg:shadow-[5px_5px_0_#141822]"
            >
              Send Email
            </a>
          </div>
          <p className="mt-3 px-2 text-center text-[11px] font-normal leading-5 text-[#6A7186]">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </footer>
      </div>
      <ProfileBar className="hidden lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:flex" />
    </main>
  );
};

export default Home;
