import { Phone, Users, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo_gkmelec.png';

interface HeaderProps {
  profession: string;
  phone: string;
  companyName?: string;
  clientType: 'particuliers' | 'professionnels';
  setClientType: (type: 'particuliers' | 'professionnels') => void;
}

export function Header({ profession, phone, companyName, clientType, setClientType }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isParticuliers = clientType === 'particuliers';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar */}
      <div className={`${isScrolled ? 'py-2' : 'py-3'} border-b border-brand-dark-light transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt={companyName || profession} 
              className={`${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'} w-auto transition-all`}
            />
          </div>
          
          <button
            onClick={handleCall}
            className="bg-brand-blue text-white px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">{phone}</span>
            <span className="sm:hidden">Appeler</span>
          </button>
        </div>
      </div>

      {/* Navigation Row */}
      <div className="bg-brand-dark-light/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 py-2.5">
            <span className="text-brand-dark/40 font-bold text-xs md:text-sm uppercase tracking-wider">
              Vous êtes :
            </span>
            <div className="flex bg-white p-1 rounded-lg border border-brand-dark-light shadow-sm">
              <button
                onClick={() => setClientType('particuliers')}
                className={`flex items-center gap-1.5 px-3 md:px-5 py-1.5 rounded-md transition-all text-sm font-bold ${
                  isParticuliers
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-dark-muted hover:bg-brand-dark-light'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Particuliers</span>
              </button>
              <button
                onClick={() => setClientType('professionnels')}
                className={`flex items-center gap-1.5 px-3 md:px-5 py-1.5 rounded-md transition-all text-sm font-bold ${
                  !isParticuliers
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-dark-muted hover:bg-brand-dark-light'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Professionnels</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}