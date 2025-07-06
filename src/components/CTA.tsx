import React, { useEffect } from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CTA: React.FC = () => {
  const benefits = [
    "Audit gratuit de vos processus",
    "Démonstration personnalisée",
    "Devis détaillé sous 48h",
    "Accompagnement dédié"
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '20min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <section className="min-h-screen bg-hero text-gray-900 relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Consultation gratuite - 20 minutes
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Transformez vos processus

              </h2>
              
              <p className="text-xl mb-8 text-gray-600">
                Réservez un appel découverte gratuit avec notre équipe. 
                Nous analyserons vos besoins et vous proposerons une solution sur mesure 
                pour optimiser vos opérations.
              </p>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block">
                <a 
                  href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Réserver ma démo gratuite
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Calendar Preview */}
            <div className="lg:block hidden">
              {/* Utilisation du composant Cal.com officiel */}
              <Cal
                namespace="20min"
                calLink="paul-lukasiewicz/20min"
                style={{ width: '100%', height: '600px', overflow: 'scroll', background: 'rgba(255,255,255,0.9)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(147,51,234,0.2)' }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="lg:hidden text-center mt-8">
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300"
            >
              Réserver ma démo gratuite
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="text-center mt-12 pt-8 border-t border-gray-300">
            <p className="text-gray-600 text-sm">
              ✓ Sans engagement • ✓ Consultation personnalisée • ✓ Réponse sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;