
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Formations } from "@/components/Formations";
import { Experiences } from "@/components/Experiences";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeTab, setActiveTab] = useState("accueil");
  
  // Array of background images
  const bgImages = [
    'https://images.unsplash.com/photo-1557683304-673a23048d34', // Clean workspace
    'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a', // Professional setup
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', // Server room with blue lighting
    'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6', // Professional IT environment
    'https://images.unsplash.com/photo-1614624532983-4ce03382d63d', // Network infrastructure
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "accueil":
        return <Header />;
      case "about":
        return <About />;
      case "competences":
        return <Skills />;
      case "formations":
        return <Formations />;
      case "experiences":
        return <Experiences />;
      case "projets":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#1A1F2C] to-[#111827]">
      {/* Multiple Background Images with Overlay */}
      <div className="fixed inset-0 z-0">
        {bgImages.map((img, index) => (
          <div 
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
            style={{
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.3,
              animation: `fadeInOut 25s ${index * 5}s infinite`,
              zIndex: index
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/80 to-[#111827]/90 z-10"></div>
      </div>
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Content */}
      <div className="relative z-10 md:ml-64">
        <main>
          <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="bg-[#111827]/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-[#1E3A8A]/20">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
