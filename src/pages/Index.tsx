import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Formations } from "@/components/Formations";
import { Experiences } from "@/components/Experiences";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeTab, setActiveTab] = useState("accueil");
  const isMobile = useIsMobile();

  const renderContent = () => {
    switch (activeTab) {
      case "competences":
        return <Skills />;
      case "about":
        return <About />;
      case "projets":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "formations":
        return <Formations />;
      case "experiences":
        return <Experiences />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0f172a]">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main 
          className={cn(
            "min-h-screen transition-all duration-300 backdrop-blur-sm bg-black/30",
            isMobile ? "ml-0 pt-16" : "ml-64"
          )}
        >
          <div className="container mx-auto py-8 px-4 md:px-8 text-white">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;