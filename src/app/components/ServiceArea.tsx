import { MapPin } from 'lucide-react';

interface ServiceAreaProps {
  mainCity: string;
  surroundingCities: string[];
}

export function ServiceArea({ mainCity, surroundingCities }: ServiceAreaProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zone d'intervention
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous intervenons à {mainCity} et dans toutes les villes environnantes pour vous garantir une intervention rapide.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold">{mainCity} et alentours</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {surroundingCities.map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>{city}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-sm text-gray-500 text-center">
            Votre ville n'est pas dans la liste ? Contactez-nous, nous pouvons intervenir dans un rayon plus large.
          </p>
        </div>
      </div>
    </section>
  );
}
