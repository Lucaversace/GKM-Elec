import { useEffect } from 'react';

export function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-20 bg-brand-dark-light">
      <div className="max-w-4xl mx-auto px-4 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 border-b pb-4">Mentions Légales</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">1. Présentation du site</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <span className="font-semibold">gkm-elec.fr</span> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul className="list-disc list-inside text-brand-dark-muted space-y-2 ml-4">
            <li><span className="font-semibold text-brand-dark">Propriétaire :</span> GKM Elec – Entreprise individuelle – Saint-Étienne, France</li>
            <li><span className="font-semibold text-brand-dark">Responsable publication :</span> GKM Elec – contact@gkm-elec.fr</li>
            <li><span className="font-semibold text-brand-dark">Webmaster :</span> GKM Elec</li>
            <li><span className="font-semibold text-brand-dark">Hébergeur :</span> Vercel Inc. – 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">2. Conditions générales d’utilisation</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">3. Description des services fournis</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            Le site a pour objet de fournir une information concernant l’ensemble des activités de la société. GKM Elec s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">4. Propriété intellectuelle et contrefaçons</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            GKM Elec est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-4">5. Droit applicable et attribution de juridiction</h2>
          <p className="text-brand-dark-muted leading-relaxed">
            Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Saint-Étienne.
          </p>
        </section>
      </div>
    </div>
  );
}
