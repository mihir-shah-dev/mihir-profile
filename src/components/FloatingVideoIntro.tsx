import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Video mapping for each section - using YouTube video IDs
const sectionVideos: Record<string, { videoId: string; title: string }> = {
  hero: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Introduction",
  },
  philosophy: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "My Philosophy",
  },
  experience: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Experience Overview",
  },
  patents: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Patents & Innovation",
  },
  projects: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Notable Projects",
  },
  education: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Education Background",
  },
  recommendations: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Recommendations",
  },
  chat: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "AI Chat",
  },
  contact: {
    videoId: "d82t8zYJamc", // Replace with your actual YouTube video ID
    title: "Get In Touch",
  },
};

const FloatingVideoIntro = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState<string>("hero");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();

  // Detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId && sectionVideos[sectionId]) {
              setCurrentSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentVideo = sectionVideos[currentSection];

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isExpanded
          ? isMobile ? "inset-2" : "inset-4 md:inset-8"
          : isMobile ? "bottom-2 right-2 w-48" : "bottom-4 right-4 w-80 md:w-96"
      }`}
    >
      <div className="relative bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
          <div className="flex-1 min-w-0">
            <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-foreground truncate block`}>
              {currentVideo.title}
            </span>
            {!isMobile && (
              <span className="block text-xs text-muted-foreground mt-0.5">
                Section: {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
              </span>
            )}
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={isMobile ? "h-6 w-6" : "h-7 w-7"}
              onClick={toggleExpand}
            >
              {isExpanded ? (
                <Minimize2 className={isMobile ? "h-3 w-3" : "h-4 w-4"} />
              ) : (
                <Maximize2 className={isMobile ? "h-3 w-3" : "h-4 w-4"} />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={isMobile ? "h-6 w-6" : "h-7 w-7"}
              onClick={handleClose}
            >
              <X className={isMobile ? "h-3 w-3" : "h-4 w-4"} />
            </Button>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative bg-black">
          <iframe
            ref={iframeRef}
            key={currentSection}
            className={`w-full ${isExpanded ? "h-[calc(100vh-8rem)]" : "aspect-video"}`}
            src={`https://www.youtube.com/embed/${currentVideo.videoId}?rel=0&modestbranding=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Caption */}
        {!isMobile && (
          <div className="p-3 bg-muted/30 text-sm text-muted-foreground">
            Video changes as you scroll through sections
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingVideoIntro;
