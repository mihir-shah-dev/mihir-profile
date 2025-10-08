import { Card } from "@/components/ui/card";
import { Quote, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    name: "Honey Mehra",
    role: "Principle Software Developer",
    company: "Oracle-NetSuite GBU",
    text: "Mihir is one of the most organized and seasoned leaders and an extremely adept technologist, I have ever worked with.Mihir is dedicated to producing quality software that not only meets the expectation of customers, but is also well designed, leading to maintainable code. He also mentored lot of teams in the group and helped them to understand principles of Agile methodology and adopt Scrum. Mihir is truly an exceptional IT leader. Mihir is one of the most ethical and forward-thinking engineering leaders I've worked with. His ability to scale platforms serving millions while maintaining a culture of trust and innovation is exceptional. He doesn't just talk about responsible AI—he embeds it into every decision and empowers his teams to do the same.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leader1"
  },
  {
    name: "Julianne Pohl",
    role: "Principal Technical Writer at Oracle",
    company: "Oracle NetSuite",
    text: "Mihir is a fantastic technical leader! I appreciate his collaborative approach to leading and problem solving. Two recent examples I can think of are our work together on a code samples repository on GitHub for NetSuite developers and our recent product development organization's AI hackathon.  The NetSuite SuiteCloud Samples repository provides a collection of sample projects that demonstrate account customization projects in NetSuite. It helps devlopers learn to use the SuiteCloud Development Framework (SDF) and SuiteScript 2.1 scripts. Mihir served as one of the main advisors during the pre-release phase. He provided his knowledge of coding standards and served as a code reviewer for the samples. His input and guidance on the requirements and direction of the repository helped provide the groundwork for quality samples as it expands. In our recent AI hackathon, developers on our team recruited Mihir to join it. Mihir provided not only technical leadership but creative ideas for presenting our project to the judging team. He inspired our team to go beyond expectations, which resulted in it being considered for the feature roadmap.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Peggy Duvette",
    role: "Vice President, Social Impact & Engagement at Oracle NetSuite - 2024 Women of Influence Silicon Valley Business JournalVice President, Social Impact & Engagement at Oracle NetSuite - 2024 Women of Influence Silicon Valley Business Journal.",
    company: "Oracle",
    text: "I had the great fortune to collaborate with Mihir in our Diversity & Inclusion effort at NetSuite and can testify that Mihir is a natural leader who cares of promoting the greater good. He brings people together and fosters an environment where people feel comfortable and connected. That speaks to his character and his ability to effectively communicate. He is constantly raising the bar for himself and inspires others to step outside of their comfort zone. Mihir's diverse background shines through our meeting and we all benefitted and learned from his personal insights and stories.! I would highly recommend Mihir Shah.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager3"
  },
  {
    name: "Manavi Sharma",
    role: "TE",
    company: "Google",
    text: "Mihir was my direct Manager at Oracle for 5 years. Whether I talk about interpersonal skills, leadership, technical or analytical skills, he has it all. He managed multiple engineering teams simultaneously, addressing diverse technical and non-technical challenges with excellence. He’s both technically hands-on and a strong manager, adept at switching hats as needed. I’ve seen him resolve conflicts smartly and patiently. His motivational leadership and guidance in goal-setting helped SDETs grow technically and professionally. Empathetic, encouraging, and a great listener—working with Mihir was always a pleasure. I highly recommend him and wish him the best in his career growth.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Bec Vaughan",
    role: "Chief of Staff & Director International Product",
    company: "Oracle NetSuite",
    text: "Mihir is a wonderful person to work with—dedicated, passionate, articulate, organized, and responsible. We collaborated on diversity, equity, and inclusion initiatives at NetSuite, where he focused on building community and support for employees through mentorship programs, ERG advocacy, and events. His empathy and hands-on attitude made real change happen. He championed psychological safety by sharing his leadership story and fostering trust. Mihir’s thoughtful, mature approach brought teams together. I’d gladly work with him again and recommend him wholeheartedly.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Palaniappan M",
    role: "Software Architect, Team Lead",
    company: "Oracle NetSuite",
    text: "Working with Mihir in the NetSuite core platform team was a great experience. His leadership helps you foresee and tackle blockers effectively. He introduced creative initiatives like bug bashes to promote cross-team collaboration. Mihir encourages open discussion of challenges and fosters problem-solving. Quarterly goals under his leadership led to consistent growth and learning. He promotes autonomy and shares workload with enthusiasm. Anyone managed by Mihir is truly fortunate.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Peter Saadieh",
    role: "Senior Technical Recruiter",
    company: "Oracle",
    text: "Mihir is friendly, passionate, and detail-oriented, leading by example. I had the pleasure of working with him for five years. He emphasizes quality hires, enabling autonomy that drives productivity. Always smiling and approachable, Mihir makes working with him an enjoyable experience.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Sandhya Nalamachu",
    role: "Team Lead, Enterprise Applications",
    company: "Roku",
    text: "Mihir is one of those rare managers who naturally inspires and mentors the entire team. He motivates his team to care deeply about their work and perform at their best. When I joined the platform team, his exceptional support stood out. He’s approachable, both technically and personally, and invests in the growth of his team members. I strongly recommend him as a manager.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Chieh-Ting Yeh",
    role: "Director of Engineering - AI",
    company: "Oracle",
    text: "Being managed by Mihir in the platform team was a delight. He effectively drives innovation and provides clear direction for both short- and long-term goals. As a new graduate, I benefited from his patience, mentorship, and willingness to invest time in my growth. Mihir’s support and guidance taught me valuable lessons in both technology and life. I highly recommend him to anyone considering joining his team.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Vu Trieu, CSM",
    role: "Sr Change & Release Manager / Project Manager",
    company: "Fisher Investments",
    text: "Mihir is dedicated, thoughtful, and dependable. He delivers results with minimal guidance and collaborates well with everyone. His great personality and professionalism make him a valuable team member.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Mohan Pindyala",
    role: "VP of Software Engineering",
    company: "Imprint",
    text: "I strongly recommend Mihir for an applications developer role. He is skilled in ASP.NET, HTML, C#, and JavaScript, consistently completing tasks on time. Above all, he’s a team player.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  },
  {
    name: "Jigar Sheth",
    role: "Agile Program Delivery Leader",
    company: "",
    text: "Mihir and I trained together as Trainee Software Engineers learning .NET. He is multi-talented, sincere, and dedicated, with a strong ability to learn quickly and master new concepts. A pleasure to work with.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director2"
  }
];

const Recommendations = () => {
  return (
    <section data-section="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-accent/10 rounded-full">
            <Linkedin className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Professional Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Voices from Industry Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Colleagues, partners, and team members share their experiences working with Mihir
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {recommendations.map((rec, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 bg-card relative animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm flex-1">
                  "{rec.text}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={rec.image} 
                    alt={rec.name}
                    className="w-10 h-10 rounded-full bg-muted"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground text-sm">
                      {rec.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {rec.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {rec.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            className="group"
            onClick={() => window.open('https://www.linkedin.com/in/mihir-shah-tech-executive/', '_blank')}
          >
            <Linkedin className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            View Full LinkedIn Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
