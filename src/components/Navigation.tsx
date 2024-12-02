import { useState } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Book, Mail, Terminal } from "lucide-react";

type Tab = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const tabs: Tab[] = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "about", label: "À propos de moi", icon: User },
  { id: "competences", label: "Compétences", icon: Book },
  { id: "projets", label: "Projets", icon: Terminal },
  { id: "contact", label: "Contact", icon: Mail },
];

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-[#1A1F2C] p-6 shadow-xl">
      <div className="mb-8">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src="/lovable-uploads/74f3b0c3-9c34-4644-809a-9ba228f2cb47.png"
            alt="Marin Cadro"
            className="rounded-full border-4 border-[#0EA5E9] w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mb-2">Marin Cadro</h1>
        <p className="text-gray-400 text-center text-sm">Étudiant en BTS SIO</p>
      </div>
      
      <ul className="space-y-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-[#0EA5E9] text-white"
                    : "text-gray-400 hover:bg-[#2A2F3C] hover:text-[#0EA5E9]"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
        
        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="text-gray-400 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              ekouandja-eh@saint-louis29.net
            </p>
            <p className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              06 41 03 98 00
            </p>
          </div>
        </div>
    </nav>
  );
};