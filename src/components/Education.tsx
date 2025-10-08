import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const education = [
  {
    institution: "Stanford University",
    degree: "Advanced Computer Security",
    field: "Computer Science",
    years: "2016-2018",
    type: "Certificate"
  },
  {
    institution: "San José State University",
    degree: "Master of Science",
    field: "Software Engineering",
    years: "2006-2008",
    type: "Graduate"
  },
  {
    institution: "Gujarat University",
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    years: "2001-2005",
    type: "Undergraduate"
  }
];

const certifications = [
  "NetSuite Certified SuiteCloud Developer",
  "Machine Learning (Coursera)",
  "OCP Database Administrator",
  "Artificial Intelligence and Business Strategy",
  "Introduction to Generative AI with GPT",
  "Psychological Safety: Clear Blocks to Innovation, Collaboration, and Risk-Taking"
];

const leadership = [
  {
    icon: Users,
    role: "Founder & Co-chair",
    organization: "ODAN Technology Special Interest Group",
    period: "2022-2025",
    description: "Leading technical guidelines for building accessible and user-friendly solutions across Oracle teams"
  },
  {
    icon: Award,
    role: "Board Member",
    organization: "ODAN ERG (Oracle Diverse Ability Network)",
    period: "2020-2024",
    description: "Diversity ambassador empowering employees with visible and invisible disabilities"
  }
];

const Education = () => {
  return (
    <section data-section="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning from Stanford
          </p>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-accent" />
            Academic Background
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-md transition-all bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-accent font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.field} • {edu.years}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {edu.type}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-4 bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Roles */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            DEI & Community Leadership
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((role, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all bg-card animate-fade-in border-l-4 border-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      {role.role}
                    </h4>
                    <p className="text-accent text-sm font-medium mb-1">
                      {role.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {role.period}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
