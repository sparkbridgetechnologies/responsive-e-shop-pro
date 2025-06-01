
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { mockProducts } from '@/data/mockData';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  original_price?: number;
  image_url: string;
  category: string;
  concern?: string;
  rating: number;
  reviews_count: number;
  stock_quantity: number;
  is_featured: boolean;
  is_new: boolean;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.log('No products in database, using mock data');
        setProducts(mockProducts);
      } else if (data && data.length > 0) {
        setProducts(data);
      } else {
        // No products in database, use mock data
        setProducts(mockProducts);
      }
    } catch (err) {
      console.log('Error fetching products, using mock data:', err);
      setProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, refetch: fetchProducts };
};
