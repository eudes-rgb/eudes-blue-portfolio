
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send, Linkedin, Instagram, MapPin, FileText } from "lucide-react";
import cvAsset from "@/assets/CV_EUDES_HERMANN3.pdf.asset.json";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 800));

      toast({
        title: "Message reçu !",
        description: "Votre message a bien été reçu. Je vous répondrai dans les plus brefs délais.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-0">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Formulaire */}
        <div className="card-professional p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-foreground">Envoyer un message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <Textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[120px] sm:min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="card-professional p-6 space-y-5 sm:space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-foreground truncate">eudes-hermann.ekouandja.etu@univ-lille.fr</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-foreground">06 41 03 98 00</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-foreground">5 Chemin des Vieux Arbres, Villeneuve-d'Ascq (59650)</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/60">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-foreground">Mes réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/Eudes-Hermann%20EKOUANDJA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/ekouandja_hermann/profilecard/?igsh=enl6YmlmMm9pcHIw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-border/60">
            <Button
              variant="outline"
              className="w-full border-primary/40 text-primary hover:bg-primary/10"
              onClick={() => window.open(cvAsset.url, '_blank', 'noopener,noreferrer')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
