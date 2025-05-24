
import { Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">GlowSkin</h3>
            <p className="text-gray-600 mb-8 font-light">
              Premium skincare products for radiant, healthy skin. Natural ingredients, proven results.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 font-light">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 font-light">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 font-light">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 font-light">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 font-light">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 font-light">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-light mb-6 text-gray-900">Stay Updated</h4>
            <p className="text-gray-600 mb-6 font-light">Subscribe to get updates on new products and offers</p>
            <div className="flex flex-col space-y-4">
              <Input 
                placeholder="Enter your email" 
                className="border-gray-200 focus:border-gray-400 rounded-none"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-none font-light">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <div className="flex items-center text-gray-500 font-light">
                <Mail className="h-4 w-4 mr-2" />
                support@glowskin.com
              </div>
              <div className="flex items-center text-gray-500 font-light">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
            </div>
            <p className="text-gray-400 text-sm font-light">
              © 2024 GlowSkin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
