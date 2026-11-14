import Image from "next/image";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const ProfileIdentity = ({ className }: { className?: string }) => (
  <a
    href="#home"
    aria-label={`${profile.name} — Home`}
    className={cn("flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7]", className)}
  >
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-[#141822] bg-[#C7D7FA] lg:size-[50px]">
      <Image src="/ym-logo.svg" alt="" width={24} height={30} className="h-6 w-auto lg:h-7" />
    </span>
    <span className="min-w-0">
      <span className="block text-sm font-bold leading-snug lg:text-base">{profile.name}</span>
      <span className="block text-[11px] font-normal text-[#596177] lg:text-xs">{profile.role}</span>
    </span>
  </a>
);

export { ProfileIdentity };
