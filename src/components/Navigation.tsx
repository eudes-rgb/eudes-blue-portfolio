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
  { id: "about", label: "À propos", icon: User },
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
      {/* Profile Section */}
      <div className="text-center mb-10 p-6 bg-gradient-card rounded-2xl border border-border/30">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <img
            src="/lovable-uploads/dbdae958-60f2-4a66-aad1-b6df1a503956.png"
            alt="Eudes Hermann"
            className="rounded-full border-3 border-primary w-full h-full object-cover shadow-glow"
          />
          <div className="absolute -bottom-1 -right-1 bg-card rounded-full p-1">
            <ThemeToggle />
          </div>
        </div>
        <h1 className="text-xl font-bold text-foreground mb-1">Eudes Hermann</h1>
        <p className="text-sm text-muted-foreground font-medium">DEUST Infrastructures Numériques</p>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                if (isMobile) {
                  setIsMenuOpen(false);
                }
              }}
              className={cn(
                "w-full px-4 py-3 rounded-xl flex items-center gap-3 text-left transition-all duration-300 group",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "text-muted-foreground hover:bg-card/80 hover:text-foreground hover:scale-102 hover:shadow-card"
              )}
            >
              <div className={cn(
                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                activeTab === tab.id
                  ? "bg-primary-foreground/20"
                  : "bg-muted/30 group-hover:bg-primary/10"
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </nav>
      
      {/* Contact Info */}
      <div className="mt-auto p-4 bg-card/40 rounded-xl border border-border/30 space-y-3">
        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Contact rapide
        </div>
        <div className="space-y-2 text-sm">
          <a 
            href="mailto:ekouandja-eh@saint-louis29.net" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">ekouandja-eh@saint-louis29.net</span>
          </a>
          <a 
            href="tel:+33641039800" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Terminal className="w-4 h-4 flex-shrink-0" />
            <span>06 41 03 98 00</span>
          </a>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="fixed top-6 left-6 z-50">
          <button
            id="menu-button"
            onClick={toggleMenu}
            className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-xl border border-border/50 
                       flex items-center justify-center text-foreground shadow-card
                       hover:bg-card hover:shadow-glow transition-all duration-300"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <aside
          id="mobile-menu"
          className={cn(
            "fixed left-0 top-0 h-full w-80 glass-morphism-pro p-6 shadow-2xl transition-transform duration-500 z-40",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {navContent}
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-80 glass-morphism-pro p-6 shadow-2xl hidden md:block z-30">
      {navContent}
    </aside>
  );
};