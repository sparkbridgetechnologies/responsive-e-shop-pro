
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-500">GlowSkin</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 border-gray-300 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Input placeholder="Search products..." className="border-gray-300" />
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">Home</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">Shop</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">About</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
