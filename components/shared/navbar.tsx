"use client";

import { useSyncExternalStore } from "react";
import { ProfileIdentity } from "@/components/shared/brandLogo";
import { MobileMenu } from "@/components/shared/mobileMenu";
import { navItems } from "@/lib/nav-items";

let lastNavigationWasHash = true;

const subscribeToNavigation = (notify: () => void) => {
  const handleChange = (event: Event) => {
    if (event.type !== "scroll") {
      const anchor = event.type === "click" && event.target instanceof Element && event.target.closest('a[href^="#"]');
      lastNavigationWasHash = event.type === "hashchange" || Boolean(anchor);
    }
    notify();
  };
  const events = ["hashchange", "scroll", "resize", "wheel", "touchmove", "keydown", "pointerdown", "click"];
  events.forEach((event) => window.addEventListener(event, handleChange, { passive: true }));
  return () => events.forEach((event) => window.removeEventListener(event, handleChange));
};

const getActiveHref = () => {
  if (lastNavigationWasHash && window.location.hash) return window.location.hash;
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) return "#contact";
  const navbarBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  const marker = Math.max(navbarBottom + 32, window.innerHeight * 0.35);
  return [...navItems].reverse().find(({ href }) => {
    const section = document.querySelector(href);
    return section && section.getBoundingClientRect().top <= marker;
  })?.href || "#home";
};

const Navbar = () => {
  const activeHref = useSyncExternalStore(
    subscribeToNavigation,
    getActiveHref,
    () => "#home",
  );

  return (
  <header className="flex min-w-0 flex-col gap-4 rounded-[18px] border-[3px] border-[#141822] bg-white p-3.5 shadow-[5px_5px_0_#141822] lg:min-h-[70px] lg:justify-center lg:bg-[#E4ECFF] lg:px-3 lg:py-2.5">
    <MobileMenu><ProfileIdentity /></MobileMenu>
    <nav aria-label="Main navigation" className="hidden lg:block">
      <ul className="flex flex-wrap items-center gap-1.5 lg:justify-end lg:gap-1.5">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              aria-current={href === activeHref ? "location" : undefined}
              className={`inline-flex min-h-11 items-center rounded-[10px] border-2 px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355FC7] lg:px-4 lg:text-[13px] ${href === activeHref ? "border-[#141822] bg-[#FFDF8F] shadow-[3px_3px_0_#141822]" : "border-transparent hover:bg-white"}`}
            >{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
};

export { Navbar };
