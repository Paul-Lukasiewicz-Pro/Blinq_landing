import React from 'react';

const approche = [
  {
    id: 1,
    title: 'Étape 1 – On priorise ce qui compte',
    description: 'Ensemble, on identifie les fonctionnalités les plus utiles pour vos équipes.',
    detail: 'Pas de specs à rallonge. Juste ce qui crée de la valeur, tout de suite.',
  },
  {
    id: 2,
    title: 'Étape 2 – On livre une V1 en 30 jours',
    description: 'En 1 mois, vous avez un outil interne en ligne, designé, codé, intégré.',
    detail: 'Une base solide, utilisable par vos équipes dès maintenant.',
  },
  {
    id: 3,
    title: 'Étape 3 – On améliore tous les 10 jours',
    description: 'Chaque sprint de 10 jours permet d\'ajouter des fonctionnalités, d\'optimiser l\'expérience et de réagir aux retours utilisateurs.',
    detail: 'Un rythme agile, zéro tunnel, zéro surprise.',
  },
];

const Apres30Jours: React.FC = () => {
  return (
    <section id="apres-30-jours" className="min-h-screen bg-hero flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Livré en 30 Jours, Améliorez-le tous les <span className="text-purple-600">10 jours</span>.
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Une méthode lean, pensée pour les entreprises qui veulent des résultats rapides sans compromis sur la qualité.<br />
              En 30 jours, vous avez une V1 prête à l'emploi. Ensuite, on avance ensemble, sprint après sprint.
            </p>
          </div>

          {/* Bloc explicatif en 3 temps */}
          <div className="grid md:grid-cols-3 gap-8">
            {approche.map((step, idx) => (
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