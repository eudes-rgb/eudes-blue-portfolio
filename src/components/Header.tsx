import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-20 bg-secondary text-white animate-fade-in">
      <div className="container mx-auto text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Eudes-Hermann EKOUANDJA"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary"
        />
        <h1 className="text-4xl font-bold mb-4">Eudes-Hermann EKOUANDJA</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Étudiant en BTS SIO passionné par l'administration des systèmes et
          réseaux, à la recherche d'un stage pour mettre en pratique mes
          compétences.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>contact@eudes-hermann.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+33 6 XX XX XX XX</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Châteaulin, France</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Date de naissance: XX/XX/XXXX</span>
          </div>
        </div>
      </div>
    </header>
  );
};