
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { WatchAndShop } from "@/components/WatchAndShop";
import { ShopByConcern } from "@/components/ShopByConcern";
import { FromTheFounders } from "@/components/FromTheFounders";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Blogs } from "@/components/Blogs";
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
      <WatchAndShop />
      <ShopByConcern />
      <FromTheFounders />
      <Features />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
