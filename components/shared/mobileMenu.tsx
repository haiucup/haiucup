"use client";

import { useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="flex items-center justify-between gap-3">
        {children}
        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-[#141822] bg-[#FFDF8F] shadow-[3px_3px_0_#141822] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#355FC7]"
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} className="mt-4 border-t border-[#DDE2EF] pt-3">
        <ul className="flex flex-col gap-1">
          <li>
            <a href="#home" aria-current="page" onClick={() => setIsOpen(false)} className="flex rounded-lg bg-[#E4ECFF] px-3 py-3 text-sm font-semibold text-[#355FC7] focus-visible:outline-2 focus-visible:outline-[#355FC7]">Home</a>
          </li>
          {["About Me", "Experience", "Portfolio", "Contact Me"].map((menu) => (
            <li key={menu}>
              {menu === "Contact Me" ? (
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-[#EEF1FA] focus-visible:outline-2 focus-visible:outline-[#355FC7]"
                >
                  {menu}
                </a>
              ) : (
                <button type="button" disabled title={`${menu} — coming soon`} className="w-full cursor-not-allowed rounded-lg px-3 py-3 text-left text-sm font-medium text-[#6A7186]">{menu}</button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { MobileMenu };
