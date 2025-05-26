
import { useState, useEffect } from 'react';
import { mockBlogs } from '@/data/mockData';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  published_date: string;
  category: string;
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setBlogs(mockBlogs);
      setLoading(false);
    }, 500);
  }, []);

  const getBlogById = (id: string) => {
    return blogs.find(blog => blog.id === id);
  };

  return { blogs, loading, getBlogById };
};
