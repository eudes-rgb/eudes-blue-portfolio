
import { Terminal, FileText, Linkedin, Instagram, Facebook, ShieldCheck, Network, Cable, Laptop } from "lucide-react";
import { Button } from "./ui/button";
import vpnPdf from "@/assets/portfolio-serveur-vpn-debian13.pdf.asset.json";

export const Projects = () => {
  const projects = [
    {
      title: "Serveur VPN sur Debian 13",
      description: "Mise en place d'un VPN sécurisé avec authentification centralisée LDAP, dans le cadre de ma première année de DEUST Infrastructures Numériques (Université de Lille)",
      details: [
        "Serveur VPN OpenVPN avec support IPv4 / IPv6",
        "Authentification centralisée LDAP / Active Directory",
        "Chiffrement fort AES-256-GCM et PKI SSL/TLS",
        "Haute disponibilité avec double IP publique et failover"
      ],
      pdfUrl: vpnPdf.url,
      icon: ShieldCheck
    },
    {
      title: "Configuration des VLANs",
      description: "Documentation technique sur la création et la configuration des VLANs pour segmenter un réseau",
      details: [
        "Création et gestion des VLANs",
        "Configuration des ports de switch",
        "Segmentation du trafic réseau",
        "Documentation des bonnes pratiques"
      ],
      pdfUrl: "https://www.canva.com/design/DAG66ngB390/A-HepelHEd6s6nr9MlOEVA/view",
      icon: Network
    },
    {
      title: "Câblage de l'infrastructure",
      description: "Documentation technique sur le câblage d'une infrastructure réseau",
      details: [
        "Connexion physique et numérique au switch",
        "Configuration des équipements réseau",
        "Installation et raccordement des câbles",
        "Documentation des procédures de câblage"
      ],
      pdfUrl: "https://www.canva.com/design/DAG663SktvI/XLa3K6nShwNxSVsV70PZoQ/view",
      icon: Cable
    },
    {
      title: "Installation d'Ubuntu",
      description: "Configuration et installation complète d'Ubuntu sur mon PC personnel",
      details: [
        "Partitionnement du disque dur",
        "Configuration du dual boot",
        "Installation des paquets essentiels",
        "Personnalisation de l'interface utilisateur"
      ],
      pdfUrl: "https://gamma.app/docs/Installation-dUbuntu-sur-VirtualBox-q3zhivgfaggua7d",
      icon: Laptop
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/eudes-hermann-ekouandja-94a796338"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ekouandja_hermann/profilecard/?igsh=enl6YmlmMm9pcHIw"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/your-profile"
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-professional p-6 hover-lift flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <project.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{project.title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              {project.details.map((detail, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {detail}
                </p>
              ))}
            </div>
            <Button
              variant="outline"
              className="mt-auto flex items-center gap-2 border-primary/40 text-primary hover:bg-primary/10"
              onClick={() => window.open(project.pdfUrl, '_blank')}
            >
              <FileText className="w-4 h-4" />
              Voir la documentation
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Retrouvez-moi sur les réseaux</h3>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-3 bg-card rounded-xl border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import { Cable as _Cable } from "lucide-react";
