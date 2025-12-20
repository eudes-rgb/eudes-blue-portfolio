
import { cn } from "@/lib/utils";
import { 
  Code, Monitor, Database, Shield, Laptop, Languages, 
  FileCode, Cpu, GalleryVerticalEnd, BookOpen, Settings, GitBranch,
  Network, Lock, Smartphone, Workflow, Server, Layers, Terminal, Wifi
} from "lucide-react";

const skills = [
  {
    category: "Réseaux & Infrastructure",
    icon: <Network className="w-8 h-8" />,
    items: [
      { name: "VLAN, routage inter-VLAN", icon: <Network className="w-4 h-4" /> },
      { name: "DHCP, DNS, NAT", icon: <Server className="w-4 h-4" /> },
      { name: "Conception d'adressage IP", icon: <Workflow className="w-4 h-4" /> },
      { name: "Wi-Fi, câblage cuivre & fibre", icon: <Wifi className="w-4 h-4" /> },
    ],
  },
  {
    category: "Administration Système",
    icon: <Server className="w-8 h-8" />,
    items: [
      { name: "Windows Server (AD DS, DNS, DHCP)", icon: <Monitor className="w-4 h-4" /> },
      { name: "Dépannage postes informatiques", icon: <Laptop className="w-4 h-4" /> },
      { name: "Installation Windows", icon: <Settings className="w-4 h-4" /> },
      { name: "Sécurisation des environnements", icon: <Shield className="w-4 h-4" /> },
    ],
  },
  {
    category: "Outils & Logiciels",
    icon: <Laptop className="w-8 h-8" />,
    items: [
      { name: "Cisco Packet Tracer", icon: <Network className="w-4 h-4" /> },
      { name: "VirtualBox", icon: <Server className="w-4 h-4" /> },
      { name: "PuTTY", icon: <Terminal className="w-4 h-4" /> },
      { name: "VS Code", icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    category: "Langages de programmation",
    icon: <Code className="w-8 h-8" />,
    items: [
      { name: "PHP", icon: <FileCode className="w-4 h-4" /> },
      { name: "Python", icon: <FileCode className="w-4 h-4" /> },
      { name: "Javascript", icon: <FileCode className="w-4 h-4" /> },
      { name: "C#", icon: <FileCode className="w-4 h-4" /> },
    ],
  },
  {
    category: "Langages Web",
    icon: <Monitor className="w-8 h-8" />,
    items: [
      { name: "HTML", icon: <GalleryVerticalEnd className="w-4 h-4" /> },
      { name: "CSS", icon: <Cpu className="w-4 h-4" /> },
      { name: "Bootstrap", icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    category: "Monétique & Sécurité",
    icon: <Shield className="w-8 h-8" />,
    items: [
      { name: "Systèmes de paiement", icon: <Database className="w-4 h-4" /> },
      { name: "Sécurité des transactions", icon: <Lock className="w-4 h-4" /> },
      { name: "Conformité RGPD / CNIL", icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    category: "Système",
    icon: <Database className="w-8 h-8" />,
    items: [
      { name: "Windows", icon: <Laptop className="w-4 h-4" /> },
      { name: "Linux", icon: <Settings className="w-4 h-4" /> },
    ],
  },
  {
    category: "Langues",
    icon: <Languages className="w-8 h-8" />,
    items: [
      { name: "Français (courant)", icon: <Languages className="w-4 h-4" /> },
      { name: "Anglais (débutant)", icon: <Languages className="w-4 h-4" /> },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#0EA5E9] dark:text-blue-400">Compétences</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skills.map((category) => (
          <div
            key={category.category}
            className="bg-[#1A1F2C] dark:bg-slate-900 p-6 rounded-lg border border-[#0EA5E9]/20 dark:border-blue-500/20 hover:border-[#0EA5E9] dark:hover:border-blue-400 transition-colors duration-300 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0EA5E9] dark:text-blue-400">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {category.category}
              </h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#0EA5E9] dark:hover:text-blue-400 transition-colors"
                >
                  <div className="text-[#0EA5E9] dark:text-blue-400">{skill.icon}</div>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
