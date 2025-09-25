
import { Briefcase, Calendar, MapPin, CheckCircle, Users, Target } from "lucide-react";

export const Experiences = () => {
  const experiences = [
    {
      poste: "Stagiaire - Administration Réseau",
      entreprise: "Juvénat de Châteaulin",
      periode: "26 mai - 25 juin 2024",
      lieu: "Châteaulin, France",
      type: "Stage professionnel",
      responsabilites: [
        "État du réseau existant",
        "Réalisation d'un schéma du réseau filaire et Wi-Fi",
        "Inventaire des matériels utilisés",
        "Recensement des appareils connectés",
        "Analyse des dysfonctionnements",
        "Propositions d'améliorations et suggestions",
      ],
      competences: ["Administration réseau", "Diagnostic technique", "Documentation"],
      couleur: "primary"
    },
    {
      poste: "Agent d'entretien",
      entreprise: "Self de la Gendarmerie de Châteaulin",
      periode: "Janvier 2025 (3 week-ends)",
      lieu: "Châteaulin, France",
      type: "Emploi temporaire",
      responsabilites: [
        "Maintien de conditions d'hygiène impeccables dans un cadre institutionnel",
        "Démonstration de ponctualité, rigueur et sens du service",
        "Travail dans un environnement organisé et strict",
      ],
      competences: ["Rigueur", "Sens du service", "Respect des protocoles"],
      couleur: "secondary"
    },
    {
      poste: "Opérateur-Fermeture de Bouchons",
      entreprise: "Sobraga Gabon",
      periode: "Mars 2021 - Avril 2022",
      lieu: "Gabon",
      type: "Emploi industriel",
      responsabilites: [
        "Travail en équipe sur la chaîne de production",
        "Contrôle qualité des bouchons",
        "Maintenance préventive des équipements",
      ],
      competences: ["Travail en équipe", "Contrôle qualité", "Production industrielle"],
      couleur: "accent"
    },
    {
      poste: "Chef de projets",
      entreprise: "Association des élèves du lycée",
      periode: "Février 2021 - Avril 2021",
      lieu: "Gabon",
      type: "Responsabilité associative",
      responsabilites: [
        "Planification et coordination des activités",
        "Gestion des initiatives étudiantes",
        "Organisation d'événements",
      ],
      competences: ["Leadership", "Gestion de projet", "Organisation"],
      couleur: "primary"
    },
  ];

  const getIconColor = (couleur: string) => {
    switch (couleur) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-blue-400';
      case 'accent': return 'text-emerald-400';
      default: return 'text-primary';
    }
  };

  const getBgColor = (couleur: string) => {
    switch (couleur) {
      case 'primary': return 'bg-primary/10 border-primary/20';
      case 'secondary': return 'bg-blue-400/10 border-blue-400/20';
      case 'accent': return 'bg-emerald-400/10 border-emerald-400/20';
      default: return 'bg-primary/10 border-primary/20';
    }
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="section-heading">Expériences Professionnelles</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Mon parcours professionnel et les compétences développées à travers diverses expériences
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="card-professional p-8 hover-lift animate-slide-up group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left column - Icon and metadata */}
              <div className="flex-shrink-0 lg:w-64">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center 
                                   ${getBgColor(experience.couleur)} group-hover:scale-110 
                                   transition-all duration-500`}>
                      <Briefcase className={`w-8 h-8 ${getIconColor(experience.couleur)}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{experience.periode}</span>
                      </div>
                      
                      {experience.lieu && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{experience.lieu}</span>
                        </div>
                      )}
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                    bg-muted/30 text-muted-foreground border border-border/30">
                        {experience.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {experience.poste}
                  </h3>
                  <p className="text-xl text-muted-foreground font-medium">{experience.entreprise}</p>
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Missions principales
                  </h4>
                  <div className="grid gap-3">
                    {experience.responsabilites.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30
                                             hover:bg-muted/30 transition-all duration-300">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Compétences développées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.competences.map((competence, idx) => (
                      <span key={idx} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 
                                               rounded-full text-sm font-medium hover:bg-primary/20 
                                               transition-all duration-300 cursor-default">
                        {competence}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="text-center glass-card p-6 hover-lift">
          <div className="text-3xl font-bold text-primary mb-2">4</div>
          <p className="text-muted-foreground">Expériences diverses</p>
        </div>
        <div className="text-center glass-card p-6 hover-lift">
          <div className="text-3xl font-bold text-primary mb-2">2+</div>
          <p className="text-muted-foreground">Années d'expérience</p>
        </div>
        <div className="text-center glass-card p-6 hover-lift">
          <div className="text-3xl font-bold text-primary mb-2">15+</div>
          <p className="text-muted-foreground">Compétences acquises</p>
        </div>
      </div>
    </div>
  );
};
