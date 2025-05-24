
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WatchAndShop = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Watch and Shop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Discover our products in action with expert tutorials and customer stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Morning Skincare Routine",
              duration: "5:32",
              thumbnail: "/placeholder.svg",
              description: "Start your day with the perfect glow"
            },
            {
              title: "Vitamin C Serum Guide",
              duration: "3:45",
              thumbnail: "/placeholder.svg",
              description: "How to apply for maximum benefits"
            },
            {
              title: "Customer Transformation",
              duration: "2:18",
              thumbnail: "/placeholder.svg",
              description: "Real results from real customers"
            }
          ].map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-2">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {video.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};
