import { Wrench, Droplet, Thermometer, AlertCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nos services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Des solutions adaptées à tous vos besoins. Intervention rapide et travail soigné garanti.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
