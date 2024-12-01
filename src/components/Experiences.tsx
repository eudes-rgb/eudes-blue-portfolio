export const Experiences = () => {
  const experiences = [
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
      <h2 className="text-3xl font-bold mb-8 text-center">
        Expériences Professionnelles
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-secondary/5 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">
                {experience.poste}
              </h3>
              <span className="text-gray-600">{experience.periode}</span>
            </div>
            <p className="text-lg text-gray-700 mb-4">{experience.entreprise}</p>
            <ul className="list-disc list-inside space-y-2">
              {experience.responsabilites.map((resp, idx) => (
                <li key={idx} className="text-gray-700">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};