import { User, GraduationCap, MapPin, Target } from "lucide-react";

export const About = () => {
  const atouts = [
    "Sens du contact, autonomie, esprit d'équipe",
    "Bonne capacité d'adaptation, envie d'apprendre"
  ];

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
                Étudiant en DEUST Infrastructures Numériques à l'Université de Lille, je recherche un stage de 6 semaines (mai–juin 2026) en administration systèmes et réseaux afin de mettre en pratique mes compétences.
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
                Actuellement en DEUST Infrastructures Numériques à l'Université de Lille (Cité Scientifique), 
                je me spécialise dans l'installation, l'administration et la maintenance de réseaux cuivre et fibre optique.
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
                5 Chemin des Vieux Arbres, Villeneuve-d'Ascq (59650), France
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors">
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-[#0EA5E9]" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Atouts</h3>
              <ul className="text-gray-300 space-y-2">
                {atouts.map((atout, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
                    {atout}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
