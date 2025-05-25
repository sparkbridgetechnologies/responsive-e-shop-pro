
import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  image_url: string;
  rating: number;
  reviews_count: number;
  is_new: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const toggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to add items to wishlist.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    try {
      if (isWishlisted) {
        await supabase
          .from('wishlist')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', product.id);
        setIsWishlisted(false);
        toast({ title: "Removed from wishlist" });
      } else {
        await supabase
          .from('wishlist')
          .insert({ user_id: user.id, product_id: product.id });
        setIsWishlisted(true);
        toast({ title: "Added to wishlist" });
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await addToCart(product.id);
  };

  return (
    <div 
      className="group bg-white rounded-none hover:shadow-lg transition-shadow duration-300 border-0 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative">
        <AspectRatio ratio={3/4}>
          <img
            src={`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop`}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        
        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
          onClick={toggleWishlist}
        >
          <Heart
            className={`h-4 w-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>

        {/* Quick add to cart overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-light text-gray-900 mb-3 text-lg">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-500 font-light">
            ({product.reviews_count})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-light text-gray-900">
            ₹{product.price}
          </span>
          {product.original_price && (
            <span className="text-sm text-gray-400 line-through font-light">
              ₹{product.original_price}
            </span>
          )}
          {product.is_new && (
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium ml-auto">
              NEW
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
