import Navbar from "@/components/Navbar";
import StreakBackground from "@/components/StreakBackground";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Cases from "@/components/sections/Cases";
import Results from "@/components/sections/Results";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <StreakBackground />
        <Hero />
        <WhyChooseUs />
        <Services />
        <Cases />
        <Results />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
