import React from 'react';
import { Code, Users, Rocket, Shield, BarChart, Cog } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const builderSteps = [
    {
      icon: Users,
      title: "Analyse des besoins",
      description: "Nous analysons vos processus métier et identifions les points de friction pour concevoir la solution parfaite.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Vibe Coding",
      description: "Développement agile et itératif avec des feedback constants pour s'assurer que l'outil correspond exactement à vos attentes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: "Déploiement rapide",
      description: "Mise en production sécurisée et formation de vos équipes pour une adoption immédiate et efficace.",
      color: "from-purple-600 to-blue-600"
    }
  ];

  const benefits = [
    {
      icon: BarChart,
      title: "Performance optimisée",
      description: "Réduisez le temps passé sur les tâches répétitives et concentrez-vous sur la valeur ajoutée."
    },
    {
      icon: Shield,
      title: "Sécurité maximale",
      description: "Solutions développées selon les meilleures pratiques de sécurité et conformes aux standards."
    },
    {
      icon: Cog,
      title: "Évolutivité garantie",
      description: "Outils conçus pour grandir avec votre entreprise et s'adapter à vos futurs besoins."
    }
  ];

  return (
    <section id="value-prop" className="py-20 bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre méthodologie
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              "Builder"
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche structurée pour créer des outils internes qui transforment réellement 
            la productivité de vos équipes et fluidifient vos processus.
          </p>
        </div>

        {/* Builder Process */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {builderSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector Arrow */}
                {index < builderSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Blinq ?
            </h3>
            <p className="text-lg text-gray-600">
              Des outils qui s'adaptent à vos processus, pas l'inverse
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à optimiser vos processus ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Découvrez comment nos outils sur mesure peuvent transformer votre productivité
            </p>
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Planifier un appel découverte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;