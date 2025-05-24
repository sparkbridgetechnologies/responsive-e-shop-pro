
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Vitamin C in Skincare",
    excerpt: "Discover how vitamin C transforms your skin at the cellular level and why it's essential for your daily routine.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
    category: "Science"
  },
  {
    id: 2,
    title: "Building the Perfect Morning Skincare Routine",
    excerpt: "A step-by-step guide to creating an effective morning routine that protects and nourishes your skin all day.",
    author: "Emma Williams",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg",
    category: "Routine"
  },
  {
    id: 3,
    title: "Natural vs Synthetic: What's Really Better?",
    excerpt: "We break down the myths and facts about natural and synthetic ingredients in skincare products.",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg",
    category: "Ingredients"
  }
];

export const Blogs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Expert insights, skincare tips, and the latest research to help you achieve your best skin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 text-sm font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <img src="/placeholder.svg" alt={post.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-light text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.readTime}</p>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-light">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
