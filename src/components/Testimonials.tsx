
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "The Vitamin C serum has completely transformed my skin. I've noticed a significant improvement in brightness and texture.",
    image: "/placeholder.svg",
    product: "Vitamin C Serum"
  },
  {
    id: 2,
    name: "Emily Chen",
    rating: 5,
    text: "I've been using the night cream for 3 months and my skin has never looked better. Highly recommend!",
    image: "/placeholder.svg",
    product: "Retinol Night Cream"
  },
  {
    id: 3,
    name: "Jessica Davis",
    rating: 5,
    text: "Finally found a cleanser that doesn't dry out my sensitive skin. This brand is amazing!",
    image: "/placeholder.svg",
    product: "Gentle Cleanser"
  }
];

export const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Real reviews from real customers who love our products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <blockquote className="text-gray-700 mb-6 font-light italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-light text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 font-light">
                    Verified buyer of {testimonial.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
