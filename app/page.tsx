import { Navbar } from "@/components/shared/navbar";
import ProfileBar from "@/components/shared/profileBar";

const Home = () => {
  return (
    // Mobile/tablet: 1 kolom, item tersusun sesuai urutan DOM (nav → profile → content).
    // lg ke atas: 2 kolom x 2 baris, tiap item ditempatkan manual via col-start/row-start.
    <main className="grid min-h-screen grid-cols-1 content-start gap-3 p-6 lg:h-screen lg:grid-cols-[340px_1fr] lg:grid-rows-[auto_1fr]">
      {/* <nav className="rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow lg:col-start-2 lg:row-start-1">
        Navbar
      </nav> */}
      <Navbar />

      {/* Kolom kiri di desktop: span 2 baris supaya setinggi navbar + content */}
      <ProfileBar className="lg:col-start-1 lg:row-span-2 lg:row-start-1" />

      <section className="rounded-base border-2 border-border bg-secondary-background p-8 shadow-shadow lg:col-start-2 lg:row-start-2 lg:min-h-0 lg:overflow-y-auto">
        Content
      </section>
    </main>
  );
};

export default Home;
