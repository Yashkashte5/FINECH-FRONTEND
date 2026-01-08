import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IndustrySolutions from "@/components/IndustrySolutions";
import DeveloperTools from "@/components/DeveloperTools";
import EnterpriseSecurity from "@/components/EnterpriseSecurity";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <IndustrySolutions />
        <DeveloperTools />
        <EnterpriseSecurity />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
