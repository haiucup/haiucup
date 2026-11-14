import { ProfileIdentity } from "@/components/shared/brandLogo";
import { MobileMenu } from "@/components/shared/mobileMenu";

const menus = ["Home", "About Me", "Experience", "Portfolio", "Contact Me"];
const links: Record<string, string> = {
  Home: "#home",
  "About Me": "#about",
  "Contact Me": "#contact",
};

const Navbar = () => (
  <header className="flex min-w-0 flex-col gap-4 rounded-[18px] border-[3px] border-[#141822] bg-white p-3.5 shadow-[5px_5px_0_#141822] lg:px-5 lg:py-3">
    <MobileMenu><ProfileIdentity /></MobileMenu>
    <nav aria-label="Main navigation" className="hidden lg:block">
      <ul className="flex flex-wrap items-center gap-1.5 lg:justify-center lg:gap-2">
        {menus.map((menu) => (
          <li key={menu}>
            {links[menu] ? (
              <a
                href={links[menu]}
                aria-current={menu === "Home" ? "page" : undefined}
                className={`inline-flex rounded-[10px] border-2 px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355FC7] lg:px-5 lg:text-sm ${menu === "Home" ? "border-[#141822] bg-[#355FC7] text-white" : "border-transparent hover:bg-[#EEF1FA]"}`}
              >{menu}</a>
            ) : (
              <button type="button" disabled title={`${menu} — coming soon`} className="inline-flex cursor-not-allowed rounded-[10px] border-2 border-transparent px-3 py-2 text-xs font-medium text-[#6A7186] lg:px-5 lg:text-sm">{menu}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export { Navbar };
