
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your
            <span className="text-orange-500"> Perfect Glow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium skincare products crafted with natural ingredients to give you radiant, healthy skin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
