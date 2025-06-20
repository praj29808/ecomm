import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, products } from '../data/products';

const Categories: React.FC = () => {
  const categoryData = categories.slice(1).map(category => {
    const categoryProducts = products.filter(p => p.category === category);
    const featuredProduct = categoryProducts.find(p => p.isFeatured) || categoryProducts[0];
    
    return {
      name: category,
      productCount: categoryProducts.length,
      image: featuredProduct?.image || '',
      description: getCategoryDescription(category)
    };
  });

  function getCategoryDescription(category: string): string {
    const descriptions: { [key: string]: string } = {
      'Traditional Wear': 'Authentic Bengali clothing including sarees, kurtas, and traditional garments',
      'Music & Arts': 'Classical Bengali music, instruments, and artistic collections',
      'Books & Literature': 'Bengali literature, poetry, and educational books',
      'Home & Decor': 'Traditional home decor items, brass work, and handicrafts',
      'Jewelry & Accessories': 'Traditional Bengali jewelry and fashion accessories',
      'Food & Sweets': 'Authentic Bengali sweets and traditional food items'
    };
    return descriptions[category] || 'Discover our collection of authentic Bengali products';
  }

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated categories of authentic Bengali products, 
            each representing the rich cultural heritage of Bengal.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category, index) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount} Products
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>Explore Category</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Collections</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Wear Highlight */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Traditional Wear</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Discover our exquisite collection of handwoven sarees, elegant kurtas, 
                  and traditional Bengali garments crafted by skilled artisans.
                </p>
                <Link
                  to="/products?category=Traditional%20Wear"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Food & Sweets Highlight */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Bengali Sweets</h3>
                <p className="text-amber-100 mb-6 leading-relaxed">
                  Indulge in authentic Bengali sweets made with traditional recipes 
                  passed down through generations. Fresh, delicious, and delivered to your door.
                </p>
                <Link
                  to="/products?category=Food%20%26%20Sweets"
                  className="inline-flex items-center space-x-2 bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly adding new products to our collection. 
              Contact us if you're looking for something specific from Bengali culture.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;