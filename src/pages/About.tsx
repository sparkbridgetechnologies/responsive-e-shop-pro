
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About GlowSkin
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            We believe everyone deserves radiant, healthy skin. That's why we've dedicated ourselves to creating premium skincare products with natural ingredients and proven results.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 font-light leading-relaxed">
                Founded in 2020 by skincare enthusiasts Sarah and Emma, GlowSkin was born from a simple mission: to make effective, clean skincare accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4 font-light leading-relaxed">
                After struggling with their own skin concerns and being disappointed by products filled with harsh chemicals, they decided to create their own line of gentle yet powerful formulations.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Today, GlowSkin is trusted by thousands of customers worldwide who have experienced the transformative power of our carefully crafted products.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <img src="/placeholder.svg" alt="Founders" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Sarah & Emma</h3>
              <p className="text-gray-600 font-light">Co-Founders</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Natural Ingredients</h3>
              <p className="text-gray-600 font-light">We source the finest natural ingredients from around the world, ensuring purity and effectiveness in every product.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Science-Backed</h3>
              <p className="text-gray-600 font-light">Every formula is developed with scientific research and tested for safety and efficacy before reaching your hands.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 font-light">We're committed to sustainable practices, from eco-friendly packaging to responsible sourcing.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            To empower individuals to feel confident in their own skin by providing high-quality, effective skincare solutions that are both gentle and transformative. We believe that great skincare should be a daily ritual of self-care and self-love.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Ready to Start Your Skincare Journey?</h2>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Discover our range of products designed to help you achieve your best skin yet.
          </p>
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg"
            onClick={() => navigate('/products')}
          >
            Shop Now
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
