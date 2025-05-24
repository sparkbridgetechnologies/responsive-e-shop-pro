
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Discover Your
            <br />
            <span className="font-normal">Perfect Glow</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto font-light">
            Premium skincare products crafted with natural ingredients to give you radiant, healthy skin
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-4 text-base font-medium rounded-full">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};
