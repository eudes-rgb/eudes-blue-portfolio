
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const descriptions = [
    "Étudiant en BTS SIO passionné par l'administration des systèmes et réseaux.",
    "À la recherche d'un stage en réseaux informatique pour la période du 26 Mai au 25 Juin 2025.",
    "Spécialiste en solutions informatiques et réseaux d'entreprise.",
    "Passionné par les nouvelles technologies et la cybersécurité."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % descriptions.length);
    }, 3000); // Change de texte toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="py-20 bg-[#1A1F2C] text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-[#0EA5E9] animate-slide-in">
            Eudes-Hermann EKOUANDJA
          </h1>
          <div className="h-24 mb-10 overflow-hidden relative">
            <Carousel 
              className="w-full" 
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {descriptions.map((desc, index) => (
                  <CarouselItem key={index} className={cn(
                    "transition-all duration-1000",
                    currentSlide === index 
                      ? "opacity-100 animate-wave-text" 
                      : "opacity-0 transform translate-y-8"
                  )}>
                    <div className="wave-text-container">
                      {desc.split('').map((char, charIndex) => (
                        <span 
                          key={charIndex}
                          className="inline-block animate-wave-char"
                          style={{ 
                            animationDelay: `${charIndex * 0.05}s`,
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38]">
              <Mail className="w-5 h-5" />
              <span>ekouandjaeudes241@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38]">
              <Phone className="w-5 h-5" />
              <span>06 41 03 98 00</span>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38]">
              <MapPin className="w-5 h-5" />
              <span>Châteaulin, France</span>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors p-3 rounded-lg hover:bg-[#252A38]">
              <Calendar className="w-5 h-5" />
              <span>Date de naissance: 26/05/2000</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
