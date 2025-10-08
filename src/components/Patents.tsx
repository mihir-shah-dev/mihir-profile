import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Award, ExternalLink } from "lucide-react";

const patents = [
  {
    title: "Software Defect Prediction Model",
    number: "US Patent",
    year: "Granted",
    description: "Innovative machine learning approach to predict software defects before they occur, improving code quality and reducing downstream issues. Combines static analysis with AI-powered prediction to enhance software reliability and accelerate development cycles.",
    status: "Granted",
    link: "#"
  }
];

const Patents = () => {
  return (
    <section data-section="patents" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-accent/10 rounded-full">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Innovation & Patents</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Patents & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing software engineering through AI-powered quality and reliability innovations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {patents.map((patent, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 bg-card animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex p-4 rounded-lg bg-accent/10 text-accent shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                        {patent.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="font-mono">{patent.number}</span>
                        <span>•</span>
                        <span>{patent.year}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          patent.status === 'Granted' 
                            ? 'bg-accent/20 text-accent' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {patent.status}
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {patent.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
