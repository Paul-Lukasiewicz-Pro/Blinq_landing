import React from 'react';
import LogosCarousel from './LogosCarousel';

const NosProjets: React.FC = () => {
  return (
    <section id="nos-projets" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Étude de cas */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Projets</h2>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Voka-Maintenance</h3>
          <p className="text-gray-700 mb-4">
            Assistant vocal de maintenance industrielle.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
            <li>L'entreprise avait investi une somme conséquente dans un logiciel de maintenance qui n'était pas rempli, tant les interfaces étaient complexes et chronophages pour les techniciens.</li>
            <li>Nous avons développé un assistant vocal pour remplir le logiciel de maintenance, comme si le technicien discutait avec un collègue.</li>
            <li>Résultat : le logiciel de maintenance est exploité à 100% et permet aux techniciens de gagner un temps précieux chaque jour.</li>
          </ul>
        </div>
        {/* Image */}
        <div className=" w-full flex justify-center">
          <img src="/Case_Studies/VokaCaseStudy.png" alt="Voka-Maintenance" className="rounded-xl shadow-lg max-w-full h-auto" />
        </div>
      </div>
      <LogosCarousel />
    </section>
  );
};

export default NosProjets; 