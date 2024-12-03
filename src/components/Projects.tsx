import { Terminal, FileText, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Installation d'Ubuntu",
      description: "Configuration et installation complète d'Ubuntu sur mon PC personnel",
      details: [
        "Partitionnement du disque dur",
        "Configuration du dual boot",
        "Installation des paquets essentiels",
        "Personnalisation de l'interface utilisateur"
      ],
      pdfUrl: "/path-to-your-pdf/ubuntu-installation.pdf" // Replace with actual PDF path
    }
    // Add more projects here
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/your-profile" // Replace with your Instagram URL
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/your-profile" // Replace with your Facebook URL
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9]">Mes Projets</h2>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors">
            <div className="flex items-start gap-4">
              <Terminal className="w-6 h-6 text-[#0EA5E9]" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  {project.details.map((detail, idx) => (
                    <p key={idx}>• {detail}</p>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-[#0EA5E9]/20 hover:bg-[#0EA5E9]/10"
                  onClick={() => window.open(project.pdfUrl, '_blank')}
                >
                  <FileText className="w-4 h-4" />
                  Voir le PDF
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Retrouvez-moi sur les réseaux</h3>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1A1F2C] rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-colors"
              >
                <Icon className="w-6 h-6 text-[#0EA5E9]" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};