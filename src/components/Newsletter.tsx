
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Stay in the Glow
        </h2>
        <p className="text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto">
          Subscribe to our newsletter and get 15% off your first order, plus exclusive skincare tips and early access to new products.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="Enter your email address" 
              className="flex-1 bg-white border-0 text-gray-900 placeholder:text-gray-500 h-14 text-base"
            />
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 h-14 text-base font-medium whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-4 font-light">
            No spam, unsubscribe at any time. By subscribing you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};
