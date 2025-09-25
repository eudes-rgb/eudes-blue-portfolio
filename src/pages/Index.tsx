
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
    <div className="min-h-screen relative bg-gradient-hero">
      {/* Background Carousel */}
      <BackgroundCarousel />
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Content */}
      <div className="relative z-10 md:ml-80 flex flex-col min-h-screen">
        <main className="flex-grow section-padding">
          <div className="container-professional">
            <div className="glass-card p-8 lg:p-12 animate-fade-in">
              {renderContent()}
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 py-6 text-center text-muted-foreground border-t border-border/20 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Copyright className="w-4 h-4" />
            <span>2025 Eudes-Hermann EKOUANDJA. Tous droits réservés.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
