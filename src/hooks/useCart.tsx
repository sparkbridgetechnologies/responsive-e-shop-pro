
import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  products: {
    id: string;
    name: string;
    price: number;
    image_url: string;
  };
}

interface LocalCartItem {
  product_id: string;
  quantity: number;
  name: string;
  price: number;
  image_url: string;
}

interface CartContextType {
  items: CartItem[];
  loading: boolean;
  addToCart: (productId: string, quantity?: number, productData?: any) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalAmount: number;
  itemCount: number;
  syncLocalCartToUser: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Load local storage cart items
  const getLocalCart = (): LocalCartItem[] => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  };

  const setLocalCart = (items: LocalCartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const syncLocalCartToUser = async () => {
    if (!user) return;
    
    const localCart = getLocalCart();
    if (localCart.length === 0) return;

    try {
      for (const item of localCart) {
        await supabase
          .from('cart')
          .upsert(
            { user_id: user.id, product_id: item.product_id, quantity: item.quantity },
            { onConflict: 'user_id,product_id' }
          );
      }
      localStorage.removeItem('cart');
      await fetchCartItems();
    } catch (error) {
      console.error('Error syncing local cart:', error);
    }
  };

  const fetchCartItems = async () => {
    if (!user) {
      // Load from local storage if not logged in
      const localCart = getLocalCart();
      const formattedItems: CartItem[] = localCart.map((item, index) => ({
        id: `local-${index}`,
        product_id: item.product_id,
        quantity: item.quantity,
        products: {
          id: item.product_id,
          name: item.name,
          price: item.price,
          image_url: item.image_url
        }
      }));
      setItems(formattedItems);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cart')
        .select(`
          id,
          product_id,
          quantity,
          products (
            id,
            name,
            price,
            image_url
          )
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [user]);

  useEffect(() => {
    if (user) {
      syncLocalCartToUser();
    }
  }, [user]);

  const addToCart = async (productId: string, quantity = 1, productData?: any) => {
    if (!user) {
      // Add to local storage
      const localCart = getLocalCart();
      const existingItem = localCart.find(item => item.product_id === productId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        localCart.push({
          product_id: productId,
          quantity,
          name: productData?.name || 'Product',
          price: productData?.price || 0,
          image_url: productData?.image_url || ''
        });
      }
      
      setLocalCart(localCart);
      await fetchCartItems();
      
      toast({
        title: "Added to cart",
        description: "Item has been added to your cart.",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('cart')
        .upsert(
          { user_id: user.id, product_id: productId, quantity },
          { onConflict: 'user_id,product_id' }
        );

      if (error) throw error;
      
      await fetchCartItems();
      toast({
        title: "Added to cart",
        description: "Item has been added to your cart.",
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart.",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!user) {
      const localCart = getLocalCart();
      const updatedCart = localCart.filter(item => item.product_id !== productId);
      setLocalCart(updatedCart);
      await fetchCartItems();
      return;
    }

    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;
      await fetchCartItems();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!user) {
      const localCart = getLocalCart();
      const item = localCart.find(item => item.product_id === productId);
      if (item) {
        item.quantity = quantity;
        setLocalCart(localCart);
        await fetchCartItems();
      }
      return;
    }

    try {
      const { error } = await supabase
        .from('cart')
        .update({ quantity })
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;
      await fetchCartItems();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const clearCart = async () => {
    if (!user) {
      localStorage.removeItem('cart');
      setItems([]);
      return;
    }

    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;
      setItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + (item.products.price * item.quantity),
    0
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      loading,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalAmount,
      itemCount,
      syncLocalCartToUser,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
