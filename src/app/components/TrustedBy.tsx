export function TrustedBy() {
  const clients = [
    { name: 'SPIE', logo: '/logos-clients/spie.png' },
    { name: 'E.LECLERC', logo: '/logos-clients/leclerc.png' },
    { name: 'ALDI', logo: '/logos-clients/aldi.svg.png' },
    { name: 'EDF', logo: '/logos-clients/edf.svg.png' },
    { name: 'ROIRET', logo: '/logos-clients/roiret.webp' },
    { name: 'ACTION', logo: '/logos-clients/action.svg.png' },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-brand-dark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
          Ils nous ont fait confiance
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-16">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] h-24 px-8"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-12 w-auto transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
