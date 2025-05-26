
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useBlogs } from '@/hooks/useBlogs';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById, loading } = useBlogs();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const blog = getBlogById(id || '');

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button
            onClick={() => navigate('/')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-medium">
              {blog.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blog.published_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min read
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{blog.author}</p>
              <p className="text-sm text-gray-500">Skincare Expert</p>
            </div>
          </div>
        </div>

        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
            {blog.excerpt}
          </div>
          
          <div 
            className="blog-content text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              Discover our curated collection of premium skincare products designed to give you the radiant, healthy skin you deserve.
            </p>
            <Button
              onClick={() => navigate('/products')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg"
            >
              Shop Products
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
