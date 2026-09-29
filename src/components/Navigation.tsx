
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Book, Mail, Terminal, Menu, X, GraduationCap, Briefcase, Rss } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import cvAsset from "@/assets/CV_EUDES_HERMANN3.pdf.asset.json";

type Tab = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const tabs: Tab[] = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "about", label: "À propos", icon: User },
  { id: "competences", label: "Compétences", icon: Book },
  { id: "projets", label: "Projets", icon: Terminal },
  { id: "experiences", label: "Expériences", icon: Briefcase },
  { id: "formations", label: "Formation", icon: GraduationCap },
  { id: "veille", label: "Veille Techno", icon: Rss },
  { id: "contact", label: "Contact", icon: Mail },
];

interface NavigationProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Navigation = ({ isOpen = true, onToggle }: NavigationProps) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("accueil");

  // Scrollspy : détecte la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

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

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navContent = (
    <div className="flex flex-col h-full min-h-0">
      {/* Profile Section */}
      <div className="text-center mb-4 p-4 bg-gradient-card rounded-2xl border border-border/40 flex-shrink-0">
        <div className="relative w-20 h-20 mx-auto mb-3">
          <img
            src="/lovable-uploads/dbdae958-60f2-4a66-aad1-b6df1a503956.png"
            alt="Eudes Hermann"
            className="rounded-full border-2 border-primary w-full h-full object-cover shadow-glow"
          />
        </div>
        <h1 className="text-xl font-bold text-foreground mb-1">Eudes Hermann</h1>
        <p className="text-sm text-muted-foreground font-medium">DEUST Infrastructures Numériques</p>
      </div>

      {/* Bouton CV */}
      <button
        onClick={() => window.open(cvAsset.url, "_blank", "noopener,noreferrer")}
        className="w-full mb-4 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium
                   flex items-center justify-center gap-2 shadow-elegant hover:shadow-glow
                   hover:scale-[1.02] transition-all duration-300"
      >
        <FileText className="w-4 h-4" />
        Télécharger CV
      </button>

      {/* Navigation Menu */}
      <nav className="flex-1 min-h-0 overflow-y-auto space-y-1.5 px-2 -mx-1 pr-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className={cn(
                "w-full px-3 py-2.5 rounded-xl flex items-center gap-3 text-left transition-all duration-300 group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              )}
            >
              <div className={cn(
                "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300",
                isActive
                  ? "bg-primary-foreground/20"
                  : "bg-muted/50 group-hover:bg-primary/15"
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{tab.label}</span>
              {isActive && (
                <span className="ml-auto w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Contact Info */}
      <div className="mt-3 flex-shrink-0 p-3 bg-muted/40 rounded-xl border border-border/40 space-y-2">
        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Contact rapide
        </div>
        <div className="space-y-2 text-sm">
          <a
            href="mailto:eudes-hermann.ekouandja.etu@univ-lille.fr"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">eudes-hermann.ekouandja.etu@univ-lille.fr</span>
          </a>
          <a
            href="tel:+33641039800"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
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
            className="w-12 h-12 rounded-xl bg-card/90 backdrop-blur-xl border border-border/60
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
            "fixed left-0 top-0 h-full w-[85vw] max-w-xs bg-card/95 backdrop-blur-2xl p-4 pt-20 shadow-2xl transition-transform duration-500 z-40 overflow-hidden",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {navContent}
        </aside>
      </>
    );
  }

  return (
    <>
      {/* Bouton puce pour afficher/masquer le menu */}
      <button
        onClick={onToggle}
        aria-label={isOpen ? "Masquer le menu" : "Afficher le menu"}
        className={cn(
          "hidden md:flex fixed top-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground",
          "items-center justify-center shadow-elegant border border-primary/30",
          "hover:scale-110 transition-all duration-300",
          isOpen ? "left-[19.5rem]" : "left-6"
        )}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-80 bg-card/95 backdrop-blur-2xl border-r border-border/40 p-5 shadow-2xl hidden md:block z-30 overflow-hidden",
          "transition-transform duration-500",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navContent}
      </aside>
    </>
  );
};

import { FileText, Phone } from "lucide-react";
