import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section data-section="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Technology background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-accent/20 text-accent-foreground border border-accent/30 rounded-full backdrop-blur-sm">
              Engineering Executive | Innovator in AI & FinTech
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
              Mihir Shah
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary-foreground/90 leading-tight">
              Scaling Trust Through
              <span className="block bg-gradient-accent bg-clip-text text-transparent mt-2">
                Responsible AI & Human Intelligence
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto font-light">
              Nearly two decades of engineering leadership driving secure, AI-powered platforms 
              serving <span className="font-semibold">millions of users worldwide</span>. 
              Fueling <span className="font-semibold">hundreds of millions in ecosystem revenue</span> 
                 &nbsp;while championing ethical technology and exceptional teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Link to="/ai-portfolio">
              <Button 
                variant="hero" 
                size="lg"
              >
                View My AI Portfolio
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center mt-12 animate-fade-in">
            <a 
              href="https://github.com/mihirshah-tech" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mihir-shah-tech-executive/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:connect@mihirshah.dev" 
              className="text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
