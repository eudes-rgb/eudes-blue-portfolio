import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

const Index = () => {
  const [activeTab, setActiveTab] = useState("accueil");

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
      default:
        return <Header />;
    }
  };

  return (
    <div className="min-h-screen bg-[#222632]">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="ml-64 min-h-screen">
        <div className="container mx-auto py-8 px-8 text-white">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;