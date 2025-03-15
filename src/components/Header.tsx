
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export const Header = () => {
  const descriptions = [
    "Étudiant en BTS SIO passionné par l'administration des systèmes et réseaux.",
    "À la recherche d'un stage en réseaux informatique pour la période du 26 Mai au 25 Juin 2025.",
    "Spécialiste en solutions informatiques et réseaux d'entreprise.",
    "Passionné par les nouvelles technologies et la cybersécurité."
  ];

  return (
    <header className="py-20 bg-[#1A1F2C] text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-[#0EA5E9] animate-slide-in">
            Eudes-Hermann EKOUANDJA
          </h1>
          <div className="mb-10">
            <div className="space-y-4 text-xl text-gray-300 leading-relaxed">
              {descriptions.map((desc, index) => (
                <p key={index} className="tracking-wide">{desc}</p>
              ))}
            </div>
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
