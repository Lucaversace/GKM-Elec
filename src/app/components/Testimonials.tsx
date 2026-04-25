import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  averageRating: number;
}

export function Testimonials({ testimonials, averageRating }: TestimonialsProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-brand-blue fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Ce que disent nos clients</h2>
          <div className="text-xl font-semibold text-brand-dark">Note moyenne : {averageRating}/5</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-dark-light p-8 rounded-2xl relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-blue/20" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-blue fill-current" />
                ))}
              </div>
              <p className="text-brand-dark-muted mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-brand-dark-light/50 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-brand-dark-muted/70">
                  {testimonial.city} • {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
