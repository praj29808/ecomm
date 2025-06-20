import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Traditional Bengali Saree - Handwoven Silk',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
      'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Traditional Wear',
    description: 'Exquisite handwoven silk saree featuring traditional Bengali motifs and intricate border work. Perfect for festivals and special occasions.',
    features: ['100% Pure Silk', 'Handwoven', 'Traditional Motifs', 'Includes Blouse Piece'],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    discount: 25,
    isFeatured: true,
    isNew: false
  },
  {
    id: 2,
    name: 'Rabindra Sangeet Collection - Premium CD Set',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
      'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Music & Arts',
    description: 'Complete collection of Rabindra Sangeet featuring renowned artists. A must-have for Bengali music lovers.',
    features: ['10 CD Set', 'Digital Download Included', 'Booklet with Lyrics', 'Remastered Audio'],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    isNew: true
  },
  {
    id: 3,
    name: 'Bengali Cookbook - Authentic Recipes',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Books & Literature',
    description: 'Comprehensive collection of traditional Bengali recipes passed down through generations. Includes step-by-step instructions and cultural context.',
    features: ['300+ Recipes', 'Color Photography', 'Cultural Stories', 'Hardcover Edition'],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: 'Handcrafted Brass Diya Set',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/2306782/pexels-photo-2306782.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/2306782/pexels-photo-2306782.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Home & Decor',
    description: 'Beautiful set of handcrafted brass diyas perfect for festivals and daily prayers. Each piece is uniquely designed by skilled artisans.',
    features: ['Set of 12 Diyas', 'Pure Brass', 'Handcrafted', 'Gift Box Included'],
    inStock: true,
    rating: 4.6,
    reviews: 78,
    discount: 25,
    isFeatured: true
  },
  {
    id: 5,
    name: 'Bengali Kurta - Cotton Handloom',
    price: 79.99,
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Traditional Wear',
    description: 'Comfortable and stylish cotton kurta featuring traditional Bengali embroidery. Perfect for casual and formal occasions.',
    features: ['100% Cotton', 'Handloom Fabric', 'Traditional Embroidery', 'Machine Washable'],
    inStock: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: 6,
    name: 'Tagore Poetry Collection - Deluxe Edition',
    price: 59.99,
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Books & Literature',
    description: 'Complete collection of Rabindranath Tagore\'s poetry in Bengali and English. Beautifully bound deluxe edition.',
    features: ['Bilingual Edition', 'Leather Bound', 'Gold Foil Stamping', 'Collector\'s Item'],
    inStock: true,
    rating: 4.9,
    reviews: 203,
    isNew: true
  },
  {
    id: 7,
    name: 'Traditional Bengali Jewelry Set',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Jewelry & Accessories',
    description: 'Elegant traditional Bengali jewelry set featuring intricate designs inspired by classical motifs.',
    features: ['Gold Plated', 'Handcrafted', 'Complete Set', 'Jewelry Box Included'],
    inStock: true,
    rating: 4.7,
    reviews: 67,
    discount: 20,
    isFeatured: true
  },
  {
    id: 8,
    name: 'Bengali Sweets Gift Box',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=600',
    images: [
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=600'
    ],
    category: 'Food & Sweets',
    description: 'Assorted traditional Bengali sweets made with authentic recipes. Perfect for gifting or special occasions.',
    features: ['12 Varieties', 'Fresh Made', 'Premium Packaging', 'Vegetarian'],
    inStock: true,
    rating: 4.8,
    reviews: 145,
    isNew: true
  }
];

export const categories = [
  'All Products',
  'Traditional Wear',
  'Music & Arts',
  'Books & Literature',
  'Home & Decor',
  'Jewelry & Accessories',
  'Food & Sweets'
];