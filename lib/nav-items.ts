export type NavItem = {
  label: string;
  href: string;
};

// Dipakai bersama oleh navbar desktop dan menu mobile.
// href "#..." harus sama dengan id setiap <section> di halaman.
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Me", href: "#contact" },
];
