import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ChatPage from "./pages/ChatPage";
import ExperiencePage from "./pages/ExperiencePage";
import PatentsPage from "./pages/PatentsPage";
import AIPortfolioPage from "./pages/AIPortfolioPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const basename = import.meta.env.PROD ? import.meta.env.BASE_URL : "/";
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={basename}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/patents" element={<PatentsPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
