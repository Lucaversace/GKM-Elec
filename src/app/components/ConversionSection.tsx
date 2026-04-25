import { Phone } from 'lucide-react';

interface ConversionSectionProps {
  phone: string;
}

export function ConversionSection({ phone }: ConversionSectionProps) {
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  return (
    <section className="py-16 md:py-20 bg-brand-blue text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
          Un problème ? Une urgence ?
        </h2>
        <p className="text-xl mb-8 text-brand-blue-light">
          Ne laissez pas la situation empirer. Appelez-nous maintenant pour une intervention rapide.
          Notre équipe est à votre écoute et prête à intervenir.
        </p>
        <button
          onClick={handleCall}
          className="bg-brand-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gray transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
        >
          <Phone className="w-6 h-6" />
          {phone}
        </button>
        <p className="mt-4 text-sm text-brand-blue-muted">
          Réponse rapide • Devis gratuit • Artisan qualifié
        </p>
      </div>
    </section>
  );
}
