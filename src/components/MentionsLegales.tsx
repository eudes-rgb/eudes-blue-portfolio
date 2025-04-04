
import React from "react";
import { Shield, FileText, Info, Globe } from "lucide-react";

export const MentionsLegales = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#0EA5E9]">
        Mentions Légales
      </h2>

      <div className="space-y-8">
        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="text-[#0EA5E9]">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Identité</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-semibold">Nom :</span> Eudes Hermann</li>
                <li><span className="font-semibold">Statut :</span> Étudiant en BTS SIO</li>
                <li><span className="font-semibold">Adresse email :</span> ekouandja-eh@saint-louis29.net</li>
                <li><span className="font-semibold">Téléphone :</span> 06 41 03 98 00</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="text-[#0EA5E9]">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Hébergement</h3>
              <p className="text-gray-300 mb-3">
                Ce site est hébergé par Lovable, plateforme AI pour la création d'applications web.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="text-[#0EA5E9]">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Propriété intellectuelle</h3>
              <p className="text-gray-300 mb-3">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive d'Eudes Hermann, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#0EA5E9]/20 hover:border-[#0EA5E9] transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="text-[#0EA5E9]">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Politique de confidentialité</h3>
              <p className="text-gray-300 mb-3">
                Ce site ne collecte aucune donnée personnelle des visiteurs. Aucun cookie n'est utilisé à des fins de traçage ou d'analyse de comportement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
