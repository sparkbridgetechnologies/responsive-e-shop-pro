
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Vitamin C in Skincare: Revolutionary Breakthrough",
    excerpt: "Discover how vitamin C transforms your skin at the cellular level and why it's essential for your daily routine. Learn about the latest research and breakthrough formulations.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&h=500&fit=crop",
    category: "Science",
    content: `
      <p>Vitamin C is one of the most powerful antioxidants in skincare, known for its ability to brighten skin, stimulate collagen production, and protect against environmental damage. Recent studies have shown that L-ascorbic acid, the most potent form of vitamin C, can penetrate deep into the dermis when properly formulated.</p>

      <h3>Understanding Vitamin C Forms</h3>
      <p>There are several forms of vitamin C used in skincare, each with unique benefits:</p>
      <ul>
        <li><strong>L-Ascorbic Acid:</strong> The most potent and well-researched form</li>
        <li><strong>Magnesium Ascorbyl Phosphate:</strong> More stable, suitable for sensitive skin</li>
        <li><strong>Sodium Ascorbyl Phosphate:</strong> Gentle with antimicrobial properties</li>
        <li><strong>Ascorbyl Glucoside:</strong> Stable and gradually releases vitamin C</li>
      </ul>

      <h3>The Science of Absorption</h3>
      <p>The key to vitamin C efficacy lies in proper formulation. The pH level must be below 4 for L-ascorbic acid to remain stable and penetrate the skin effectively. Our research shows that combining vitamin C with vitamin E and ferulic acid creates a synergistic effect that enhances stability and absorption by up to 8 times.</p>

      <h3>Optimal Concentration and Usage</h3>
      <p>Clinical studies demonstrate that concentrations between 10-20% provide maximum benefits without irritation for most skin types. Start with lower concentrations and gradually increase as your skin builds tolerance. Apply vitamin C serum in the morning for maximum antioxidant protection throughout the day.</p>

      <h3>Expected Results and Timeline</h3>
      <p>With consistent use, you can expect to see:</p>
      <ul>
        <li>Improved skin brightness within 2-4 weeks</li>
        <li>Reduced appearance of dark spots in 6-8 weeks</li>
        <li>Enhanced skin firmness and reduced fine lines in 8-12 weeks</li>
        <li>Overall skin texture improvement in 3-6 months</li>
      </ul>

      <blockquote>
        "Vitamin C is not just a trend - it's a scientifically proven powerhouse ingredient that should be a cornerstone of any effective skincare routine." - Dr. Sarah Johnson
      </blockquote>

      <p>Remember to always use sunscreen when incorporating vitamin C into your routine, as it can make your skin more photosensitive initially. The long-term benefits of consistent vitamin C use include stronger, more resilient skin that's better equipped to handle environmental stressors.</p>
    `
  },
  // Add more blog posts here with full content...
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogPost = blogPosts.find(post => post.id === parseInt(id || '1'));

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Blog post not found</h1>
          <Button onClick={() => navigate('/')} className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Return Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-[21/9] bg-gradient-to-r from-black/50 to-transparent">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-white hover:text-yellow-400 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="space-y-4">
              <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                {blogPost.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="font-light">{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-light">{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-light">{blogPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                {blogPost.excerpt}
              </p>
              
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{blogPost.author}</p>
                    <p className="text-sm text-gray-600">Skincare Expert</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-light">
                  A board-certified dermatologist with over 15 years of experience in cosmetic and medical dermatology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogDetail;
