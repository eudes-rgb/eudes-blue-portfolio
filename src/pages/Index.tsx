
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Formations } from "@/components/Formations";
import { Experiences } from "@/components/Experiences";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { BackgroundCarousel } from "@/components/BackgroundCarousel";
import { Copyright } from "lucide-react";

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
      {/* Background Carousel */}
      <BackgroundCarousel />
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Content */}
      <div className="relative z-10 md:ml-64 flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="container mx-auto py-4 px-4 md:py-8 md:px-8">
            <div className="bg-[#111827]/60 dark:bg-slate-950/60 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-[#1E3A8A]/20 dark:border-blue-900/20">
              {renderContent()}
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 py-4 px-6 text-center text-white/80 mt-4 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2">
            <Copyright className="w-4 h-4" />
            <span>2025, eudeshermann, Tous droits réservés</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
