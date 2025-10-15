import { Helmet } from "react-helmet-async";
import AIChat from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <>
      <Helmet>
        <title>Chat with Mihir Shah's AI Avatar | AI-Powered Conversation</title>
        <meta 
          name="description" 
          content="Engage in an intelligent conversation with Mihir Shah's AI avatar. Get insights about his experience in AI/ML, product management, patents, and professional journey at Microsoft, Cisco, and Intel." 
        />
        <meta name="keywords" content="AI chatbot, AI avatar, Mihir Shah, machine learning, product management, AI conversation" />
        <meta property="og:title" content="Chat with Mihir Shah's AI Avatar" />
        <meta property="og:description" content="Interactive AI-powered conversation about AI/ML expertise, product management, and professional experience." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mihirshah.dev/chat" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <header className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </header>
        
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Chat with My AI Avatar
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a conversation powered by AI. Ask about my experience in AI/ML, 
              product management, patents, or any aspect of my professional journey.
            </p>
          </div>
          
          <AIChat />
        </main>
      </div>
    </>
  );
};

export default ChatPage;
