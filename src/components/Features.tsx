
import { Shield, Leaf, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "100% natural and organic ingredients sourced responsibly"
  },
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "All products are tested and approved by certified dermatologists"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by beauty experts and loved by customers worldwide"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50 with fast delivery"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Why Choose GlowSkin
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            We're committed to providing the highest quality skincare products with proven results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
