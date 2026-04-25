export function TrustedBy() {
  const clients = [
    { name: 'SPIE', logo: '/logos-clients/spie.png' },
    { name: 'E.LECLERC', logo: '/logos-clients/leclerc.png' },
    { name: 'ALDI', logo: '/logos-clients/aldi.svg.png' },
    { name: 'EDF', logo: '/logos-clients/edf.svg.png' },
    { name: 'ROIRET', logo: '/logos-clients/roiret.webp' },
    { name: 'ACTION', logo: '/logos-clients/action.svg.png' },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-brand-dark-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center">
          Ils nous ont fait confiance
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll gap-8 md:gap-20 w-max items-center py-4">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
