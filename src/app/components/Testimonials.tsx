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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils nous font confiance
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(averageRating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="font-bold text-xl ml-2">{averageRating}/5</span>
          </div>
          <p className="text-gray-600">
            Basé sur {testimonials.length} avis clients vérifiés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md relative"
            >
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
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
