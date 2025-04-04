
import { Briefcase } from "lucide-react";

export const Experiences = () => {
  const experiences = [
    {
      poste: "Agent d'entretien",
      entreprise: "Self de la Gendarmerie de Châteaulin",
      periode: "Janvier 2025 (3 week-ends)",
      responsabilites: [
        "Maintien de conditions d'hygiène impeccables dans un cadre institutionnel",
        "Démonstration de ponctualité, rigueur et sens du service",
        "Travail dans un environnement organisé et strict",
      ],
    },
    {
      poste: "Opérateur-Fermeture de Bouchons",
      entreprise: "Sobraga Gabon",
      periode: "Mars 2021 - Avril 2022",
      responsabilites: [
        "Travail en équipe sur la chaîne de production",
        "Contrôle qualité des bouchons",
        "Maintenance préventive des équipements",
      ],
    },
    {
      poste: "Chef de projets",
      entreprise: "Association des élèves du lycée",
      periode: "Février 2021 - Avril 2021",
      responsabilites: [
        "Planification et coordination des activités",
        "Gestion des initiatives étudiantes",
        "Organisation d'événements",
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#0EA5E9]">
        Expériences Professionnelles
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-[#0EA5E9]">
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.poste}
                  </h3>
                  <span className="text-gray-400">{experience.periode}</span>
                </div>
                <p className="text-lg text-gray-300 mb-4">{experience.entreprise}</p>
                <ul className="space-y-2">
                  {experience.responsabilites.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
