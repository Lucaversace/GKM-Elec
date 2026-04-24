import { Phone, Mail, Clock } from 'lucide-react';

interface ContactProps {
  phone: string;
  email: string;
  profession: string;
  city: string;
}

export function Contact({ phone, email, profession, city }: ContactProps) {
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un électricien à {city} ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            N'attendez plus ! Un simple appel suffit pour obtenir un devis gratuit ou planifier une intervention.
          </p>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">Disponible 6j/7</span>
            </div>
            
            <button
              onClick={handleCall}
              className="bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3 mb-4"
            >
              <Phone className="w-7 h-7" />
              {phone}
            </button>
            
            <p className="text-sm text-gray-600">
              Cliquez pour appeler directement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Appelez-nous</h3>
              <p className="text-gray-600 text-sm mb-3">
                Pour une urgence ou un devis rapide
              </p>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                {phone}
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Écrivez-nous</h3>
              <p className="text-gray-600 text-sm mb-3">
                Pour une demande de devis détaillé
              </p>
              <a
                href={`mailto:${email}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
