import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/Hero";
import Journey from "@/components/journey/Journey";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Journey />
    </main>
  );
}