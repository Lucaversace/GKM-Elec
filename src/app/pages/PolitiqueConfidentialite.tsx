import { useEffect } from 'react';

export function PolitiqueConfidentialite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-20 bg-brand-dark-light">
      <div className="max-w-4xl mx-auto px-4 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 border-b pb-4">Politique de Confidentialité</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">1. Collecte de l'information</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            Nous recueillons des informations lorsque vous nous contactez via notre adresse e-mail ou par téléphone. Les informations recueillies incluent votre nom, votre adresse e-mail et votre numéro de téléphone.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">2. Utilisation des informations</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
          </p>
          <ul className="list-disc list-inside text-brand-dark-muted space-y-2 ml-4">
            <li>Vous contacter par e-mail ou par téléphone</li>
            <li>Répondre à vos besoins individuels et demandes de devis</li>
            <li>Améliorer notre service client et vos besoins de prise en charge</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">3. Confidentialité du commerce en ligne</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">4. Divulgation à des tiers</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web, tant que ces parties conviennent de garder ces informations confidentielles.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">5. Protection des informations</h2>
          <p className="text-brand-dark-muted mb-4 leading-relaxed">
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne (SSL).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-4">6. Consentement</h2>
          <p className="text-brand-dark-muted leading-relaxed">
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
        </section>
      </div>
    </div>
  );
}
