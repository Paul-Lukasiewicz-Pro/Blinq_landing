import React from 'react';

const planning = [
  {
    day: 'Jour 1',
    col: 0,
    title: 'Découverte',
    description: "Appel de découverte avec Paul ou Jules",
    images: [
      { src: '/meet.png', rotation: -10, top: '40', right: '16', delay: 0 }
    ],
  },
  {
    day: 'Jour 2',
    col: 1,
    title: 'Cadrage',
    description: "Appel de lancement avec Paul",
    images: [
      { src: '/meet.png', rotation: 15, top: '40', right: '16', delay: 0.5 }
    ],
  },
  {
    day: 'Jour 5',
    col: 2,
    title: 'Validation Product Design',
    description: 'Validation des maquettes et parcours',
    images: [
      { src: '/Figma.png', rotation: -5, top: '60', right: '70', delay: 1 }
    ],
  },
  {
    day: 'Développement',
    col: 3,
    title: 'Building',
    description: 'On produit votre outil',
    images: [
      { src: '/cursor.png', rotation: 20, top: '50', right: '16', delay: 0.2 },
      { src: '/lovable.png', rotation: -15, top: '-50', right: '60', delay: 1.2 },
      { src: '/openai.png', rotation: 8, top: '55', right: '80', delay: 0.8 }
    ],
  },
  {
    day: 'Jour 20',
    col: 4,
    title: 'Présentation de la V1',
    description: 'Présentation, retours et ajustements',
    images: [
      { src: '/meet.png', rotation: -12, top: '12', right: '16', delay: 1.5 }
    ],
  },
  {
    day: 'Jour 30',
    col: 5,
    title: 'Livraison finale',
    description: 'Livraison de la version finale',
    images: [],
  },
];

const columns = [
  'Jour 1',
  'Jour 2',
  'Jour 5',
  'Développement',
  'Jour 20',
  'Jour 30',
];

const Methode: React.FC = () => {
  return (
    <section id="methode" className="min-h-screen bg-hero flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Votre outil interne en <span className="text-purple-600">30 jours</span>
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Un planning clair, chaque étape sur une ligne, reliée par une timeline visuelle.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-3 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-1">
              <thead>
                <tr>
                  {columns.map((col, idx) => (
                    <th key={idx} className={`text-xs font-bold text-gray-400 pb-1 text-center whitespace-nowrap ${idx < columns.length - 1 ? 'border-r border-dashed border-gray-300' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planning.map((step, rowIdx) => (
                  <tr key={rowIdx} className="relative h-6">
                    {columns.map((col, colIdx) => (
                      <td
                        key={colIdx}
                        className={`align-top text-center relative px-0 py-0 ${colIdx < columns.length - 1 ? 'border-r border-dashed border-gray-300' : ''}`}
                      >
                        {/* Afficher les images de la colonne */}
                        {colIdx === step.col && step.images && step.images.map((img, i) => (
                          <img
                            key={i}
                            src={img.src}
                            alt={`illustration-${i}`}
                            className="absolute w-10 h-10 object-contain floating-img rounded-lg"
                            style={{ 
                              transform: `rotate(${img.rotation}deg)`, 
                              top: `${img.top}px`, 
                              right: `${img.right}px`,
                              ['--rotation' as string]: `${img.rotation}deg`,
                              ['--delay' as string]: `${img.delay}s`
                            }}
                          />
                        ))}
                        {colIdx === step.col ? (
                          <div className="bg-gray-50 border-l-4 border-purple-600 rounded-lg shadow p-1 flex flex-col items-start mx-0 max-w-[180px] min-w-[140px]">
                            <div className="font-semibold text-gray-900 text-xs text-left mb-0.5 leading-tight">{step.title}</div>
                            <div className="text-gray-600 text-[10px] text-left leading-tight">{step.description}</div>
                          </div>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methode; 