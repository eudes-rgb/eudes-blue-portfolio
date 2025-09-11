import { User, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9]">À propos de moi</h2>
      
      <div className="grid gap-6">
        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors">
          <div className="flex items-start gap-4">
            <User className="w-6 h-6 text-[#0EA5E9]" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Qui suis-je ?</h3>
              <p className="text-gray-300">
                Je suis un étudiant passionné par l'informatique, particulièrement intéressé par l'administration système et le développement.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-[#0EA5E9]" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Formation</h3>
              <p className="text-gray-300">
                Actuellement en DEUST Infrastructures Numériques au campus Cité Scientifique, 
                je me spécialise dans l'administration des infrastructures et la sécurité des réseaux.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#0EA5E9]" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Localisation</h3>
              <p className="text-gray-300">
                Basé à Villeneuve-d'Ascq, France
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};