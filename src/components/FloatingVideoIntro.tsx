import { useState, useRef, useEffect } from "react";
import { Play, Pause, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Video mapping for each section
const sectionVideos: Record<string, { src: string; title: string }> = {
  hero: {
    src: "/videos/hero-intro.mp4",
    title: "Introduction",
  },
  philosophy: {
    src: "/videos/philosophy-intro.mp4",
    title: "My Philosophy",
  },
  experience: {
    src: "/videos/experience-intro.mp4",
    title: "Experience Overview",
  },
  patents: {
    src: "/videos/patents-intro.mp4",
    title: "Patents & Innovation",
  },
  projects: {
    src: "/videos/projects-intro.mp4",
    title: "Notable Projects",
  },
  education: {
    src: "/videos/education-intro.mp4",
    title: "Education Background",
  },
  recommendations: {
    src: "/videos/recommendations-intro.mp4",
    title: "Recommendations",
  },
  chat: {
    src: "/videos/chat-intro.mp4",
    title: "AI Chat",
  },
  contact: {
    src: "/videos/contact-intro.mp4",
    title: "Get In Touch",
  },
};

const FloatingVideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState<string>("hero");
  const videoRef = useRef<HTMLVideoElement>(null);
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
              // Pause video when section changes
              if (videoRef.current && isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
              }
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
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
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
          <video
            ref={videoRef}
            key={currentSection} // Force reload when section changes
            className={`w-full ${isExpanded ? "h-[calc(100vh-8rem)]" : "aspect-video"}`}
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
              onClick={togglePlay}
            >
              <Button
                size="icon"
                className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          )}

          {/* Controls Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-white hover:text-white hover:bg-white/20"
                onClick={togglePlay}
              >
                <Pause className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Caption */}
        {!isMobile && (
          <div className="p-3 bg-muted/30 text-sm text-muted-foreground">
            Click to play — Video changes as you scroll through sections
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingVideoIntro;
