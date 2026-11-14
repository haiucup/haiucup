import type { ReactNode } from "react";
import { profile } from "@/lib/profile";

const icons: Record<string, ReactNode> = {
  LinkedIn: <><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M7 10v7M11 17v-7m0 3c0-4 6-4 6 0v4" /><circle cx="7" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
  GitHub: <><path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-6.96A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.79c0 5.42 3.3 6.61 6.44 6.96A3.37 3.37 0 0 0 8 18.13V22" /></>,
  X: <path fill="currentColor" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />,
  Instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
};

const SocialLinks = () => (
  <ul aria-label="Social profiles" className="flex flex-wrap gap-2.5">
    {profile.socials.map(({ name, url }) => (
      <li key={name}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} (opens in a new tab)`}
          className="flex size-10 items-center justify-center rounded-xl border-[3px] border-[#141822] bg-white transition-colors hover:bg-[#E4ECFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[18px]">{icons[name]}</svg>
        </a>
      </li>
    ))}
  </ul>
);

export { SocialLinks };
