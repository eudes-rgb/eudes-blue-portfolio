
import { Mail, Phone, MapPin, FileText, ArrowDown, MessageCircle } from "lucide-react";
import cvAsset from "@/assets/CV_EUDES_HERMANN3.pdf.asset.json";

export const Header = () => {
  const chips = [
    "Réseaux",
    "Linux / Windows Server",
    "Sécurité",
    "Fibre optique",
    "Virtualisation",
  ];

  const contactInfo = [
    { icon: Mail, text: "eudes-hermann.ekouandja.etu@univ-lille.fr", href: "mailto:eudes-hermann.ekouandja.etu@univ-lille.fr" },
    { icon: Phone, text: "06 41 03 98 00", href: "tel:+33641039800" },
    { icon: MapPin, text: "Villeneuve-d'Ascq (59650)" },
  ];

  return (
    <div className="min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center space-y-8 animate-fade-in">
      {/* Badge disponibilité */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        Disponible pour un stage — Mai à Août 2026
      </span>

      {/* Nom */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight animate-slide-up">
        <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
          Eudes-Hermann
          <br />
          EKOUANDJA
        </span>
      </h1>

      {/* Accroche */}
      <p className="text-lg md:text-2xl text-secondary font-semibold tracking-wide uppercase">
        Systèmes, Réseaux & Infrastructure Numérique
      </p>

      <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
        Étudiant en DEUST Infrastructures Numériques à l'Université de Lille, à la recherche d'un
        stage en systèmes et réseaux de mai à août 2026, avec poursuite en alternance dès septembre.
      </p>

      {/* Chips compétences */}
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
        {chips.map((chip) => (
          <span
            key={chip}
            className="px-3 py-1.5 rounded-full bg-muted/60 border border-border/60 text-sm text-muted-foreground"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => window.open(cvAsset.url, "_blank", "noopener,noreferrer")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground
                     font-semibold shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          <FileText className="w-4 h-4" />
          Télécharger mon CV
        </button>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40
                     text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Me contacter
        </button>
      </div>

      {/* Informations de contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto w-full pt-4">
        {contactInfo.map((item, index) => {
          const content = (
            <>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20
                              flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-card-foreground text-sm font-medium truncate">{item.text}</span>
            </>
          );
          return item.href ? (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-xl bg-card/80 border border-border/50 text-left
                         transition-all duration-300 hover:bg-card hover:border-primary/40 hover:shadow-card"
            >
              {content}
            </a>
          ) : (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-card/80 border border-border/50"
            >
              {content}
            </div>
          );
        })}
      </div>

      {/* Explorer */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="pt-6 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Explorer la page"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">Explorer</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </div>
  );
};
