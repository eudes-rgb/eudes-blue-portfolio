import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Envoyer
          </Button>
        </form>

        <div className="mt-12 text-center space-y-4">
          <p>
            <strong>Email:</strong> contact@eudes-hermann.com
          </p>
          <p>
            <strong>Téléphone:</strong> +33 6 XX XX XX XX
          </p>
          <Button variant="outline" className="mt-4">
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </div>
  );
};