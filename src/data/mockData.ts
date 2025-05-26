
export const mockProducts = [
  {
    id: "1",
    name: "Vitamin C Brightening Serum",
    description: "A powerful antioxidant serum that brightens skin and reduces dark spots with 20% Vitamin C.",
    price: 2499,
    original_price: 3299,
    category: "Serums",
    concern: "Brightening",
    rating: 4.8,
    reviews_count: 342,
    stock_quantity: 50,
    is_featured: true,
    is_new: false,
    image_url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
  },
  {
    id: "2",
    name: "Hyaluronic Acid Hydrating Cleanser",
    description: "Gentle daily cleanser with hyaluronic acid that removes impurities while maintaining skin moisture.",
    price: 1899,
    original_price: 2199,
    category: "Cleansers",
    concern: "Hydration",
    rating: 4.6,
    reviews_count: 156,
    stock_quantity: 75,
    is_featured: true,
    is_new: true,
    image_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop"
  },
  {
    id: "3",
    name: "Retinol Night Recovery Cream",
    description: "Advanced anti-aging night cream with retinol to reduce fine lines and improve skin texture.",
    price: 3299,
    original_price: 4199,
    category: "Night Care",
    concern: "Anti-Aging",
    rating: 4.9,
    reviews_count: 278,
    stock_quantity: 30,
    is_featured: true,
    is_new: false,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
  },
  {
    id: "4",
    name: "Niacinamide Acne Control Serum",
    description: "Oil-controlling serum with 10% niacinamide to reduce acne and minimize pores.",
    price: 2199,
    original_price: 2799,
    category: "Serums",
    concern: "Acne Care",
    rating: 4.7,
    reviews_count: 195,
    stock_quantity: 60,
    is_featured: false,
    is_new: true,
    image_url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
  },
  {
    id: "5",
    name: "SPF 50 Daily Sunscreen",
    description: "Broad-spectrum protection with SPF 50 for daily use. Non-greasy and lightweight formula.",
    price: 1699,
    original_price: null,
    category: "Day Care",
    concern: "Sun Protection",
    rating: 4.5,
    reviews_count: 89,
    stock_quantity: 100,
    is_featured: false,
    is_new: false,
    image_url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
  },
  {
    id: "6",
    name: "Gentle Micellar Water",
    description: "All-in-one makeup remover and cleanser suitable for sensitive skin types.",
    price: 1299,
    original_price: 1599,
    category: "Cleansers",
    concern: "Sensitive Skin",
    rating: 4.4,
    reviews_count: 124,
    stock_quantity: 80,
    is_featured: false,
    is_new: false,
    image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
  }
];

export const mockBlogs = [
  {
    id: "1",
    title: "The Ultimate Guide to Building Your Skincare Routine",
    excerpt: "Learn how to create a personalized skincare routine that works for your unique skin type and concerns.",
    content: `
      <h3>Understanding Your Skin Type</h3>
      <p>The first step to building an effective skincare routine is understanding your skin type. Whether you have oily, dry, combination, or sensitive skin, each type requires different approaches and products.</p>
      
      <h3>Morning Routine Essentials</h3>
      <p>Start your day with a gentle cleanser to remove overnight buildup. Follow with a <strong>vitamin C serum</strong> for antioxidant protection, then apply moisturizer and sunscreen.</p>
      
      <ul>
        <li>Gentle cleanser</li>
        <li>Vitamin C serum</li>
        <li>Moisturizer</li>
        <li>SPF 30+ sunscreen</li>
      </ul>
      
      <h3>Evening Routine for Repair</h3>
      <p>Nighttime is when your skin repairs itself. Use a double cleanse method, apply active ingredients like retinol or AHA/BHA, and finish with a nourishing night cream.</p>
      
      <blockquote>Remember, consistency is key. It takes 4-6 weeks to see real results from a new skincare routine.</blockquote>
    `,
    image_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
    author: "Dr. Sarah Johnson",
    published_date: "2024-01-15",
    category: "Skincare Tips"
  },
  {
    id: "2",
    title: "5 Common Skincare Mistakes You're Probably Making",
    excerpt: "Avoid these common pitfalls that could be sabotaging your skincare goals and preventing you from achieving healthy, glowing skin.",
    content: `
      <h3>Mistake #1: Over-Cleansing Your Skin</h3>
      <p>Washing your face too frequently can strip away natural oils, leading to dryness and irritation. Stick to cleansing twice daily - morning and evening.</p>
      
      <h3>Mistake #2: Skipping Sunscreen</h3>
      <p>UV protection is crucial every single day, not just when you're at the beach. <strong>Daily SPF use</strong> prevents premature aging and protects against skin cancer.</p>
      
      <h3>Mistake #3: Introducing Too Many Products at Once</h3>
      <p>Your skin needs time to adjust to new products. Introduce one new product at a time and wait 2-4 weeks before adding another.</p>
      
      <h3>Mistake #4: Not Patch Testing</h3>
      <p>Always patch test new products on a small area of skin before applying to your entire face. This helps prevent adverse reactions.</p>
      
      <h3>Mistake #5: Expecting Immediate Results</h3>
      <p>Skincare is a marathon, not a sprint. Most products take 4-12 weeks to show visible results, so be patient and consistent.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
    author: "Emily Chen",
    published_date: "2024-01-10",
    category: "Common Mistakes"
  },
  {
    id: "3",
    title: "The Science Behind Vitamin C in Skincare",
    excerpt: "Discover why vitamin C is considered the gold standard in skincare and how to choose the right vitamin C product for your needs.",
    content: `
      <h3>What Makes Vitamin C So Special?</h3>
      <p>Vitamin C is a powerful antioxidant that neutralizes free radicals, stimulates collagen production, and brightens skin tone. It's one of the most researched and proven ingredients in skincare.</p>
      
      <h3>Types of Vitamin C</h3>
      <p>Not all vitamin C is created equal. Here are the most common forms:</p>
      
      <ul>
        <li><strong>L-Ascorbic Acid</strong> - Most potent but can be irritating</li>
        <li><strong>Magnesium Ascorbyl Phosphate</strong> - Gentle and stable</li>
        <li><strong>Sodium Ascorbyl Phosphate</strong> - Good for acne-prone skin</li>
        <li><strong>Ascorbyl Glucoside</strong> - Excellent stability and penetration</li>
      </ul>
      
      <h3>How to Use Vitamin C</h3>
      <p>Apply vitamin C serum in the morning after cleansing but before moisturizer. Start with a lower concentration (10-15%) and gradually increase as your skin builds tolerance.</p>
      
      <blockquote>Pro tip: Vitamin C can make your skin more sensitive to the sun, so always follow with SPF during the day.</blockquote>
    `,
    image_url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop",
    author: "Dr. Michael Park",
    published_date: "2024-01-05",
    category: "Ingredients"
  }
];
