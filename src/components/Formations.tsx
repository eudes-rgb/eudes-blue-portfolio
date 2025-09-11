import { GraduationCap } from "lucide-react";

export const Formations = () => {
  const formations = [
    {
      periode: "2024 - Présent",
      diplome: "DEUST Infrastructures Numériques",
      etablissement: "Campus Cité Scientifique",
      details: "Formation en cours",
    },
    {
      periode: "2022 - 2024",
      diplome: "Licence2 Monétique et Sécurité des Systèmes",
      etablissement: "École Communautaire de Monétique d'Afrique Centrale",
      lieu: "Libreville",
    },
    {
      periode: "2021 - 2022",
      diplome: "Baccalauréat",
      etablissement: "Lycée Privé Awassi",
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#0EA5E9]">Formations</h2>
      <div className="grid gap-6">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-all duration-300 hover:bg-[#1A1F2C]/80 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <div className="text-[#0EA5E9] mt-1">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#0EA5E9] transition-colors">
                    {formation.diplome}
                  </h3>
                  <span className="text-gray-400">{formation.periode}</span>
                </div>
                <p className="text-gray-300">{formation.etablissement}</p>
                {formation.lieu && (
                  <p className="text-gray-400 text-sm mt-1">{formation.lieu}</p>
                )}
                {formation.details && (
                  <p className="text-gray-400 mt-2">{formation.details}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};