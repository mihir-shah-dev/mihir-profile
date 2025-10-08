import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    stat: "20",
    label: "Years Experience",
    description: "Leading engineering teams at Oracle NetSuite, delivering enterprise-scale SaaS and FinTech solutions"
  },
  {
    icon: Award,
    stat: "1",
    label: "Patent Granted, multiple pending",
    description: "Software Defect Prediction Model—advancing quality and reliability in software engineering"
  },
  {
    icon: TrendingUp,
    stat: "$100M+",
    label: "Revenue Impact",
    description: "By leading forward deployed engineering teams and working directly with partners and platform customers, strengthened partner ecosystems and drove hundreds of millions in new revenue through platform innovation"
  }
];

const expertise = [
  "Responsible AI",
  "Cloud Platforms (PaaS/SaaS)",
  "Developer Experience (DevX)",
  "FinTech & Distributed Systems",
  "Enterprise Security & Compliance",
  "TypeScript & Cohere",
  "NetSuite SuiteCloud",
  "Platform Transformation",
  "Global Team Leadership",
  "Secure SDLC",
  "Performance Engineering",
  "DEI & Culture Building"
];

const Experience = () => {
  return (
    <section data-section="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Impact & Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Directing large, distributed engineering teams with multi-million-dollar budgets—delivering 
            platforms that serve millions while embedding DevX practices across thousands of developers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-accent transition-all duration-300 hover:-translate-y-2 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-accent mb-4">
                <highlight.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="text-4xl font-bold mb-2 text-foreground">
                {highlight.stat}
              </div>
              <div className="text-lg font-semibold mb-3 text-accent">
                {highlight.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {expertise.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
