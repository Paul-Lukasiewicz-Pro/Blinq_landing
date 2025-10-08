import React, { useState } from 'react';

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
    title: "IA générative pour l'équipe export du groupe TRIBALLAT",
    contexte: "Le groupe TRIBALLAT vend ses produits à l'international, mais subit les promotions de ses concurrents. À chaque baisse de prix ou lancement de promo, les ventes chutent et les stocks s'accumulent, générant un double impact sur l'activité.",
    solution: "Nous avons mis en place une application d'IA générative qui surveille quotidiennement les prix et promotions des concurrents, détecte automatiquement toute variation et l'interprète, puis alerte immédiatement les responsables export par mail.",
    resultats: [
      "Réactivité accrue : les équipes sont prévenues en moins de 24h et peuvent ajuster leurs prix",
      "Données stratégiques : accumulation de données pour analyser stratégies et saisonnalité des concurrents",
      "Gestion optimisée : meilleure gestion des stocks et ventes maximisées"
    ],
    imageSrc: "/Case_Studies/triballatcs.png",
    imageAlt: "IA générative TRIBALLAT"
  }
];

const NosProjets: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="nos-projets" className="min-h-screen bg-hero flex items-center">
      <div className="w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Étude de cas</h2>
          
          {/* Carrousel d'images */}
          <div className="relative">
            {/* Conteneur principal du carrousel */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {caseStudies.map((study) => (
                  <div key={study.id} className="w-full flex-shrink-0">
                    <div className="relative bg-gradient-to-b from-purple-50 backdrop-blur-md p-8 md:p-16 flex items-center justify-center min-h-[500px] group">
                      {/* Image */}
                      <img 
                        src={study.imageSrc} 
                        alt={study.imageAlt}
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Overlay avec description au hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-xl flex items-end">
                        <div className="w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Contexte</h4>
                            <p className="text-gray-700 text-xs mb-3 leading-relaxed">{study.contexte}</p>
                            
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Solution</h4>
                            <p className="text-gray-700 text-xs mb-3 leading-relaxed">{study.solution}</p>
                            
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Résultats clés</h4>
                            <ul className="text-gray-700 text-xs space-y-1">
                              {study.resultats.slice(0, 2).map((resultat, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-purple-600 mr-2">•</span>
                                  <span className="leading-relaxed">{resultat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Projet précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Projet suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default NosProjets; 