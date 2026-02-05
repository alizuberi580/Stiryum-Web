import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { homePage } from "../constants/data";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import Faq from "../components/sections/Faq";
import HowItWorks from "../components/sections/HowItWorks";

const page = () => {
  return (
    <div className="scroll-smooth bg-background">
      {/* Home Section */}
      <section id="home">
        <HeroSection
          heading={homePage.hero.heading}
          description={homePage.hero.description}
          textCycle={homePage.hero.changingText}
        />
      </section>

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </div>
  );
};

export default page;
