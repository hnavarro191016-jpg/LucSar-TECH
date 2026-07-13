import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import TrustBarSection from '@/components/home/TrustBarSection';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ERPSection from '@/components/home/ERPSection';
import AISection from '@/components/home/AISection';
import MethodologySection from '@/components/home/MethodologySection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import SuccessCasesSection from '@/components/home/SuccessCasesSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ERPSection />
      <AISection />
      <MethodologySection />
      <TechnologiesSection />
      <SuccessCasesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
