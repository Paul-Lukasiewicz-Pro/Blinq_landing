import React from 'react';
import LogosCarousel from './LogosCarousel';
import CaseStudyCard from './CaseStudyCard';

const NosProjets: React.FC = () => {
  return (
    <section id="nos-projets" className="min-h-screen bg-hero flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Étude de cas</h2>
          <CaseStudyCard
            title="Outil de reporting de Maintenance - ACK"
            contexte="Une PME industrielle avec 10 techniciens perdait un temps précieux à rédiger manuellement ses rapports d’intervention. Résultat : des rapports incomplets, une traçabilité faible, et une charge mentale inutile pour les équipes terrain."
            solution="Grâce à VOKA Maintenance, les techniciens dictent simplement leurs notes à l’oral. L’IA les transforme instantanément en rapports professionnels, complets et prêts à envoyer. Les managers disposent d’un tableau de bord clair pour suivre les interventions."
            resultats={[
              "2h gagnées par semaine et par technicien",
              "100 % des rapports envoyés dans les délais",
              "Une satisfaction client en nette hausse grâce à des comptes-rendus clairs et détaillés",
              "Conclusion : VOKA libère du temps aux équipes terrain pour qu'elles se concentrent sur l’essentiel : l'action, pas l’administratif."
            ]}
            imageSrc="/Case_Studies/VokaCaseStudy2.png"
            imageAlt="Voka Maintenance pour ACK"
          />
        </div>
        
      </div>
    </section>
  );
};

export default NosProjets; 