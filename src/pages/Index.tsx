
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import WorkSection from "@/components/WorkSection";
import ResumeSection from "@/components/ResumeSection";
import ResearchSection from "@/components/ResearchSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <WorkSection />
        <ResearchSection />
        <ResumeSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
