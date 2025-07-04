import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';

const OfferSection: React.FC = () => {
  const includedFeatures = [
    "Livraison en 14 jours",
    "Un seul interlocuteur", 
    "Rédaction du script",
    "Voix off et sound design",
    "Retours illimités",
    "Droit de diffusion à 100%"
  ];

  const optionalFeatures = [
    "Autres langues (EN, ESP...)*",
    "Autres formats (9:16, 1:1...)*",
    "Déclinaison short (16s)*",
    "Miniature personnalisée*"
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Notre offre
          </h2>
        </div>

        {/* Main Offer Card */}
        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 relative">
          {/* Price */}
          <div className="text-center mb-8">
            <div className="text-4xl md:text-5xl font-bold mb-2">2980€</div>
          </div>

          {/* Title and Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vidéo de présentation
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              En 60 secondes de motion design, nous mettons en valeur votre activité 
              pour présenter, expliquer et vendre ce que vous faites. Idéale pour votre 
              site web et pour générer plus de leads !
            </p>
          </div>

          {/* Cards Carousel */}
          <div className="relative h-64 mb-12 flex items-center justify-center">
            {/* Background Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Left Card */}
              <div 
                className="absolute w-48 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg transform -rotate-12 -translate-x-32 scale-90 opacity-80"
                style={{ 
                  backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-orange-500/80 rounded-xl flex items-center justify-center">
                  <div className="text-white font-bold text-lg">Dashboard</div>
                </div>
              </div>

              {/* Right Card */}
              <div 
                className="absolute w-48 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg transform rotate-12 translate-x-32 scale-90 opacity-80"
                style={{ 
                  backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-blue-500/80 rounded-xl flex items-center justify-center">
                  <div className="text-white font-bold text-lg">CRM</div>
                </div>
              </div>

              {/* Center Card - Slack Style */}
              <div className="relative w-56 h-36 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-2xl z-10 flex flex-col items-center justify-center">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  </div>
                  <span className="text-white font-bold text-xl">blinq</span>
                </div>
                <p className="text-purple-200 text-sm">Where the future works</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Included Features */}
            <div>
              <div className="grid grid-cols-1 gap-3">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Features */}
            <div>
              <div className="grid grid-cols-1 gap-3">
                {optionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Service Note */}
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm italic">
              * Service en option payant
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              PRENDRE UN RDV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;