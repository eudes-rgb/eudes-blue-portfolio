
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Formations } from "@/components/Formations";
import { Experiences } from "@/components/Experiences";
import { Veille } from "@/components/Veille";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";
import { Copyright } from "lucide-react";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="min-h-screen relative bg-background">
      {/* Décor : halos bleu et rouge sur fond blanc */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[32rem] h-[32rem] rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Navigation */}
      <Navigation isOpen={isNavOpen} onToggle={() => setIsNavOpen((v) => !v)} />

      {/* Contenu : page unique qui défile */}
      <div className={`relative z-10 ${isNavOpen ? "md:ml-80" : "md:ml-0"} transition-all duration-500 flex flex-col min-h-screen`}>
        {/* Accueil / Hero */}
        <section id="accueil" className="min-h-screen flex items-center">
          <div className="w-full">
            <Header />
          </div>
        </section>

        <main>
          <section id="about" className="py-16 md:py-24">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Qui suis-je"
                title="À propos"
                subtitle="Mon profil en quelques mots"
              />
              <About />
            </div>
          </section>

          <section id="competences" className="py-16 md:py-24 bg-muted/30 border-y border-border/40">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Expertise technique"
                title="Compétences"
                subtitle="Maîtrise des systèmes, réseaux et de la sécurité informatique"
              />
              <Skills />
            </div>
          </section>

          <section id="projets" className="py-16 md:py-24">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Réalisations"
                title="Projets"
                subtitle="Projets techniques et documentations"
              />
              <Projects />
            </div>
          </section>

          <section id="experiences" className="py-16 md:py-24 bg-muted/30 border-y border-border/40">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Parcours professionnel"
                title="Expériences"
                subtitle="Projets réalisés et missions accomplies"
              />
              <Experiences />
            </div>
          </section>

          <section id="formations" className="py-16 md:py-24">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Parcours académique"
                title="Formation"
                subtitle="Diplômes et parcours universitaire"
              />
              <Formations />
            </div>
          </section>

          <section id="veille" className="py-16 md:py-24 bg-muted/30 border-y border-border/40">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Veille technologique"
                title="Veille Technologique"
                subtitle="Une veille régulière sur la cybersécurité et les réseaux"
              />
              <Veille />
            </div>
          </section>

          <section id="contact" className="py-16 md:py-24">
            <div className="container-professional">
              <SectionHeader
                eyebrow="Contact"
                title="Contact"
                subtitle="Disponible pour discuter de vos projets et opportunités"
              />
              <Contact />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center text-muted-foreground border-t border-border/40 bg-card/60 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Copyright className="w-4 h-4" />
              <span>2026 Eudes-Hermann EKOUANDJA. Tous droits réservés.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
