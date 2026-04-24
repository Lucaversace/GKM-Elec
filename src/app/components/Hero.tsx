import { Phone, Clock, FileText, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  profession: string;
  city: string;
  tagline: string;
  phone: string;
  heroImage: string;
}

export function Hero({ profession, city, tagline, phone, heroImage }: HeroProps) {
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src={heroImage}
          alt="Professionnel au travail"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {profession} à {city}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {tagline}
          </p>
          
          <button
            onClick={handleCall}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 mb-12"
          >
            <Phone className="w-6 h-6" />
            Appeler maintenant
          </button>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Clock className="w-6 h-6 flex-shrink-0 text-blue-200" />
              <div>
                <div className="font-semibold">Intervention rapide</div>
                <div className="text-sm text-blue-100">Disponible 7j/7</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 flex-shrink-0 text-blue-200" />
              <div>
                <div className="font-semibold">Service de qualité</div>
                <div className="text-sm text-blue-100">Artisan expérimenté</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <FileText className="w-6 h-6 flex-shrink-0 text-blue-200" />
              <div>
                <div className="font-semibold">Devis gratuit</div>
                <div className="text-sm text-blue-100">Sans engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
