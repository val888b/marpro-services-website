import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { PressureWashing } from "@/components/PressureWashing";
import { WhyMarPro } from "@/components/WhyMarPro";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <PressureWashing />
        <WhyMarPro />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
