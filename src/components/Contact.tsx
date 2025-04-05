
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send, Linkedin, Instagram, Key } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Add EmailJS config state
  const [showConfig, setShowConfig] = useState(false);
  const [emailjsConfig, setEmailjsConfig] = useState({
    serviceId: localStorage.getItem('emailjs_service_id') || '',
    templateId: localStorage.getItem('emailjs_template_id') || '',
    publicKey: localStorage.getItem('emailjs_public_key') || '',
  });

  const saveEmailJSConfig = () => {
    // Save to localStorage
    localStorage.setItem('emailjs_service_id', emailjsConfig.serviceId);
    localStorage.setItem('emailjs_template_id', emailjsConfig.templateId);
    localStorage.setItem('emailjs_public_key', emailjsConfig.publicKey);
    
    toast({
      title: "Configuration sauvegardée",
      description: "Votre configuration EmailJS a été enregistrée",
    });
    
    setShowConfig(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    // Check if EmailJS is configured
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      toast({
        title: "Configuration manquante",
        description: "Veuillez configurer EmailJS avant d'envoyer un message",
        variant: "destructive",
      });
      setShowConfig(true);
      return;
    }
    
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      toast({
        title: "Message envoyé !",
        description: "Votre message a bien été envoyé à ma boîte mail. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // EmailJS configuration form
  if (showConfig) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0EA5E9] mb-3">Configuration EmailJS</h2>
          <div className="bg-[#1A1F2C] p-5 rounded-lg border border-[#0EA5E9]/20">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-300 mb-1 block">Service ID</label>
                <Input
                  value={emailjsConfig.serviceId}
                  onChange={(e) => setEmailjsConfig({...emailjsConfig, serviceId: e.target.value})}
                  placeholder="ex: service_abc123"
                  className="bg-[#222632] border-[#0EA5E9]/20"
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-300 mb-1 block">Template ID</label>
                <Input
                  value={emailjsConfig.templateId}
                  onChange={(e) => setEmailjsConfig({...emailjsConfig, templateId: e.target.value})}
                  placeholder="ex: template_xyz789"
                  className="bg-[#222632] border-[#0EA5E9]/20"
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-300 mb-1 block">Public Key</label>
                <Input
                  value={emailjsConfig.publicKey}
                  onChange={(e) => setEmailjsConfig({...emailjsConfig, publicKey: e.target.value})}
                  placeholder="ex: 1abc2d3e4f5g6h7i8j"
                  className="bg-[#222632] border-[#0EA5E9]/20"
                />
              </div>
              
              <div className="pt-2 flex gap-3">
                <Button 
                  className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80" 
                  onClick={saveEmailJSConfig}
                >
                  <Key className="w-4 h-4 mr-2" /> Sauvegarder
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#0EA5E9]/20" 
                  onClick={() => setShowConfig(false)}
                >
                  Annuler
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-5 bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-medium text-[#0EA5E9] mb-2">Comment obtenir ces identifiants ?</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li>Créez un compte sur <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">EmailJS</a></li>
              <li>Configurez un service email (Gmail, Outlook, etc.)</li>
              <li>Créez un template avec les variables {"{name}"}, {"{email}"}, {"{subject}"} et {"{message}"}</li>
              <li>Récupérez vos identifiants dans le tableau de bord</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0EA5E9] mb-3 sm:mb-4">Contactez-moi</h2>
          <p className="text-gray-400">
            N'hésitez pas à me contacter pour toute question ou proposition de collaboration.
          </p>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="border-[#0EA5E9]/30 hover:bg-[#0EA5E9]/10" 
          onClick={() => setShowConfig(true)}
        >
          <Key className="w-4 h-4 mr-1" /> EmailJS
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Formulaire */}
        <div className="bg-[#1A1F2C] p-4 sm:p-6 rounded-lg border border-[#0EA5E9]/20">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
              <Input
                name="email"
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
              <Input
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
              />
              <Textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[120px] sm:min-h-[150px] bg-[#222632] border-[#0EA5E9]/20 focus:border-[#0EA5E9]"
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
        <div className="bg-[#1A1F2C] p-4 sm:p-6 rounded-lg border border-[#0EA5E9]/20 space-y-5 sm:space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Informations de contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <p className="text-sm sm:text-base truncate">ekouandja-eh@saint-louis29.net</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <p className="text-sm sm:text-base">06 41 03 98 00</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#0EA5E9]/20">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Mes réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/eudes-hermann-ekouandja-94a796338"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#222632] rounded-lg hover:bg-[#0EA5E9]/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0EA5E9]" />
              </a>
              <a
                href="https://www.instagram.com/ekouandja_hermann/profilecard/?igsh=enl6YmlmMm9pcHIw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#222632] rounded-lg hover:bg-[#0EA5E9]/10 transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#0EA5E9]" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#0EA5E9]/20">
            <Button 
              variant="outline" 
              className="w-full border-[#0EA5E9]/20 hover:bg-[#0EA5E9]/10"
              onClick={() => window.open('https://cvdesignr.com/p/9LokwK4kLppdo1b', '_blank')}
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

