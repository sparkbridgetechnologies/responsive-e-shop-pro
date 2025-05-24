
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">GlowSkin</h3>
            <p className="text-gray-300 mb-6">
              Premium skincare products for radiant, healthy skin. Natural ingredients, proven results.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Track Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to get updates on new products and offers</p>
            <div className="flex flex-col space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                support@glowskin.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                New York, NY
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 GlowSkin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
