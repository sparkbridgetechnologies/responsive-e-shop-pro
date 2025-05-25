
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check, Sparkles } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "Welcome to the GlowSkin family! ✨",
        description: "You'll receive 15% off your first order in your inbox shortly.",
      });
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Welcome to the Glow! ✨
            </h2>
            <p className="text-xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
              Thank you for subscribing! Check your inbox for your exclusive 15% discount code and start your journey to radiant skin.
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Sparkles className="w-5 h-5" />
              <span className="font-light">Your skincare journey begins now</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-white mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Stay in the Glow
            </h2>
            <Sparkles className="w-8 h-8 text-white ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and get <span className="font-semibold bg-white/20 px-3 py-1 rounded-full">15% off</span> your first order, plus exclusive skincare tips and early access to new products.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 h-14 text-base focus:bg-white/30 transition-all duration-300"
                disabled={isLoading}
              />
              <Button 
                type="submit"
                size="lg"
                disabled={isLoading}
                className="bg-black/80 hover:bg-black text-white px-8 h-14 text-base font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Subscribing...
                  </div>
                ) : (
                  "Subscribe & Save"
                )}
              </Button>
            </div>
            
            <p className="text-white/80 text-sm mt-6 font-light">
              🎁 No spam, unsubscribe at any time. By subscribing you agree to our Terms & Privacy Policy.
            </p>
          </form>
          
          <div className="flex items-center justify-center mt-8 space-x-8 text-white/70">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span className="text-sm">Exclusive Offers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span className="text-sm">Skincare Tips</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span className="text-sm">Early Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
