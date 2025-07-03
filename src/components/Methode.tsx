import React from 'react';
import { Search, PenTool, Code, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-purple-600 mb-4" />,
    title: 'Audit',
    description: 'Workshop avec les responsables métiers pour cerner le périmètre du projet, et le besoin digital.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-600 mb-4" />,
    title: 'Product Design',
    description: 'Nous designons votre futur outil, en établissant les workflows et parcours utilisateurs.'
  },
  {
    icon: <Code className="w-8 h-8 text-purple-600 mb-4" />,
    title: 'Développement',
    description: 'Nous développons votre outil grâce à nos outils IA.'
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-purple-600 mb-4" />,
    title: 'Livraison et ajustements',
    description: 'Livraison, tests utilisateurs et ajustements selon vos retours.'
  }
];

const Methode: React.FC = () => {
  return (
    <section id="methode" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre méthode en 4 étapes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une approche structurée, humaine et efficace pour garantir le succès de votre projet digital.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div>{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{idx + 1} - {step.title}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methode; 