import { useState } from "react";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "accueil", label: "Accueil" },
  { id: "competences", label: "Compétences" },
  { id: "formations", label: "Formations" },
  { id: "experiences", label: "Expériences" },
  { id: "interets", label: "Centres d'intérêt" },
  { id: "contact", label: "Contact" },
];

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="w-full bg-[#1A1F2C] p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-[#0EA5E9] text-white shadow-lg"
                    : "text-gray-300 hover:text-[#0EA5E9] hover:bg-[#2A2F3C]"
                )}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};