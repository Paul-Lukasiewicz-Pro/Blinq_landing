import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const benefits = [
    "Livré en 30 Jours",
    "100% sur mesure", 
    "Prix Fixe"
  ];

  const animatedWords = ["Dashboard", "CRM", "Outil Interne", "Portail Client", "Agent IA"];

  useEffect(() => {
    // Animation séquentielle des éléments
    const timer1 = setTimeout(() => setTitleVisible(true), 300);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 800);
    const timer3 = setTimeout(() => setBenefitsVisible(true), 1200);
    const timer4 = setTimeout(() => setCtaVisible(true), 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full text-xs sm:text-sm font-medium text-purple-700 mb-6 sm:mb-8 max-w-sm sm:max-w-none">
            🏆 L'agence de développement d'outils internes la plus efficace de France 2025
          </div>

          {/* Main Headline avec animation */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto font-garet transition-all duration-1000 ease-out ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className={`inline-block transition-all duration-700 ease-out delay-200 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              On crée votre outil métier
            </span>
            <span className={`block transition-all duration-700 ease-out delay-400 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              sur-mesure.
            </span>
          </h1>

          {/* Subtitle avec animation */}
          <div 
            className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Blinq conçoit et développe votre{' '}
            <AnimatedText 
              words={animatedWords} 
              className="text-purple-600 font-semibold"
              interval={3000}
            />{' '}

            <span className="block sm:inline"><br />Le but : éliminer la complexité et améliorer vos résultats</span>
          </div>

          {/* Benefits avec animation */}
          <div 
            className={`flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 transition-all duration-1000 ease-out delay-700 ${
              benefitsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center sm:justify-start space-x-2 transition-all duration-500 ease-out ${
                  benefitsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons avec animation */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 transition-all duration-1000 ease-out delay-900 ${
              ctaVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Prendre un rendez-vous
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#methode"
              onClick={handleScroll}
              className="text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Découvrir notre méthode
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="text-center visibility: hidden">
            <p className="text-gray-500 text-xs sm:text-sm mb-4">
              + de 50 entreprises nous font confiance. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;