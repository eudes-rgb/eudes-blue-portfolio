export const Formations = () => {
  const formations = [
    {
      periode: "2024 - Présent",
      diplome: "BTS SIO (Service Informatique aux Organisations)",
      etablissement: "Saint-Louis de Châteaulin",
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
      <h2 className="text-3xl font-bold mb-8 text-center">Formations</h2>
      <div className="space-y-6">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="bg-secondary/5 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-semibold text-primary">
                {formation.diplome}
              </h3>
              <span className="text-gray-600">{formation.periode}</span>
            </div>
            <p className="text-gray-700">{formation.etablissement}</p>
            {formation.lieu && (
              <p className="text-gray-600 text-sm">{formation.lieu}</p>
            )}
            {formation.details && (
              <p className="text-gray-600 mt-2">{formation.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};