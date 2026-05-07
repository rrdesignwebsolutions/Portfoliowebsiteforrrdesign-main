import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedCase } from "./components/FeaturedCase";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 cursor-none">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <div id="sobre">
        <About />
      </div>
      <FeaturedCase />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="servicos">
        <Services />
      </div>
      <Testimonials />
      <div id="contato">
        <CTA />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}