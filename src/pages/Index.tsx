
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedBanner />
      <Categories />
      <ProductGrid />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
