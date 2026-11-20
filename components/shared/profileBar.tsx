import { ArrowRight } from "lucide-react";
import { ProfileIdentity } from "@/components/shared/brandLogo";
import { ProfilePhoto } from "@/components/shared/profilePhoto";
import { SocialLinks } from "@/components/shared/socialLinks";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

type ProfileBarProps = {
  className?: string;
};

// Dipakai di sidebar laptop dan di dalam About pada mobile.
const ProfileFields = () => (
  <dl>
    {profile.details.map(({ label, value }) => (
      <div key={label} className="border-t border-[#DDE2EF] py-2">
        <dt className="mb-1 text-[10px] font-medium tracking-[0.12em] text-[#6A7186] uppercase">{label}</dt>
        <dd className="whitespace-pre-line text-[13px] font-normal leading-[22px]">{value}</dd>
      </div>
    ))}
  </dl>
);

const ProfileBar = ({ className }: ProfileBarProps) => (
  <aside
    aria-label="Yusup Maulana's profile"
    className={cn("flex min-w-0 flex-col gap-4 rounded-[18px] border-[3px] border-[#141822] bg-white p-[18px] shadow-[6px_6px_0_#141822] [&>*]:shrink-0 lg:sticky lg:top-[26px] lg:min-h-[calc(100dvh_-_52px)]", className)}
  >
    <ProfileIdentity />
    <ProfilePhoto className="mx-auto w-full lg:max-w-[clamp(160px,calc(100dvh_-_680px),288px)]" />
    <ProfileFields />
    <SocialLinks />
    <a
      href={profile.email ? `mailto:${profile.email}` : "mailto:"}
      className="mt-3 flex items-center justify-between gap-3 rounded-[14px] border-[3px] border-[#141822] bg-[#355FC7] px-4 py-3 text-sm font-semibold text-white shadow-[5px_5px_0_#141822] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7] lg:mt-auto"
    >
      Hire Me
      <span className="flex size-7 items-center justify-center rounded-full bg-[#FFDF8F] text-[#141822]"><ArrowRight aria-hidden="true" size={16} /></span>
    </a>
  </aside>
);

export default ProfileBar;
export { ProfileFields };
