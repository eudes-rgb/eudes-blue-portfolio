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
    <nav className="w-full bg-secondary p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-gray-300 hover:text-white hover:bg-primary/80"
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