
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
  
  // Memoize the main background image
  const bgImage = useMemo(() => 
    'https://www.curvature.com/wp-content/uploads/2023/11/dell-poweredge-servers.webp', 
  []);

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
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 will-change-opacity"
          style={{
            backgroundImage: `url("${bgImage}")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/60 to-[#111827]/70 dark:from-slate-900/70 dark:to-slate-950/80 z-10"></div>
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
