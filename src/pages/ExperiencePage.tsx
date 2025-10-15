import { Helmet } from "react-helmet-async";
import Experience from "@/components/Experience";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  return (
    <>
      <Helmet>
        <title>Professional Experience - Mihir Shah | Microsoft, Cisco, Intel</title>
        <meta 
          name="description" 
          content="Explore Mihir Shah's professional experience across Microsoft, Cisco, Intel, and more. 15+ years in AI/ML, product management, and technical leadership." 
        />
        <meta name="keywords" content="Mihir Shah experience, Microsoft, Cisco, Intel, AI product manager, ML engineering" />
        <meta property="og:title" content="Professional Experience - Mihir Shah" />
        <meta property="og:description" content="15+ years of experience in AI/ML and product management at leading tech companies." />
        <link rel="canonical" href="https://mihirshah.dev/experience" />
      </Helmet>
      
      <div className="min-h-screen">
        <header className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </header>
        
        <Experience />
      </div>
    </>
  );
};

export default ExperiencePage;
