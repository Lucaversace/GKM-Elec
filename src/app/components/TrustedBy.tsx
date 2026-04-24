export function TrustedBy() {
  const clients = [
    { name: 'SPIE', logo: 'SPIE' },
    { name: 'SNCF', logo: 'SNCF' },
    { name: 'E.LECLERC', logo: 'E.LECLERC' },
    { name: 'ALDI', logo: 'ALDI' },
    { name: 'EDF', logo: 'EDF' },
    { name: 'ROIRET', logo: 'ROIRET' },
    { name: 'ACTION', logo: 'ACTION' },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 mb-12">
          Ils nous ont fait confiance
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-16">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] h-24 px-8"
              >
                <div className="text-2xl font-bold text-gray-400 whitespace-nowrap">
                  {client.logo}
                </div>
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
