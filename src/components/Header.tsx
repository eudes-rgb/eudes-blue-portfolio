
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useEffect, useState, useCallback, memo } from "react";

export const Header = memo(() => {
  const descriptions = [
    "Étudiant en BTS SIO passionné par l'administration des systèmes et réseaux.",
    "À la recherche d'un stage en réseaux informatique pour la période du 26 Mai au 25 Juin 2025.",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const welcomeText = "Bienvenue sur mon portfolio";

  // Optimize the typing effect using useCallback
  const animateText = useCallback(() => {
    if (currentIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + welcomeText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38] backdrop-blur-sm">
        <Mail className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm sm:text-base truncate">ekouandjaeudes241@gmail.com</span>
      </div>
      <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38] backdrop-blur-sm">
        <Phone className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm sm:text-base">06 41 03 98 00</span>
      </div>
      <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38] backdrop-blur-sm">
        <MapPin className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm sm:text-base">Villeneuve-d'Ascq, France</span>
      </div>
      <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38] backdrop-blur-sm">
        <Calendar className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm sm:text-base">Date de naissance: 26/05/2000</span>
      </div>
    </div>
  ));

  return (
    <header className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-[#111827]/70 to-[#1A1F2C]/50 text-white rounded-lg animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 sm:mb-6 h-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#0EA5E9] tracking-wide will-change-transform">
              {displayText}
              <span className="cursor-blink">|</span>
            </h2>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0EA5E9] animate-slide-in will-change-transform">
            Eudes-Hermann EKOUANDJA
          </h1>
          <div className="mb-8 sm:mb-10">
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              {descriptions.map((desc, index) => (
                <p key={index} className="tracking-wide letter-spacing-wide">{desc}</p>
              ))}
            </div>
          </div>
          <ContactInfo />
        </div>
      </div>
    </header>
  );
});
