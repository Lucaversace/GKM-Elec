import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ConversionSection } from './components/ConversionSection';
import { Testimonials } from './components/Testimonials';
import { TrustedBy } from './components/TrustedBy';
import { ServiceArea } from './components/ServiceArea';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Realizations } from './components/Realizations';
import { Zap, Home, Building2, Users, Briefcase } from 'lucide-react';

// ============================================
// CONFIGURATION - Personnalisez ces valeurs
// ============================================
const CONFIG = {
  companyName: 'GKM Elec',
  profession: 'Électricité & Télécommunications',
  city: 'Saint-Étienne et Lyon',
  tagline: 'Intervention rapide et devis gratuit pour tous vos travaux d\'électricité et de télécommunications',
  phone: '06 26 80 80 98',
  email: 'contact@gkm-elec.fr',
  heroImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2NDEwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
};

// Services pour particuliers
const SERVICES_PARTICULIERS = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Dépannage électrique',
    description: 'Intervention rapide pour tous vos problèmes électriques. Panne de courant, disjoncteur, court-circuit. Disponible 7j/7.',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Installation résidentielle',
    description: 'Installation complète pour votre logement : prises, éclairage, tableau électrique, mise aux normes. Travail soigné garanti.',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Rénovation électrique',
    description: 'Remise aux normes complète de votre installation électrique. Diagnostic gratuit et conseil personnalisé.',
  },
];

// Services pour professionnels
const SERVICES_PROFESSIONNELS = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Installation professionnelle',
    description: 'Solutions électriques pour entreprises, commerces et bureaux. Études, installation et maintenance de vos systèmes électriques.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Maintenance électrique',
    description: 'Contrats de maintenance préventive et curative. Intervention rapide pour minimiser les temps d\'arrêt de votre activité.',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Câblage réseau & télécom',
    description: 'Installation de réseaux informatiques, fibre optique et systèmes de télécommunication pour votre entreprise.',
  },
];

// Avis clients particuliers
const TESTIMONIALS_PARTICULIERS = [
  {
    name: 'Christophe Bernard',
    city: 'Saint-Étienne',
    rating: 5,
    text: 'Dépannage en urgence un samedi soir pour une panne totale. Électricien compétent, rapide et très pro. Prix raisonnable. Merci !',
    date: 'Mars 2026',
  },
  {
    name: 'Amélie Rousseau',
    city: 'Lyon 3ème',
    rating: 5,
    text: 'Travaux de mise aux normes dans toute la maison. Très bon conseil, travail impeccable et dans les délais. Je recommande GKM Elec !',
    date: 'Février 2026',
  },
  {
    name: 'Sophie Martin',
    city: 'Saint-Priest',
    rating: 5,
    text: 'Installation de prises et éclairage LED dans tout l\'appartement. Travail propre et rapide. Très satisfaite du résultat.',
    date: 'Avril 2026',
  },
];

// Avis clients professionnels
const TESTIMONIALS_PROFESSIONNELS = [
  {
    name: 'Patrick Durand',
    city: 'Villeurbanne',
    rating: 5,
    text: 'Installation électrique complète de mon commerce. Professionnel sérieux, devis respecté, excellent rapport qualité/prix.',
    date: 'Janvier 2026',
  },
  {
    name: 'Marc Leclerc - Gérant E.Leclerc',
    city: 'Lyon',
    rating: 5,
    text: 'Maintenance de nos installations électriques depuis 2 ans. Réactivité excellente et équipe compétente. Recommandé !',
    date: 'Mars 2026',
  },
  {
    name: 'Direction SPIE',
    city: 'Saint-Étienne',
    rating: 5,
    text: 'Partenaire fiable pour nos chantiers. Respect des délais et des normes de sécurité. Collaboration très professionnelle.',
    date: 'Février 2026',
  },
];

// Villes d'intervention
const SURROUNDING_CITIES = [
  'Saint-Étienne',
  'Lyon',
  'Villeurbanne',
  'Saint-Priest',
  'Vénissieux',
  'Caluire-et-Cuire',
  'Firminy',
  'Rive-de-Gier',
  'Andrézieux-Bouthéon',
  'Roanne',
  'Vienne',
  'Givors',
];

