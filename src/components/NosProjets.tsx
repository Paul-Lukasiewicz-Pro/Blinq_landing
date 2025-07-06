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
            title="Portail de demandes internes par Axinéo"
            points={[
              "Centralisation des demandes (RH, IT, finance)",
              "Gain de temps pour les équipes : –35 % de sollicitations par email",
              "100 % des demandes tracées et suivies",
              "Visibilité sur les délais de traitement et la charge support",
            ]}
            imageSrc="/Case_Studies/PortailCaseStudy.png"
            imageAlt="Axinéo"
          />
        </div>
        
      </div>
    </section>
  );
};

export default NosProjets; 