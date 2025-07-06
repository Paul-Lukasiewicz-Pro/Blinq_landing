import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "Combien de temps faut-il pour développer un outil sur mesure ?",
      answer: "Grâce à notre méthodologie AI-Native, nous pouvons livrer un MVP fonctionnel en 2-4 semaines selon la complexité. Les itérations et améliorations se font ensuite par cycles courts de 1-2 semaines, permettant une mise en production rapide."
    },
    {
      question: "Nos données sont-elles sécurisées ?",
      answer: "Absolument. Nous appliquons les meilleures pratiques de sécurité : chiffrement des données, authentification robuste, conformité RGPD, et hébergement sécurisé. Nous pouvons également signer des accords de confidentialité spécifiques à vos besoins."
    },
    {
      question: "Pouvez-vous intégrer nos outils existants ?",
      answer: "Oui, c'est l'un de nos points forts. Nous créons des outils qui s'intègrent parfaitement à votre écosystème existant : ERP, CRM, bases de données, APIs tierces. L'objectif est de fluidifier vos processus, pas de les complexifier."
    },
    {
      question: "Comment est hébergé mon outil ?",
      answer: "Nous vous offrons la possibilité de choisir entre un hébergement sur nos serveurs sécurisés ou sur vos infrastructures. Nous pouvons également vous aider à trouver un hébergeur adapté à vos besoins."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="min-h-screen bg-hero flex items-center">
      <div className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Toutes les réponses aux questions que se posent les responsables métier
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous avez d'autres questions ?
            </p>
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Parlons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;