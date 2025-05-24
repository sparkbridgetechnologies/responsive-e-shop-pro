
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Vitamin C Serum",
    price: 39.99,
    originalPrice: 49.99,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 156,
    isNew: true
  },
  {
    id: 2,
    name: "Hydrating Face Cream",
    price: 29.99,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 98,
    isNew: false
  },
  {
    id: 3,
    name: "Gentle Cleanser",
    price: 24.99,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 203,
    isNew: false
  },
  {
    id: 4,
    name: "Retinol Night Cream",
    price: 54.99,
    originalPrice: 64.99,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 89,
    isNew: true
  },
  {
    id: 5,
    name: "Hyaluronic Acid Serum",
    price: 34.99,
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 142,
    isNew: false
  },
  {
    id: 6,
    name: "Exfoliating Scrub",
    price: 19.99,
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 76,
    isNew: false
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our bestselling skincare products loved by thousands of customers worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
