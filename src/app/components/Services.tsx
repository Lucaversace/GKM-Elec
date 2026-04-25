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
    <section className="py-16 md:py-20 bg-brand-dark-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
          Nos services
        </h2>
        <p className="text-center text-brand-dark-muted mb-12 max-w-2xl mx-auto">
          Des solutions adaptées à tous vos besoins. Intervention rapide et travail soigné garanti.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.25rem)] max-w-sm border-t-4 border-brand-blue"
            >
              <div className="w-12 h-12 bg-brand-dark-light rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-dark font-montserrat">{service.title}</h3>
              <p className="text-brand-dark-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