// Réalisations particuliers
const REALIZATIONS_PARTICULIERS = [
  {
    image: 'https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc2MzYzNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tableau électrique neuf',
    description: 'Installation complète d\'un tableau électrique aux normes pour une maison à Saint-Étienne',
  },
  {
    image: 'https://images.unsplash.com/photo-1767514536570-83d70c024247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZWxlY3RyaWNhbCUyMHdpcmluZ3xlbnwxfHx8fDE3NzY0MTA0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Rénovation électrique maison',
    description: 'Mise aux normes et câblage complet d\'une habitation à Lyon',
  },
  {
    image: 'https://images.unsplash.com/photo-1635335874521-7987db781153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3dpdGNoJTIwc29ja2V0fGVufDF8fHx8MTc3NjQxMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Prises et interrupteurs',
    description: 'Pose de prises et interrupteurs design dans appartement rénové',
  },
  {
    image: 'https://images.unsplash.com/photo-1772992552302-825bb23ffb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGluZyUyMGluc3RhbGxhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzY0MTA0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Éclairage LED moderne',
    description: 'Installation d\'un système d\'éclairage LED économique et design pour votre maison',
  },
  {
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2NDEwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Dépannage et réparation',
    description: 'Intervention rapide pour dépannage électrique d\'urgence 7j/7',
  },
];

// Réalisations professionnels
const REALIZATIONS_PROFESSIONNELS = [
  {
    image: 'https://images.unsplash.com/photo-1774494168068-0f716c3aafcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3NjQxMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Installation bureau professionnel',
    description: 'Équipement électrique complet pour bureaux d\'entreprise à Villeurbanne',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzY0MTA0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Centre commercial E.Leclerc',
    description: 'Maintenance et modernisation des installations électriques',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NjQxMDQxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Immeuble de bureaux SPIE',
    description: 'Installation électrique et réseau pour nouveaux locaux professionnels',
  },
  {
    image: 'https://images.unsplash.com/photo-1772992552302-825bb23ffb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGluZyUyMGluc3RhbGxhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzY0MTA0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Éclairage commercial',
    description: 'Système d\'éclairage professionnel pour magasin ALDI',
  },
  {
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2NDEwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Infrastructure SNCF',
    description: 'Maintenance préventive des installations électriques en gare',
  },
];

type ClientType = 'particuliers' | 'professionnels';

function App() {
  const [clientType, setClientType] = useState<ClientType>('particuliers');

  const isParticuliers = clientType === 'particuliers';
  const services = isParticuliers ? SERVICES_PARTICULIERS : SERVICES_PROFESSIONNELS;
  const testimonials = isParticuliers ? TESTIMONIALS_PARTICULIERS : TESTIMONIALS_PROFESSIONNELS;
  const realizations = isParticuliers ? REALIZATIONS_PARTICULIERS : REALIZATIONS_PROFESSIONNELS;
  const tagline = isParticuliers
    ? 'Intervention rapide et devis gratuit pour tous vos travaux d\'électricité à domicile'
    : 'Solutions électriques professionnelles pour entreprises, commerces et industries';

  return (
    <div className="min-h-screen">
      <Header
        profession={CONFIG.profession}
        phone={CONFIG.phone}
        companyName={CONFIG.companyName}
      />

      {/* Navigation Particuliers / Professionnels */}
      <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 py-3">
            <button
              onClick={() => setClientType('particuliers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all ${
                isParticuliers
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Particuliers</span>
            </button>
            <button
              onClick={() => setClientType('professionnels')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all ${
                !isParticuliers
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Professionnels</span>
            </button>
          </div>
        </div>
      </div>

      <main className="pt-16">
        <Hero
          profession={CONFIG.profession}
          city={CONFIG.city}
          tagline={tagline}
          phone={CONFIG.phone}
          heroImage={CONFIG.heroImage}
        />

        <Services services={services} />

        <ConversionSection phone={CONFIG.phone} />

        <Realizations realizations={realizations} />

        <Testimonials testimonials={testimonials} averageRating={4.9} />

        {!isParticuliers && <TrustedBy />}

        <ServiceArea mainCity={CONFIG.city} surroundingCities={SURROUNDING_CITIES} />

        <Contact
          phone={CONFIG.phone}
          email={CONFIG.email}
          profession={CONFIG.profession}
          city={CONFIG.city}
        />
      </main>

      <Footer
        profession={CONFIG.profession}
        city={CONFIG.city}
        phone={CONFIG.phone}
        email={CONFIG.email}
      />
    </div>
  );
}

export default App;