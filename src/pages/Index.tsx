import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Formations } from "@/components/Formations";
import { Experiences } from "@/components/Experiences";
import { Interets } from "@/components/Interets";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [activeTab, setActiveTab] = useState("accueil");

  const renderContent = () => {
    switch (activeTab) {
      case "competences":
        return <Skills />;
      case "formations":
        return <Formations />;
      case "experiences":
        return <Experiences />;
      case "interets":
        return <Interets />;
      case "contact":
        return <Contact />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto py-8 px-4">{renderContent()}</main>
    </div>
  );
};

export default Index;