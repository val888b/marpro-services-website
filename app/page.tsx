import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Stats } from "@/components/Stats";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { Services } from "@/components/Services";
import { ProblemsWeSolve } from "@/components/ProblemsWeSolve";
import { WhyMarPro } from "@/components/WhyMarPro";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Stats />
        <WhoWeHelp />
        <Services />
        <ProblemsWeSolve />
        <WhyMarPro />
        <Process />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
