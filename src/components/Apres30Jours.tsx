import React from 'react';

const approche = [
  {
    id: 1,
    title: 'Atelier de cadrage',
    description: 'Identification du flux qui apporte le plus de valeur à votre entreprise.',
    detail: 'Nous analysons ensemble vos processus métiers pour prioriser la digitalisation la plus impactante.',
  },
  {
    id: 2,
    title: 'Sprint de 2 semaines',
    description: 'Livraison d\'une première version fonctionnelle, testable et utilisable immédiatement.',
    detail: 'Vos équipes peuvent commencer à utiliser l\'outil dès la fin du sprint.',
  },
  {
    id: 3,
    title: 'Amélioration continue – 4 semaines',
    description: 'Points hebdomadaires pour ajuster l\'outil et intégrer les fonctionnalités prioritaires.',
    detail: 'Correction des dysfonctionnements et optimisation basée sur les retours terrain.',
  },
];

const Apres30Jours: React.FC = () => {
  return (
    <section id="apres-30-jours" className="min-h-screen bg-hero flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Digitalisation <span className="text-purple-600">rapide et pragmatique</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Chez Blinq, nous digitalisons vos processus métiers de manière rapide et pragmatique.<br />
              Résultat concret en un temps réduit, flexibilité pour s'adapter aux besoins réels et risque limité pour le client.
            </p>
          </div>

          {/* Bloc explicatif en 3 temps */}
          <div className="grid md:grid-cols-3 gap-8">
            {approche.map((step) => (
              <div key={step.id} className="relative">
                {/* Contenu principal */}
                <div className="bg-gradient-to-b from-purple-50 backdrop-blur-md rounded-3xl shadow-2xl p-8 h-full">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 text-base mb-4">{step.title}</h3>
                  </div>
                  <div className="text-gray-600 text-sm mb-3 leading-tight">
                    {step.description}
                  </div>
                  <div className="text-gray-500 text-xs leading-tight">
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apres30Jours; 