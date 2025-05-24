
import { Zap, Shield, Sun, Droplets, Sparkles, Heart } from "lucide-react";

const concerns = [
  {
    icon: Zap,
    name: "Anti-Aging",
    description: "Reduce fine lines and wrinkles",
    productCount: "24 products",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Droplets,
    name: "Hydration",
    description: "Deep moisture for dry skin",
    productCount: "18 products",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Sparkles,
    name: "Brightening",
    description: "Even skin tone and glow",
    productCount: "16 products",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Shield,
    name: "Acne Care",
    description: "Clear and prevent breakouts",
    productCount: "22 products",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Sun,
    name: "Sun Protection",
    description: "Shield from UV damage",
    productCount: "12 products",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Heart,
    name: "Sensitive Skin",
    description: "Gentle, soothing formulas",
    productCount: "14 products",
    color: "bg-pink-100 text-pink-600"
  }
];

export const ShopByConcern = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Shop By Concern
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Find targeted solutions for your specific skin needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white border border-transparent hover:border-gray-100"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${concern.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <concern.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  {concern.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-light">
                  {concern.description}
                </p>
                <span className="text-xs text-gray-500 font-light">
                  {concern.productCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
