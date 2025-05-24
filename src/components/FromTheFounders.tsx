
export const FromTheFounders = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-yellow-600 font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
              From the Founders
            </h2>
            <p className="text-gray-600 text-lg mb-6 font-light">
              "We started GlowSkin with a simple mission: to create effective, natural skincare that works for everyone. After years of struggling with our own skin concerns and being disappointed by harsh chemicals, we decided to craft something different."
            </p>
            <p className="text-gray-600 mb-8 font-light">
              Our journey began in a small lab, testing countless formulations until we found the perfect balance of natural ingredients and proven science. Every product is a testament to our commitment to your skin's health and radiance.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white overflow-hidden">
                  <img src="/placeholder.svg" alt="Founder 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white overflow-hidden">
                  <img src="/placeholder.svg" alt="Founder 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-gray-900 font-light">Sarah & Emma</p>
                <p className="text-gray-500 text-sm font-light">Co-Founders</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Founders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
