import React from 'react';

const avantages = [
  "Atelier de Cadrage",
  "Développement",
  "Intégration",
  "Retours illimités",
  "Bases de Données Custom",
  "Intégration d'API", 
];

const options: string[] = [
  //"Backend Custom applicatif custom",
  //"Intégration IA",
  //"Hébèrgement & Maintenance",

];

const images = [
  "/Case_Studies/dash0.png",
  "/Case_Studies/dash1.png",
  "/Case_Studies/dash2.png"
];

const NotreOffre: React.FC = () => {
  return (
    <section id="notre-offre" className="min-h-screen flex flex-col items-center justify-center py-20 bg-hero px-4">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: 'Garet, sans-serif' }}>
        Notre offre
      </h2>
      <div className="w-full max-w-xl mx-auto bg-gradient-to-b from-purple-50 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-12 md:px-16 md:py-16 flex flex-col items-center">
        {/* Prix */}
        <div className="text-center mb-4">
          <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold px-6 py-2 rounded-full shadow-lg tracking-wide">
            5720 €
          </span>
        </div>
        {/* Titre & description */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left" style={{ fontFamily: 'Garet, sans-serif' }}>
          Démarrez votre projet
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          V1 en 15 Jours, Prix fixe et Aller-Retour Illimité. 
        </p>
        {/* Images en éventail/flou après la description */}
        <div className="relative w-full flex justify-center mb-8 overflow-hidden" style={{ height: 120 }}>
          {/* Image gauche */}
          <img
            src={images[0]}
            alt="Projet 1"
            className="absolute left-1/2 -translate-x-[120%] top-0 w-40 h-24 object-cover rounded-xl shadow-lg blur-[1.5px] opacity-80 rotate-[-12deg]"
            style={{ zIndex: 1 }}
          />
          {/* Image centre */}
          <img
            src={images[1]}
            alt="Projet 2"
            className="absolute left-1/2 -translate-x-1/2 top-0 w-52 h-32 object-cover rounded-2xl shadow-2xl blur-[0.5px] opacity-90"
            style={{ zIndex: 2 }}
          />
          {/* Image droite */}
          <img
            src={images[2]}
            alt="Projet 3"
            className="absolute left-1/2 translate-x-[20%] top-0 w-40 h-24 object-cover rounded-xl shadow-lg blur-[1.5px] opacity-80 rotate-[10deg]"
            style={{ zIndex: 1 }}
          />
        </div>
        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-8 w-full max-w-xl">
          {avantages.map((a, i) => (
            <div key={i} className="flex items-center text-gray-900 text-base">
              <span className="mr-3 text-gray-700 text-lg">✔</span> {a}
            </div>
          ))}
        </div>
        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-6 w-full max-w-xl">
          {options.map((opt, i) => (
            <div key={i} className="flex items-center text-purple-400 text-sm italic">
              {opt} <span className="ml-1">*</span>
            </div>
          ))}
        </div>
       {/* <div className="text-gray-400 text-xs mb-8 w-full max-w-xl text-left">* Service en option payant</div> */}
        {/* CTA */}
        <a
          href="https://cal.com/paul-blinq/30min?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
        >
          Prendre un RDV
        </a>
      </div>
    </section>
  );
};

export default NotreOffre; 