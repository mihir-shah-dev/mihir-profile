import { Helmet } from "react-helmet-async";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Mihir Shah | AI/ML Solutions & Innovations</title>
        <meta 
          name="description" 
          content="Explore Mihir Shah's portfolio of AI and machine learning projects, showcasing innovative solutions and real-world applications." 
        />
        <meta name="keywords" content="Mihir Shah projects, AI projects, ML solutions, technology portfolio" />
        <meta property="og:title" content="Projects - Mihir Shah" />
        <meta property="og:description" content="Portfolio of AI/ML projects and innovative technology solutions." />
        <link rel="canonical" href="https://mihirshah.dev/projects" />
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
        
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;
