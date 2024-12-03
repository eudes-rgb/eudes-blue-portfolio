import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your email service endpoint
      const response = await fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9]">Contact</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#1A1F2C] p-8 rounded-lg border border-[#0EA5E9]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
            </div>
            <div>
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

        <div className="bg-[#1A1F2C] p-8 rounded-lg border border-[#0EA5E9]/20 space-y-6">
          <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
          
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

          <div className="pt-6 border-t border-[#0EA5E9]/20">
            <Button variant="outline" className="w-full border-[#0EA5E9]/20 hover:bg-[#0EA5E9]/10">
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};