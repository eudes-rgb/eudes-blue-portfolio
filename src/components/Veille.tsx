import { Book, Shield, TrendingUp, AlertTriangle, Globe, ExternalLink } from "lucide-react";

const enjeux = [
  {
    icon: Shield,
    titre: "Menaces croissantes",
    texte: "Les attaques contre les infrastructures réseau (ransomware, phishing, DDoS) se multiplient et ciblent aussi bien les entreprises que les institutions.",
  },
  {
    icon: TrendingUp,
    titre: "Nouvelles technologies",
    texte: "La virtualisation, le cloud et l'IPv6 transforment l'administration des réseaux et imposent de nouvelles pratiques de sécurisation.",
  },
  {
    icon: AlertTriangle,
    titre: "Vulnérabilités",
    texte: "Le suivi des bulletins de sécurité (CVE) permet d'anticiper les mises à jour critiques des systèmes et équipements.",
  },
];

const sources = [
  { nom: "ANSSI / CERT-FR", type: "Institutionnel", url: "https://www.cert.ssi.gouv.fr/" },
  { nom: "IT-Connect", type: "Blog tech systèmes & réseaux", url: "https://www.it-connect.fr/" },
  { nom: "Zataz", type: "Actualité cybersécurité", url: "https://www.zataz.com/" },
  { nom: "Le Monde Informatique", type: "Actualité IT", url: "https://www.lemondeinformatique.fr/" },
];

export const Veille = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="card-professional p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <Book className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              La cybersécurité des infrastructures réseau
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dans le cadre de ma formation en DEUST Infrastructures Numériques, je mène une veille
              régulière sur la sécurisation des réseaux et des systèmes d'information : nouvelles
              menaces, failles découvertes, bonnes pratiques d'administration et évolutions des
              technologies réseau. Cette veille me permet d'anticiper les risques et de rester à
              jour sur les outils utilisés en entreprise.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {enjeux.map((enjeu) => (
            <div
              key={enjeu.titre}
              className="p-5 rounded-xl bg-muted/40 border border-border/40 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <enjeu.icon className="w-5 h-5 text-secondary" />
                <h4 className="font-semibold text-foreground">{enjeu.titre}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{enjeu.texte}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-professional p-8">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          Sources suivies
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {sources.map((source) => (
            <a
              key={source.nom}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 p-4 rounded-xl bg-muted/40 border border-border/40
                         hover:border-primary/40 hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div>
                <p className="font-medium text-foreground">{source.nom}</p>
                <p className="text-sm text-muted-foreground">{source.type}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
