
import {
  Code, Monitor, Database, Shield, Laptop, Languages,
  FileCode, Cpu, GalleryVerticalEnd, BookOpen, Settings,
  Network, Lock, Server, Terminal, Wifi
} from "lucide-react";

const skills = [
  {
    category: "Réseaux & Infrastructure",
    icon: <Network className="w-8 h-8" />,
    items: [
      { name: "Conception et optimisation de réseaux LAN/WAN", icon: <Network className="w-4 h-4" /> },
      { name: "VLAN, routage inter-VLAN, NAT, sous-réseautage IPv4", icon: <Network className="w-4 h-4" /> },
      { name: "Administration switchs et routeurs Cisco", icon: <Server className="w-4 h-4" /> },
      { name: "DHCP, DNS", icon: <Server className="w-4 h-4" /> },
      { name: "Bases fibre optique et réseaux télécom", icon: <Wifi className="w-4 h-4" /> },
      { name: "Wi-Fi, câblage cuivre & fibre", icon: <Wifi className="w-4 h-4" /> },
    ],
  },
  {
    category: "Administration Système",
    icon: <Server className="w-8 h-8" />,
    items: [
      { name: "Administration Active Directory : utilisateurs, groupes, GPO", icon: <Monitor className="w-4 h-4" /> },
      { name: "Mise en place DNS, DHCP et partages réseau", icon: <Server className="w-4 h-4" /> },
      { name: "Installation et maintenance systèmes et équipements IT", icon: <Laptop className="w-4 h-4" /> },
      { name: "Sécurisation des environnements", icon: <Shield className="w-4 h-4" /> },
    ],
  },
  {
    category: "Outils & Logiciels",
    icon: <Laptop className="w-8 h-8" />,
    items: [
      { name: "Cisco Packet Tracer", icon: <Network className="w-4 h-4" /> },
      { name: "VirtualBox / VMware (notions Hyper-V)", icon: <Server className="w-4 h-4" /> },
      { name: "PuTTY / Minicom", icon: <Terminal className="w-4 h-4" /> },
      { name: "VS Code", icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    category: "Langages de programmation",
    icon: <Code className="w-8 h-8" />,
    items: [
      { name: "Python", icon: <FileCode className="w-4 h-4" /> },
      { name: "Bash", icon: <FileCode className="w-4 h-4" /> },
      { name: "C", icon: <FileCode className="w-4 h-4" /> },
      { name: "PHP", icon: <FileCode className="w-4 h-4" /> },
      { name: "SQL", icon: <FileCode className="w-4 h-4" /> },
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="card-professional p-6 hover-lift"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-tight">
                {category.category}
              </h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="mt-0.5 text-secondary">{skill.icon}</div>
                  <span className="text-sm leading-snug">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
