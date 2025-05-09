import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Book, Mail, Terminal, Menu, X, GraduationCap, Briefcase } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "./ThemeToggle";

type Tab = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const tabs: Tab[] = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "about", label: "À propos de moi", icon: User },
  { id: "competences", label: "Compétences", icon: Book },
  { id: "formations", label: "Formations", icon: GraduationCap },
  { id: "experiences", label: "Expériences", icon: Briefcase },
  { id: "projets", label: "Projets", icon: Terminal },
  { id: "contact", label: "Contact", icon: Mail },
];

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");
      
      if (menu && !menu.contains(event.target as Node) && 
          menuButton && !menuButton.contains(event.target as Node) && 
          isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navContent = (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
          <img
            src="/lovable-uploads/dbdae958-60f2-4a66-aad1-b6df1a503956.png"
            alt="Eudes Hermann"
            className="rounded-full border-4 border-[#0EA5E9] dark:border-blue-400 w-full h-full object-cover"
          />
          <div className="absolute -bottom-2 -right-2">
            <ThemeToggle />
          </div>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-white text-center mb-2">Eudes Hermann</h1>
        <p className="text-gray-400 text-center text-sm">Étudiant en BTS SIO</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => {
                    onTabChange(tab.id);
                    if (isMobile) {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-[#0EA5E9] dark:bg-blue-500 text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-[#0EA5E9] dark:hover:text-blue-400"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="mt-auto pt-4 space-y-4">
        <div className="text-gray-400 text-sm space-y-2">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">ekouandja-eh@saint-louis29.net</span>
          </p>
          <p className="flex items-center gap-2">
            <Terminal className="w-4 h-4 flex-shrink-0" />
            <span>06 41 03 98 00</span>
          </p>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="fixed top-4 left-4 z-50">
          <button
            id="menu-button"
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-black/60 backdrop-blur-lg text-white border border-blue-500/30 shadow-md shadow-blue-500/20"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <aside
          id="mobile-menu"
          className={cn(
            "fixed left-0 top-0 h-full w-72 bg-black/80 backdrop-blur-lg p-6 shadow-xl transition-transform duration-300 z-40",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {navContent}
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-black/50 backdrop-blur-lg p-6 shadow-xl hidden md:block">
      {navContent}
    </aside>
  );
}
