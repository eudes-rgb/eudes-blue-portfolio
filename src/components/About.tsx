
import { User, GraduationCap, MapPin, Target } from "lucide-react";

export const About = () => {
  const atouts = [
    "Capacité d'adaptation rapide et autonomie",
    "Esprit d'équipe et sens du contact",
    "Motivation pour apprendre et relever des défis techniques"
  ];

  const cards = [
    {
      icon: User,
      title: "Qui suis-je ?",
      text: "Étudiant en DEUST Infrastructures Numériques à l'Université de Lille, je suis à la recherche d'un stage en systèmes et réseaux de mai à août 2026, avec poursuite en alternance dès septembre. Rigoureux et motivé, je souhaite mettre en pratique mes compétences en administration réseau, support utilisateur, et gestion d'infrastructures IT, tout en développant une expertise professionnelle dans des environnements techniques exigeants."
    },
    {
      icon: GraduationCap,
      title: "Formation",
      text: "Actuellement en DEUST Infrastructures Numériques à l'Université de Lille (Cité Scientifique), je me spécialise dans l'installation, l'administration et la maintenance de réseaux cuivre et fibre optique."
    },
    {
      icon: MapPin,
      title: "Localisation",
      text: "5 Chemin des Vieux Arbres, Villeneuve-d'Ascq (59650), France"
    }
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`card-professional p-6 hover-lift ${card.title === "Qui suis-je ?" ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="card-professional p-6 hover-lift">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Atouts</h3>
              <ul className="text-muted-foreground space-y-2">
                {atouts.map((atout, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    {atout}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
