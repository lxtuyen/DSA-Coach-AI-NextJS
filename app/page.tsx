import LandingLayout from "./components/layout/landing/LandingLayout";
import HeroSection from "./components/hero/HeroSection";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import FAQSection from "./components/sections/FAQ";

export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQSection />
    </LandingLayout>
  );
}
