interface FooterProps {
  profession: string;
  city: string;
  phone: string;
  email: string;
}

export function Footer({ profession, city, phone, email }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{profession}</h3>
            <p className="text-gray-400 text-sm">
              Votre artisan de confiance à {city} et alentours. 
              Service rapide, travail soigné, devis gratuit.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Téléphone :</span>{' '}
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-blue-400 transition-colors">
                  {phone}
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email :</span>{' '}
                <a href={`mailto:${email}`} className="hover:text-blue-400 transition-colors">
                  {email}
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Horaires</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Travail soigné</p>
              <p>Intervention rapide</p>
              <p>Urgences acceptées</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} {profession} {city}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
