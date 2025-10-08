import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Oracle NetSuite SuiteCloud Platform",
    description: "Leading global engineering teams delivering secure, scalable SaaS platforms. Cloud transformation initiatives supporting millions of global users with enhanced security and DevX frameworks. Product area I manged: SuiteScript, SDF, SuiteApp Marketplace, Developer Tools, Record Architecture, and NetSuite APM. ",
    tags: ["SaaS/PaaS", "TypeScript", "Cloud", "DevX"],
    link: "https://www.netsuite.com/portal/platform/developer.shtml"
  },
  {
    title: "Developer Experience (DevX) Frameworks",
    description: "Built reusable components and standardized practices that accelerate innovation and improve productivity across thousands of engineers in the NetSuite ecosystem.",
    tags: ["DevX", "Platform Engineering", "Tooling", "Productivity"],
    link: "#"
  },
  {
    title: "Enterprise Security & Vulnerability Management",
    description: "Strengthened cybersecurity and compliance posture through proactive governance, vulnerability management, and alignment with enterprise security standards. Reduced enterprise risk exposure.",
    tags: ["Security", "Compliance", "Risk Management", "Governance"],
    link: "#"
  },
  {
    title: "SuiteScript APIs & Record Architecture",
    description: "Led development of core SuiteCloud platform capabilities including SuiteScript APIs, SuiteFlow, SuiteBuilder, CSV bulk import, and enterprise-grade Web Services (SOAP/REST) integrations.",
    tags: ["APIs", "Platform", "Integration", "FinTech"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" data-section="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Key Projects & Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading transformative engineering initiatives in cloud platforms, DevX, and enterprise security at Oracle NetSuite
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                </div>
                <a 
                  href={project.link}
                  className="text-muted-foreground hover:text-accent transition-colors shrink-0"
                  aria-label="Learn more"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
