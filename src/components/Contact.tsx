import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" data-section="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Let's Connect
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
              Open to executive leadership opportunities, board positions, consulting engagements, 
              and conversations about scaling trust through responsible AI and exceptional engineering culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <Card className="p-6 bg-card/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-card/20 transition-all">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-accent">
                  <Github className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-primary-foreground">
                  <div className="font-semibold mb-1">GitHub</div>
                  <a href="https://github.com/mihirshah-tech" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    @mihirshah-tech
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-card/20 transition-all">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-accent">
                  <Linkedin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-primary-foreground">
                  <div className="font-semibold mb-1">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/mihir-shah-tech-executive/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    /in/mihir-shah-tech-executive
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-card/20 transition-all">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-accent">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-primary-foreground">
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:connect@mihirshah.dev" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    connect@mihirshah.dev
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
