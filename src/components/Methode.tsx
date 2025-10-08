import React from 'react';

const planning = [
  {
    day: 'Jour 1',
    col: 0,
    title: 'Cadrage',
    description: "Appel de cadrage pour cerner le périmètre du projet",
    images: [
      { src: '/meet.png', rotation: -10, top: '40', right: '16', delay: 0 }
    ],
  },
  {
    day: 'Jour 2',
    col: 1,
    title: 'Début du sprint',
    description: "Début du développement de la première version",
    images: [
      { src: '/meet.png', rotation: 15, top: '40', right: '16', delay: 0.5 }
    ],
  },
  {
    day: 'Développement',
    col: 2,
    title: 'Développement',
    description: 'On construit la première version de votre outil',
    images: [
      { src: '/Figma.png', rotation: -5, top: '60', right: '150', delay: 1 },
      { src: '/cursor.png', rotation: 20, top: '50', right: '16', delay: 0.2 },
      { src: '/lovable.png', rotation: -15, top: '-50', right: '60', delay: 1.2 }
    ],
  },
  {
    day: 'Jour 15',
    col: 3,
    title: 'Démonstration de la V1',
    description: "On vous présente la première version de votre outil, et on l'améliore selon vos retours.",
    images: [
      { src: '/meet.png', rotation: 0, top: '-50', right: '150', delay: 0.5 }
    ],
  }
];

const columns = [
  'Jour 1',
  'Jour 2',
  'Développement',
  'Jour 15',
];

const Methode: React.FC = () => {
  return (
    <section id="methode" className="min-h-screen bg-hero flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Votre première version en <span className="text-purple-600">15 jours</span>
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Un process clair, une équipe réduite et un interlocuteur unique pour vous accompagner dans la création de votre outil interne. Vous êtes au centre de notre démarche.
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