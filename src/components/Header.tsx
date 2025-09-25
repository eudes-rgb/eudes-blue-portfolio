
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useEffect, useState, useCallback, memo } from "react";

export const Header = memo(() => {
  const descriptions = [
    "Étudiant en DEUST Infrastructures Numériques passionné par l'administration des systèmes et réseaux.",
    "À la recherche d'opportunités professionnelles pour développer mes compétences techniques.",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const welcomeText = "Bienvenue sur mon portfolio professionnel";

  // Optimize the typing effect using useCallback
  const animateText = useCallback(() => {
    if (currentIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + welcomeText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      
      return timeout;
    }
    return undefined;
  }, [currentIndex, welcomeText]);

  useEffect(() => {
    const timeout = animateText();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [animateText]);

  // Memoize the contact information section
  const ContactInfo = memo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        { icon: Mail, text: "ekouandjaeudes241@gmail.com", href: "mailto:ekouandjaeudes241@gmail.com" },
        { icon: Phone, text: "06 41 03 98 00", href: "tel:+33641039800" },
        { icon: MapPin, text: "Villeneuve-d'Ascq, France" },
        { icon: Calendar, text: "Né le 26 mai 2000" }
      ].map((item, index) => (
        <div key={index} className="group">
          {item.href ? (
            <a 
              href={item.href} 
              className="flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/50 
                         transition-all duration-300 hover:bg-card hover:border-primary/50 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 
                              flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-card-foreground font-medium">{item.text}</span>
            </a>
          ) : (
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/50 
                            transition-all duration-300 hover:bg-card hover:border-primary/50">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 
                              flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-card-foreground font-medium">{item.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  ));

  return (
    <header className="text-center space-y-12 animate-fade-in">
      {/* Welcome Message */}
      <div className="space-y-6">
        <div className="h-12 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground tracking-wide">
            {displayText}
            <span className="cursor-blink text-primary">|</span>
          </h2>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient animate-slide-up">
          Eudes-Hermann
          <br />
          EKOUANDJA
        </h1>
        
        {/* Descriptions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {descriptions.map((desc, index) => (
            <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              {desc}
            </p>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="animate-scale-in">
        <h3 className="text-xl font-semibold text-foreground mb-8">Informations de contact</h3>
        <ContactInfo />
      </div>

      {/* Call to Action */}
      <div className="pt-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-professional text-primary-foreground 
                        rounded-xl font-semibold text-lg shadow-glow hover:shadow-elegant hover:scale-105 
                        transition-all duration-300 cursor-pointer">
          <span>Découvrir mon parcours</span>
        </div>
      </div>
    </header>
  );
});
