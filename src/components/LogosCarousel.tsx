import React from 'react';

// Liste des noms de projets à remplir
const projets: string[] = [
  "Voka-Maintenance",
  "Talks.",
  "MLB - Athlete Meal Planner"
];

const LogosCarousel: React.FC = () => {
  return (
    <div className="w-full py-12 px-2 md:px-0 flex flex-col items-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-8 tracking-widest uppercase">Références</h2>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
        {projets.map((nom, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-24 transition-transform duration-300 hover:scale-105 cursor-pointer w-full"
          >
            <span className="text-2xl md:text-3xl text-gray-900 font-normal text-center w-full">{nom}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel; 