export const Interets = () => {
  const interets = [
    {
      categorie: "Sports",
      items: ["Football", "Basketball"],
    },
    {
      categorie: "Lecture",
      items: ["Romans", "L'union de la presse nationale"],
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">Centres d'intérêt</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {interets.map((categorie) => (
          <div
            key={categorie.categorie}
            className="bg-secondary/5 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {categorie.categorie}
            </h3>
            <ul className="space-y-2">
              {categorie.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};