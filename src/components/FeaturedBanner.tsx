
export const FeaturedBanner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">New Arrival</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
              Vitamin C Glow Serum
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-light">
              Brighten your skin with our powerful vitamin C serum. Reduce dark spots, boost collagen, and achieve that natural glow.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-light text-gray-900">$39.99</span>
              <span className="text-lg text-gray-400 line-through">$59.99</span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">33% OFF</span>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-medium transition-colors">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Vitamin C Serum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
