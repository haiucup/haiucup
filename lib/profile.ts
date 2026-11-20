// Satu sumber konten untuk sidebar, tampilan mobile, dan setiap section.
export const profile = {
  name: "Yusup Maulana",
  role: "Software Engineer",
  email: "yusupp11maulana@gmail.com",
  photo: "/images/yusup-maulana.png",
  introduction:
    "Software Engineer with 6+ years of experience building banking services, reliable APIs, and full-stack web applications.",
  specialization: "Backend & Full-stack Engineer",
  about:
    "I'm a Surabaya-based Software Engineer working across microservices and monolithic systems. I contribute to QRIS payments, SNAP-compliant Open APIs, and mobile banking services. Beyond banking, I build learning and personal finance platforms with NestJS and Next.js.",
  details: [
    { label: "Specialization", value: "Web & API Engineering" },
    {
      label: "Core Stack",
      value: "Spring Boot · Golang · NestJS · Laravel\nNext.js · PostgreSQL · Kubernetes",
    },
    { label: "Experience", value: "6+ years" },
    { label: "Location", value: "Surabaya, Indonesia" },
    { label: "Focus", value: "Backend & full-stack" },
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yusupmaulana/" },
    { name: "GitHub", url: "https://github.com/haiucup" },
    { name: "X", url: "https://x.com/haiucup" },
    { name: "Instagram", url: "https://www.instagram.com/haiucup" },
  ],
  highlights: [
    {
      value: "6+",
      title: "Years of experience",
      note: "Banking, web platforms & APIs",
    },
    {
      value: "3.77",
      title: "Information Systems GPA",
      note: "ITATS · Graduated in 2024",
    },
    {
      value: "2020",
      title: "Community since",
      note: "Surabaya Dev · Admin & Logistics",
    },
  ],
  experiences: [
    {
      id: "dsi",
      role: "Software Engineer",
      period: "May 2024 — Present",
      company: "PT Dwidasa Samsara Indonesia",
      summary:
        "Contribute to QRIS payment services, SNAP-compliant Open APIs, and mobile banking platforms. Contracted through PT Primavisi Globalindo.",
      stack: ["Spring Boot", "Golang", "Kafka"],
    },
    {
      id: "eduvanta",
      role: "Freelance Software Engineer",
      period: "Oct 2026 — Present",
      company: "Eduvanta",
      summary:
        "Build APIs for web and mobile plus a Next.js dashboard for books, student balances, and tryouts. Migrated Laravel to NestJS and Vue to Next.js.",
      stack: ["NestJS", "Next.js", "PostgreSQL"],
    },
    {
      id: "karyo-dev",
      role: "Software Engineer",
      period: "Oct 2020 — Jan 2023",
      company: "Karyo Dev · Freelance Tech Team",
      summary:
        "Delivered client systems for point of sale, supply chain management, and business operations, from requirements through implementation.",
      stack: ["CodeIgniter 3", "jQuery", "Bootstrap"],
    },
    {
      id: "surabaya-dev",
      role: "Admin & Logistics Lead",
      period: "2020 — Present",
      company: "Surabaya Dev",
      summary:
        "Coordinate community merchandise and event logistics. Led a 2026 roadshow and volunteered at developer events across East Java.",
      stack: ["Community", "Event Operations"],
    },
  ],
  projects: [
    {
      id: "dompis",
      title: "Dompis",
      description:
        "Personal finance app with wallets and pockets. MVP in development; dashboard uses sample data.",
      stack: "Next.js · NestJS · PostgreSQL",
    },
    {
      id: "eduvanta",
      title: "Eduvanta",
      description:
        "Learning platform with digital books, student balances, and tryouts with automatic scoring.",
      stack: "Next.js · NestJS · TypeScript",
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      description:
        "A personal website showcasing my background, technical skills, selected projects, and experience.",
      stack: "Next.js · Tailwind CSS · Vercel",
    },
    {
      id: "lab-practicum",
      title: "Lab Practicum System",
      description:
        "Thesis project for practicum registration, schedules, lab assistant assignments, and assessments.",
      stack: "CodeIgniter 4 · MySQL · Bootstrap",
    },
  ],
};
