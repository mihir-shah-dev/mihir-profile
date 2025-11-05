import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const AIPortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Portfolio - Mihir Shah | Artificial Intelligence Innovations</title>
        <meta 
          name="description" 
          content="Explore Mihir Shah's AI portfolio showcasing cutting-edge artificial intelligence projects, machine learning solutions, and innovative AI applications." 
        />
        <meta name="keywords" content="Mihir Shah AI, AI portfolio, machine learning, artificial intelligence projects" />
        <meta property="og:title" content="AI Portfolio - Mihir Shah" />
        <meta property="og:description" content="Cutting-edge AI projects and machine learning innovations." />
        <link rel="canonical" href="https://mihirshah.dev/ai-portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <header className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </header>
        
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Explore my journey in artificial intelligence and machine learning innovations.
            </p>
            
            {/* Add your AI portfolio content here */}
            <div className="space-y-8">
              <section className="p-6 border border-border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold mb-4">AI Projects Coming Soon</h2>
                <p className="text-muted-foreground">
                  This section will showcase AI and machine learning projects, innovations, and case studies.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AIPortfolioPage;
