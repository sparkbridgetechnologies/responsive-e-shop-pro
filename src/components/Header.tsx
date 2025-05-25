
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-light text-gray-900 hover:text-gray-700"
            >
              GlowSkin
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900 font-light">Home</button>
            <button onClick={() => navigate('/products')} className="text-gray-600 hover:text-gray-900 font-light">Shop</button>
            <button onClick={() => navigate('/about')} className="text-gray-600 hover:text-gray-900 font-light">About</button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-gray-900 font-light">Contact</button>
            <button onClick={() => navigate('/track')} className="text-gray-600 hover:text-gray-900 font-light">Track Order</button>
            {user?.email === 'admin@glowskin.com' && (
              <button onClick={() => navigate('/admin')} className="text-yellow-600 hover:text-yellow-700 font-medium">Admin</button>
            )}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="hidden md:flex text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <div className="hidden md:flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => navigate('/orders')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate('/auth')}
                className="hidden md:flex text-gray-600 hover:text-gray-900"
              >
                <User className="h-5 w-5" />
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/cart')}
              className="relative text-gray-600 hover:text-gray-900"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
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
                <button onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">Home</button>
                <button onClick={() => { navigate('/products'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">Shop</button>
                <button onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">About</button>
                <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">Contact</button>
                <button onClick={() => { navigate('/track'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">Track Order</button>
                
                {user ? (
                  <>
                    <button onClick={() => { navigate('/orders'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">My Orders</button>
                    {user.email === 'admin@glowskin.com' && (
                      <button onClick={() => { navigate('/admin'); setIsMenuOpen(false); }} className="text-yellow-600 hover:text-yellow-700 font-medium py-2 text-left">Admin Panel</button>
                    )}
                    <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">Sign Out</button>
                  </>
                ) : (
                  <button onClick={() => { navigate('/auth'); setIsMenuOpen(false); }} className="text-gray-600 hover:text-gray-900 font-light py-2 text-left">Sign In</button>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
