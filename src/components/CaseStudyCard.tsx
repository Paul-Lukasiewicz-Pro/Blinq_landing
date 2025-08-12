import React from 'react';

interface CaseStudyCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  contexte: string;
  solution: string;
  resultats: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, contexte, solution, resultats, imageSrc, imageAlt }) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-purple-50 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="md:w-2/5 w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-words leading-tight">{title}</h3>
        
        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-base text-gray-800 mb-1">Contexte</h4>
            <p>{contexte}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-base text-gray-800 mb-1">Solution</h4>
            <p>{solution}</p>
          </div>

          <div>
            <h4 className="font-bold text-base text-gray-800 mb-1">Résultats</h4>
            <ul className="list-disc pl-5 space-y-1">
              {resultats.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      {/* Image */}
      <div className="md:w-3/5 w-full flex justify-center">
        <img src={imageSrc} alt={imageAlt} className="rounded-xl shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
};

export default CaseStudyCard;
