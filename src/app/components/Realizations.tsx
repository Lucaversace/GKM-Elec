import { ImageWithFallback } from './figma/ImageWithFallback';

interface Realization {
  image: string;
  title: string;
  description: string;
}

interface RealizationsProps {
  realizations: Realization[];
}

export function Realizations({ realizations }: RealizationsProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nos réalisations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez quelques exemples de nos travaux récents. Chaque installation est réalisée avec soin et dans le respect des normes en vigueur.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.map((realization, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={realization.image}
                  alt={realization.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{realization.title}</h3>
                  <p className="text-sm text-gray-200">{realization.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
