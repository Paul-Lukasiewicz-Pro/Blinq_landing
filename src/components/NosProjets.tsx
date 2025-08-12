import React from 'react';
import CaseStudyCard from './CaseStudyCard';

// Données des études de cas
const caseStudies = [
  {
    id: 1,
    title: "Outil de reporting de Maintenance - ACK",
    contexte: "Une PME industrielle avec 10 techniciens perdait un temps précieux à rédiger manuellement ses rapports d'intervention. Résultat : des rapports incomplets, une traçabilité faible, et une charge mentale inutile pour les équipes terrain.",
    solution: "Grâce à VOKA Maintenance, les techniciens dictent simplement leurs notes à l'oral. L'IA les transforme instantanément en rapports professionnels, complets et prêts à envoyer. Les managers disposent d'un tableau de bord clair pour suivre les interventions.",
    resultats: [
      "2h gagnées par semaine et par technicien",
      "100 % des rapports envoyés dans les délais",
      "Une satisfaction client en nette hausse grâce à des comptes-rendus clairs et détaillés",
      "Conclusion : VOKA libère du temps aux équipes terrain pour qu'elles se concentrent sur l'essentiel : l'action, pas l'administratif."
    ],
    imageSrc: "/Case_Studies/VokaCaseStudy2.png",
    imageAlt: "Voka Maintenance pour ACK"
  },
  {
    id: 2,
    title: "Portail Client Intelligent - TechCorp",
    contexte: "Une entreprise technologique cherchait à améliorer l'expérience client en automatisant les demandes de support et en fournissant des réponses instantanées 24h/24.",
    solution: "Développement d'un portail client alimenté par l'IA qui analyse automatiquement les tickets de support, propose des solutions pertinentes et escalade intelligemment les cas complexes.",
    resultats: [
      "Réduction de 60% du temps de réponse moyen",
      "Satisfaction client passée de 75% à 92%",
      "Diminution de 40% de la charge de travail des équipes support",
      "Disponibilité 24h/24 pour les clients internationaux"
    ],
    imageSrc: "/Case_Studies/PortailCaseStudy.png",
    imageAlt: "Portail Client TechCorp"
  },
  {
    id: 3,
    title: "Système de Gestion des Stocks - RetailPlus",
    contexte: "Une chaîne de magasins perdait des ventes à cause d'une gestion manuelle des stocks inefficace, entraînant des ruptures fréquentes et des surstocks coûteux.",
    solution: "Implémentation d'un système prédictif basé sur l'IA qui analyse les tendances de vente, les saisonnalités et optimise automatiquement les commandes de réapprovisionnement.",
    resultats: [
      "Réduction de 35% des ruptures de stock",
      "Diminution de 25% des coûts de stockage",
      "Amélioration de 15% du taux de rotation des stocks",
      "ROI positif dès la 6ème semaine d'utilisation"
    ],
    imageSrc: "/Case_Studies/dash1.png",
    imageAlt: "Dashboard Gestion Stocks RetailPlus"
  }
];

const NosProjets: React.FC = () => {
  const selectedCase = caseStudies[0];

  return (
    <section id="nos-projets" className="min-h-screen bg-hero flex items-center">
      <div className="w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Étude de cas</h2>
          
          {/* Conteneur simple sans carrousel */}
          <div className="relative">
            <div className="transition-all duration-500 ease-in-out">
              <CaseStudyCard
                title={selectedCase.title}
                contexte={selectedCase.contexte}
                solution={selectedCase.solution}
                resultats={selectedCase.resultats}
                imageSrc={selectedCase.imageSrc}
                imageAlt={selectedCase.imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosProjets; 