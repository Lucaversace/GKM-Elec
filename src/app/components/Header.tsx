import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  profession: string;
  phone: string;
  companyName?: string;
}

export function Header({ profession, phone, companyName }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="font-bold text-lg md:text-xl text-blue-700">
          {companyName || profession}
        </div>
        
        <button
          onClick={handleCall}
          className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">{phone}</span>
          <span className="sm:hidden">Appeler</span>
        </button>
      </div>
    </header>
  );
}