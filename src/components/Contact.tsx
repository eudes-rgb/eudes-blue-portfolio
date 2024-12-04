import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send, Linkedin, Instagram } from "lucide-react";

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

    // Simuler un délai d'envoi
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#0EA5E9] mb-4">Contactez-moi</h2>
        <p className="text-gray-400">
          N'hésitez pas à me contacter pour toute question ou proposition de collaboration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
              <Input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
              <Input
                placeholder="Sujet"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
              <Textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/80"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0EA5E9]" />
                <p>ekouandja-eh@saint-louis29.net</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9]" />
                <p>06 41 03 98 00</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#0EA5E9]/20">
            <h4 className="text-lg font-semibold mb-4">Mes réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/eudes-hermann-ekouandja-94a796338"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#222632] rounded-lg hover:bg-[#0EA5E9]/10 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-[#0EA5E9]" />
              </a>
              <a
                href="https://www.instagram.com/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#222632] rounded-lg hover:bg-[#0EA5E9]/10 transition-colors"
              >
                <Instagram className="w-6 h-6 text-[#0EA5E9]" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#0EA5E9]/20">
            <Button 
              variant="outline" 
              className="w-full border-[#0EA5E9]/20 hover:bg-[#0EA5E9]/10"
              onClick={() => window.open('https://cvdesignr.com/p/6702aa12d4d9c', '_blank')}
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};