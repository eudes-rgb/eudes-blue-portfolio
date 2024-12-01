import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Développement",
    items: ["JavaScript", "TypeScript", "React", "Node.js", "Python"],
  },
  {
    category: "Système et Réseaux",
    items: ["Linux", "Windows Server", "Cisco", "VMware", "Docker"],
  },
  {
    category: "Langues",
    items: ["Français (natif)", "Anglais (professionnel)", "Espagnol (basique)"],
  },
  {
    category: "Outils collaboratifs",
    items: ["Git", "Jira", "Confluence", "Slack", "Microsoft Teams"],
  },
];

export const Skills = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div
            key={category.category}
            className="bg-secondary/5 p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};