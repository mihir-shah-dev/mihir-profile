import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Patents from "@/components/Patents";
import Education from "@/components/Education";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";
import FloatingVideoIntro from "@/components/FloatingVideoIntro";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Philosophy />
      <Experience />
      <Patents />
      <Projects />
      <Education />
      <Recommendations />
      <AIChat />
      <Contact />
      <FloatingVideoIntro />
    </div>
  );
};

export default Index;
