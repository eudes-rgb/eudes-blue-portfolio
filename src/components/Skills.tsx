import { cn } from "@/lib/utils";
import { Code, Monitor, Database, Shield, Laptop, Languages } from "lucide-react";

const skills = [
  {
    category: "Langages de programmation",
    icon: <Code className="w-8 h-8" />,
    items: ["PHP", "Python", "Javascript", "C#"],
  },
  {
    category: "Langages Web",
    icon: <Monitor className="w-8 h-8" />,
    items: ["HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Logiciels",
    icon: <Laptop className="w-8 h-8" />,
    items: ["VS Code", "Packet Tracer", "VirtualBox"],
  },
  {
    category: "Système",
    icon: <Database className="w-8 h-8" />,
    items: ["Windows", "Linux"],
  },
  {
    category: "Cybersécurité",
    icon: <Shield className="w-8 h-8" />,
    items: ["PIA", "RGPD", "ANSSI", "CNIL"],
  },
  {
    category: "Langues",
    icon: <Languages className="w-8 h-8" />,
    items: ["Français", "Anglais"],
  },
];

export const Skills = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#0EA5E9]">Compétences</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div
            key={category.category}
            className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0EA5E9]">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {category.category}
              </h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#0EA5E9] transition-colors"
                >
                  <span className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
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