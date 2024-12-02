import { Terminal, Github } from "lucide-react";

export const Projects = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9]">Mes Projets</h2>
      
      <div className="grid gap-6">
        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors">
          <div className="flex items-start gap-4">
            <Terminal className="w-6 h-6 text-[#0EA5E9]" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Installation d'Ubuntu</h3>
              <p className="text-gray-300 mb-4">
                Configuration et installation complète d'Ubuntu sur mon PC personnel, 
                incluant la personnalisation de l'environnement de travail et 
                l'installation des outils de développement nécessaires.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Partitionnement du disque dur</p>
                <p>• Configuration du dual boot</p>
                <p>• Installation des paquets essentiels</p>
                <p>• Personnalisation de l'interface utilisateur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};