import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-20 bg-[#1A1F2C] text-white animate-fade-in">
      <div className="container mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src="/lovable-uploads/74f3b0c3-9c34-4644-809a-9ba228f2cb47.png"
            alt="Eudes-Hermann EKOUANDJA"
            className="rounded-full border-4 border-[#0EA5E9] absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-[#0EA5E9]">Eudes-Hermann EKOUANDJA</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Étudiant en BTS SIO passionné par l'administration des systèmes et
          réseaux, à la recherche d'un stage pour mettre en pratique mes
          compétences.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
          <div className="flex items-center gap-2 hover:text-[#0EA5E9] transition-colors">
            <Mail className="w-4 h-4" />
            <span>ekouandjaeudes241@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#0EA5E9] transition-colors">
            <Phone className="w-4 h-4" />
            <span>06 41 03 98 00</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#0EA5E9] transition-colors">
            <MapPin className="w-4 h-4" />
            <span>Châteaulin, France</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#0EA5E9] transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Date de naissance: 26/06/2000</span>
          </div>
        </div>
      </div>
    </header>
  );
};