
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
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159', // Server rack
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31', // Server room
    'https://images.unsplash.com/photo-1558126357-9a3c53771765', // Network cables
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1', // Laptop with code
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', // Computer setup
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
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 to-black">
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
              opacity: 0.4,
              animation: `fadeInOut 25s ${index * 5}s infinite`,
              zIndex: index
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-black/70 z-10"></div>
      </div>
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Content */}
      <div className="relative z-10 md:ml-64">
        <main>
          <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
