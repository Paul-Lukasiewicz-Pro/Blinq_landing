import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description?: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, points, imageSrc, imageAlt }) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-purple-50 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="md:w-1/2 w-full">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        {description && <p className="text-lg text-gray-700 mb-8">{description}</p>}
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      {/* Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img src={imageSrc} alt={imageAlt} className="rounded-xl shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
};

export default CaseStudyCard;
