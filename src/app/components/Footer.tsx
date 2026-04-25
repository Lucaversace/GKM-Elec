import { Phone, Mail, Clock, MapPin, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router';
import logo from '../../assets/logo_gkmelec.png';

interface FooterProps {
  profession: string;
  city: string;
  phone: string;
  email: string;
}

export function Footer({ profession, city, phone, email }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img 
              src={logo} 
              alt="GKM Elec" 
              className="h-10 w-auto brightness-0 invert" 
            />
            <p className="text-brand-dark-muted text-sm leading-relaxed">
              Expert en électricité et télécommunications. Nous accompagnons les particuliers et professionnels dans tous leurs projets d'installation et de dépannage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue transition-colors text-white/70 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue transition-colors text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-montserrat border-b border-white/10 pb-2">Nos Services</h3>
            <ul className="space-y-3 text-sm text-brand-dark-muted">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Dépannage urgent 7j/7</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Installation résidentielle</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Électricité tertiaire</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Réseaux & Fibre optique</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Mise aux normes (NF C 15-100)</a></li>
            </ul>
          </div>

          {/* Column 3: Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-montserrat border-b border-white/10 pb-2">Informations</h3>
            <div className="space-y-4 text-sm text-brand-dark-muted">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-blue shrink-0" />
                <div>
                  <p className="text-white font-semibold">Horaires d'ouverture</p>
                  <p>Lun - Ven : 08h00 - 19h00</p>
                  <p>Sam : 09h00 - 12h00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <div>
                  <p className="text-white font-semibold">Zone d'intervention</p>
                  <p>{city} et un rayon de 50km aux alentours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-montserrat border-b border-white/10 pb-2">Contact Direct</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center group-hover:bg-brand-blue/40 transition-colors">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-brand-dark-muted uppercase font-bold">Appelez-nous</p>
                  <p className="text-sm font-bold">{phone}</p>
                </div>
              </a>
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center group-hover:bg-brand-blue/40 transition-colors">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-brand-dark-muted uppercase font-bold">Email</p>
                  <p className="text-sm font-bold">{email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-dark-muted">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {currentYear} {profession} - GKM Elec. Tous droits réservés.</p>
            <p>Réalisé par <a href="https://lumenweb.fr" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">lumenweb.fr</a></p>
          </div>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
