import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ConversionSection } from './components/ConversionSection';
import { Testimonials } from './components/Testimonials';
import { TrustedBy } from './components/TrustedBy';
import { ServiceArea } from './components/ServiceArea';
import { Contact } from './components/Contact';
import { Realizations } from './components/Realizations';
import { Zap, Home as HomeIcon, Building2, Network } from 'lucide-react';

const CONFIG = {
  companyName: 'GKM Elec',
  profession: 'Électricité & Télécommunications',
  city: 'Saint-Étienne et Lyon',
  tagline: 'Intervention rapide et devis gratuit pour tous vos travaux d\'électricité et de télécommunications',
  phone: '06 26 80 80 98',
  email: 'contact@gkm-elec.fr',
  heroImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2NDEwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
};

const SERVICES_PARTICULIERS = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Dépannage électrique',
    description: 'Intervention rapide pour tous vos problèmes électriques. Panne de courant, disjoncteur, court-circuit. Disponible 7j/7.',
  },
  {
    icon: <HomeIcon className="w-6 h-6" />,
    title: 'Installation résidentielle',
    description: 'Installation complète pour votre logement : prises, éclairage, tableau électrique, mise aux normes. Travail soigné garanti.',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Rénovation électrique',
    description: 'Remise aux normes complète de votre installation électrique. Diagnostic gratuit et conseil personnalisé.',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Réseau fibre optique',
    description: 'Dépannage de fibre optique à domicile. Installation de prises, optimisation du signal et configuration de votre réseau domestique.',
  },
];

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
    icon: <HomeIcon className="w-6 h-6" />,
    title: 'Câblage réseau & télécom',
    description: 'Installation de réseaux informatiques, fibre optique et systèmes de télécommunication pour votre entreprise.',
  },
];

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

const SURROUNDING_CITIES = [
  'Saint-Étienne', 'Lyon', 'Villeurbanne', 'Saint-Priest', 'Vénissieux', 'Caluire-et-Cuire', 'Firminy', 'Rive-de-Gier', 'Andrézieux-Bouthéon', 'Roanne', 'Vienne', 'Givors',
];

const REALIZATIONS_PARTICULIERS = [
  {
    imageBefore: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558444458-2f16ca003889?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1000&auto=format&fit=crop',
    ],
    title: 'Rénovation Tableau Électrique',
    description: 'Mise aux normes complète d\'un tableau électrique vétuste dans une maison des années 70.',
    problematic: 'Risque d\'incendie dû à des fusibles obsolètes et absence de protection différentielle sur plusieurs circuits.',
    tasks: [
      'Dépose de l\'ancien tableau en bois',
      'Installation d\'un coffret 3 rangées Schneider Electric',
      'Pose de 3 interrupteurs différentiels 30mA',
      'Repérage et étiquetage complet de l\'installation',
      'Test de continuité et de terre'
    ]
  },
  {
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1000&auto=format&fit=crop',
    ],
    title: 'Installation Éclairage LED Connecté',
    description: 'Transformation lumineuse d\'un salon avec intégration de systèmes intelligents.',
    problematic: 'Éclairage unique central blafard et manque de flexibilité dans les ambiances lumineuses.',
    tasks: [
      'Création de saignées pour nouveaux points lumineux',
      'Installation de spots LED encastrés dimmables',
      'Mise en place d\'un contrôleur intelligent compatible smartphone',
      'Installation de rubans LED en corniche pour éclairage indirect',
      'Optimisation de la consommation énergétique'
    ]
  },
];

const REALIZATIONS_PROFESSIONNELS = [
  {
    imageBefore: 'https://images.unsplash.com/photo-1558444458-5cd05bcbd26f?q=80&w=1000&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558444458-5cd05bcbd26f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    ],
    title: 'Baie Informatique & Réseau Entreprise',
    description: 'Réorganisation complète du local technique et déploiement de la fibre optique.',
    problematic: 'Nœud de câbles inextricable causant des pannes réseau fréquentes et difficulté de maintenance.',
    tasks: [
      'Audit du réseau existant et identification des câbles',
      'Installation d\'une baie de brassage 42U ventilée',
      'Câblage structuré Cat 6A pour 50 postes de travail',
      'Migration vers un switch manageable 48 ports PoE',
      'Certification des liens réseau aux normes ISO/IEC'
    ]
  },
  {
    imageBefore: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
    ],
    title: 'Électricité Industrielle ALDI',
    description: 'Maintenance et upgrade des systèmes de puissance en entrepôt logistique.',
    problematic: 'Coupures de courant intempestives sur les lignes de convoyage bridant la productivité.',
    tasks: [
      'Analyse harmonique du réseau électrique',
      'Remplacement des disjoncteurs moteurs défaillants',
      'Installation d\'une batterie de condensateurs pour compensation',
      'Mise en place d\'une surveillance thermique par caméra IR',
      'Rapport de conformité Q18'
    ]
  },
];

interface HomeProps {
  clientType: 'particuliers' | 'professionnels';
}

export function Home({ clientType }: HomeProps) {
  const isParticuliers = clientType === 'particuliers';
  const services = isParticuliers ? SERVICES_PARTICULIERS : SERVICES_PROFESSIONNELS;
  const testimonials = isParticuliers ? TESTIMONIALS_PARTICULIERS : TESTIMONIALS_PROFESSIONNELS;
  const realizations = isParticuliers ? REALIZATIONS_PARTICULIERS : REALIZATIONS_PROFESSIONNELS;
  const tagline = isParticuliers
    ? 'Intervention rapide et devis gratuit pour tous vos travaux d\'électricité à domicile'
    : 'Solutions électriques professionnelles pour entreprises, commerces et industries';

  return (
    <main className="pt-28 md:pt-32">
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
  );
}
