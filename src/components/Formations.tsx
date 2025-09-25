import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Formations = () => {
  const formations = [
    {
      periode: "2024 - Présent",
      diplome: "DEUST Infrastructures Numériques",
      etablissement: "Campus Cité Scientifique",
      lieu: "Villeneuve-d'Ascq",
      details: "Formation de techniciens en installation, administration et maintenance de réseaux cuivre et fibre optique, sans négliger les liaisons sans fil",
      niveau: "Bac+2",
      statut: "En cours"
    },
    {
      periode: "2024",
      diplome: "BTS Services Informatiques aux Organisations (SIO)",
      etablissement: "Saint-Louis de Châteaulin",
      lieu: "Châteaulin",
      details: "Formation en services informatiques et développement d'applications",
      niveau: "Bac+2",
      statut: "Validé"
    },
    {
      periode: "2022 - 2024",
      diplome: "Licence Monétique et Sécurité des Systèmes",
      etablissement: "École Communautaire de Monétique d'Afrique Centrale",
      lieu: "Libreville, Gabon",
      details: "Spécialisation en systèmes de paiement électronique et sécurité informatique",
      niveau: "Bac+3",
      statut: "Validé"
    },
    {
      periode: "2021 - 2022",
      diplome: "Baccalauréat Lettres et Mathématiques",
      etablissement: "Lycée Privé Awassi",
      lieu: "Gabon",
      details: "Spécialité Lettres et Mathématiques",
      niveau: "Bac"
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="section-heading">Formations Académiques</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Mon parcours éducatif et les compétences acquises au fil de mes études
        </p>
      </div>

      <div className="grid gap-8">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="card-professional p-8 hover-lift animate-slide-up group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Icon and Status */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 
                               flex items-center justify-center mb-4 group-hover:bg-primary/20 
                               group-hover:scale-110 transition-all duration-500">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                {formation.statut && (
                  <div className="text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${formation.statut === 'En cours' 
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                        : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                      }`}>
                      {formation.statut}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {formation.diplome}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{formation.periode}</span>
                      <span className="mx-2">•</span>
                      <span className="text-muted-foreground">{formation.niveau}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{formation.etablissement}</p>
                      {formation.lieu && (
                        <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{formation.lieu}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {formation.details && (
                    <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
                      <p className="text-muted-foreground leading-relaxed">{formation.details}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Visual */}
      <div className="relative mt-16">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">Timeline de Formation</h3>
          <p className="text-muted-foreground">Évolution de mon parcours académique</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>
          
          <div className="space-y-16">
            {formations.map((formation, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1 px-8">
                  <div className={`glass-card p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h4 className="font-bold text-foreground">{formation.diplome}</h4>
                    <p className="text-muted-foreground text-sm">{formation.periode}</p>
                    <p className="text-muted-foreground">{formation.etablissement}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow z-10"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};