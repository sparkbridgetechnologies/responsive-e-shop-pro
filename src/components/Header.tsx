
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light text-gray-900">GlowSkin</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light">Contact</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="hidden md:flex text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                0
              </span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-6">
            <div className="flex flex-col space-y-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-light py-2">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-light py-2">Shop</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-light py-2">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-light py-2">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
