import { Helmet } from "react-helmet-async";
import Patents from "@/components/Patents";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const PatentsPage = () => {
  return (
    <>
      <Helmet>
        <title>Patents & Innovations - Mihir Shah | AI/ML Research</title>
        <meta 
          name="description" 
          content="Discover Mihir Shah's patent portfolio in AI, machine learning, and innovative technologies. Contributing to advancing technology through research and development." 
        />
        <meta name="keywords" content="Mihir Shah patents, AI patents, machine learning innovations, technology research" />
        <meta property="og:title" content="Patents & Innovations - Mihir Shah" />
        <meta property="og:description" content="Patent portfolio showcasing innovations in AI and machine learning technologies." />
        <link rel="canonical" href="https://mihirshah.dev/patents" />
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
        
        <Patents />
      </div>
    </>
  );
};

export default PatentsPage;
