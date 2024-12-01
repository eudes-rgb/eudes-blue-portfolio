import { Book, Trophy } from "lucide-react";

export const Interets = () => {
  const interets = [
    {
      categorie: "Sports",
      icon: <Trophy className="w-8 h-8" />,
      items: ["Football", "Basketball"],
    },
    {
      categorie: "Lecture",
      icon: <Book className="w-8 h-8" />,
      items: ["Romans", "L'union de la presse nationale"],
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#0EA5E9]">Centres d'intérêt</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {interets.map((categorie) => (
          <div
            key={categorie.categorie}
            className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0EA5E9]">{categorie.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {categorie.categorie}
              </h3>
            </div>
            <ul className="space-y-3">
              {categorie.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#0EA5E9] transition-colors"
                >
                  <span className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
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