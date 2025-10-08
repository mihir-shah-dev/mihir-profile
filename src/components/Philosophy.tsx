import { Card } from "@/components/ui/card";
import { Heart, Users, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "AI + Human Intelligence",
    description: "Championing Responsible AI where human oversight matters most. Ensuring technology decisions are not only fast and scalable, but also ethical, secure, and customer-centric."
  },
  {
    icon: Shield,
    title: "Scaling Trust",
    description: "The future of technology leadership isn't just about scaling platforms—it's about scaling trust. Building systems that millions rely on while strengthening cybersecurity and compliance posture."
  },
  {
    icon: Users,
    title: "People & Purpose",
    description: "Championing DEI and developing future leaders to scale culture alongside technology. Building high-performing global teams where everyone thrives and grows."
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    description: "Comfortable being uncomfortable. Using AI to amplify work and deliver 10X value. Every obstacle is an opportunity to grow and drive transformative business outcomes."
  }
];

const Philosophy = () => {
  return (
    <section data-section="philosophy" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How I Lead
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thriving at the intersection of technology, people, and purpose—driving business 
            transformation with AI, cloud, and security-first architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card animate-fade-in border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <value.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
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

export default Philosophy;
