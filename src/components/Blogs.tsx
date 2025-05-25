
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Vitamin C in Skincare: Revolutionary Breakthrough",
    excerpt: "Discover how vitamin C transforms your skin at the cellular level and why it's essential for your daily routine. Learn about the latest research and breakthrough formulations.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=300&fit=crop",
    category: "Science",
    content: "Vitamin C is one of the most powerful antioxidants in skincare, known for its ability to brighten skin, stimulate collagen production, and protect against environmental damage. Recent studies have shown that L-ascorbic acid, the most potent form of vitamin C, can penetrate deep into the dermis when properly formulated. The key is finding the right concentration - typically between 10-20% for maximum efficacy without irritation. Our latest vitamin C serum combines this with vitamin E and ferulic acid for enhanced stability and absorption."
  },
  {
    id: 2,
    title: "Building the Perfect Morning Skincare Routine: Expert Guide",
    excerpt: "A comprehensive step-by-step guide to creating an effective morning routine that protects and nourishes your skin throughout the day.",
    author: "Emma Williams",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop",
    category: "Routine",
    content: "The perfect morning skincare routine should cleanse, protect, and hydrate your skin for the day ahead. Start with a gentle cleanser to remove overnight buildup, followed by a vitamin C serum for antioxidant protection. Apply a moisturizer suited to your skin type, and finish with broad-spectrum SPF 30 or higher. The key is consistency and using products that work synergistically together. Remember to introduce new products gradually and always patch test first."
  },
  {
    id: 3,
    title: "Natural vs Synthetic: Debunking Skincare Myths",
    excerpt: "We break down the myths and facts about natural and synthetic ingredients in skincare products, helping you make informed choices.",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    category: "Ingredients",
    content: "The natural vs synthetic debate in skincare is often misleading. Many synthetic ingredients are actually safer and more effective than their natural counterparts. For example, synthetic hyaluronic acid is identical to the natural version but more stable and pure. What matters most is the safety profile, efficacy, and how well your skin tolerates the ingredient. Some of the most effective skincare ingredients, like retinol and niacinamide, can be both naturally derived and synthetically produced with equal benefits."
  },
  {
    id: 4,
    title: "The Ultimate Guide to Anti-Aging: What Really Works",
    excerpt: "Evidence-based approaches to anti-aging skincare, from proven ingredients to professional treatments that deliver real results.",
    author: "Dr. Lisa Park",
    date: "March 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    category: "Anti-Aging",
    content: "Effective anti-aging skincare focuses on three key areas: prevention, repair, and maintenance. Retinoids remain the gold standard for anti-aging, stimulating collagen production and accelerating cell turnover. Peptides support skin structure, while antioxidants like vitamin C protect against future damage. Professional treatments like chemical peels and microneedling can enhance results. The most important anti-aging step? Daily sunscreen use, which prevents 80% of visible aging."
  },
  {
    id: 5,
    title: "Sensitive Skin Solutions: Gentle Yet Effective Care",
    excerpt: "Expert strategies for caring for sensitive skin without compromising on results. Learn which ingredients to embrace and which to avoid.",
    author: "Dr. Jennifer Walsh",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=400&h=300&fit=crop",
    category: "Sensitive Skin",
    content: "Sensitive skin requires a minimalist approach focused on barrier repair and inflammation reduction. Look for ingredients like ceramides, niacinamide, and centella asiatica that calm and strengthen the skin. Avoid common irritants like fragrances, essential oils, and high concentrations of acids. Always introduce one new product at a time and maintain a simple routine. The key is finding the right balance between effective ingredients and gentle formulations."
  },
  {
    id: 6,
    title: "Hydration Heroes: The Best Moisturizing Ingredients",
    excerpt: "Dive deep into the world of hydrating ingredients and learn how to keep your skin plump, smooth, and healthy year-round.",
    author: "Sarah Thompson",
    date: "March 2, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=300&fit=crop",
    category: "Hydration",
    content: "Effective hydration involves both humectants that draw water to the skin and occlusives that lock it in. Hyaluronic acid can hold 1000 times its weight in water, making it the ultimate hydration hero. Glycerin, sodium PCA, and beta-glucan are other excellent humectants. For occlusives, look for ceramides, squalane, and shea butter. Layer these ingredients for maximum hydration: humectants first, followed by moisturizers and occlusives."
  }
];

export const Blogs = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId: number) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Expert insights, skincare tips, and the latest research to help you achieve your best skin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => handleBlogClick(post.id)}
            >
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 text-sm font-medium uppercase tracking-wider bg-yellow-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 font-light line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-light text-gray-900">{post.author}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700 px-8 py-3 rounded-full font-light transition-all duration-300 hover:shadow-md"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
