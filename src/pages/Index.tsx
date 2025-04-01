
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Formations } from "@/components/Formations";
import { Experiences } from "@/components/Experiences";
import { Navigation } from "@/components/Navigation";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

// Use a constant for the tab values for better maintainability
const TABS = {
  ACCUEIL: "accueil",
  ABOUT: "about",
  COMPETENCES: "competences",
  FORMATIONS: "formations",
  EXPERIENCES: "experiences",
  PROJETS: "projets",
  CONTACT: "contact"
};

const Index = () => {
  const [activeTab, setActiveTab] = useState(TABS.ACCUEIL);
  
  // Memoize the background images to prevent unnecessary recalculations
  const bgImages = useMemo(() => [
    'https://images.unsplash.com/photo-1557683304-673a23048d34', // Clean workspace
    'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a', // Professional setup
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', // Server room with blue lighting
  ], []);

  // Optimize rendering by memoizing the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case TABS.ACCUEIL:
        return <Header />;
      case TABS.ABOUT:
        return <About />;
      case TABS.COMPETENCES:
        return <Skills />;
      case TABS.FORMATIONS:
        return <Formations />;
      case TABS.EXPERIENCES:
        return <Experiences />;
      case TABS.PROJETS:
        return <Projects />;
      case TABS.CONTACT:
        return <Contact />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#1A1F2C] to-[#111827] dark:from-slate-900 dark:to-slate-950">
      {/* Optimized Background Images with Overlay - reduced number of images */}
      <div className="fixed inset-0 z-0">
        {bgImages.map((img, index) => (
          <div 
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 will-change-opacity"
            style={{
              backgroundImage: `url("${img}?auto=compress&q=60")`, // Compressed images for faster loading
              animation: `fadeInOut 25s ${index * 5}s infinite`,
              zIndex: index
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/80 to-[#111827]/90 dark:from-slate-900/90 dark:to-slate-950/95 z-10"></div>
      </div>
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Content */}
      <div className="relative z-10 md:ml-64">
        <main>
          <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="bg-[#111827]/60 dark:bg-slate-950/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-[#1E3A8A]/20 dark:border-blue-900/20">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
