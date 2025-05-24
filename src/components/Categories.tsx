
import { Sparkles, Droplets, Sun, Moon } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Cleansers",
    description: "Gentle daily cleansers for all skin types",
    icon: Droplets,
    image: "/placeholder.svg",
    count: "12 products"
  },
  {
    id: 2,
    name: "Serums",
    description: "Concentrated treatments for specific concerns",
    icon: Sparkles,
    image: "/placeholder.svg",
    count: "8 products"
  },
  {
    id: 3,
    name: "Day Care",
    description: "Protection and hydration for daytime",
    icon: Sun,
    image: "/placeholder.svg",
    count: "15 products"
  },
  {
    id: 4,
    name: "Night Care",
    description: "Repair and restore while you sleep",
    icon: Moon,
    image: "/placeholder.svg",
    count: "10 products"
  }
];

export const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Find the perfect products for your skincare routine
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <category.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-light">
                  {category.description}
                </p>
                <span className="text-xs text-gray-500 font-light">
                  {category.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
