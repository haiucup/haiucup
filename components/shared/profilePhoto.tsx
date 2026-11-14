import Image from "next/image";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const ProfilePhoto = ({ className }: { className?: string }) => (
  <div className={cn("relative aspect-square overflow-hidden rounded-2xl border-[3px] border-[#141822] bg-[#FFF0C2]", className)}>
    <Image
      src={profile.photo}
      alt="Yusup Maulana wearing a light blue shirt"
      fill
      sizes="(min-width: 1024px) 288px, (min-width: 640px) 540px, calc(100vw - 80px)"
      className="object-contain object-bottom"
    />
  </div>
);

export { ProfilePhoto };
