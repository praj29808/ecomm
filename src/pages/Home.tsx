import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, RefreshCw, Gift, Zap, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 6);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  const promotions = [
    {
      title: 'Festival Special',
      subtitle: 'Up to 40% OFF',
      description: 'Traditional wear collection',
      bgColor: 'from-purple-600 to-pink-600',
      link: '/products?category=Traditional%20Wear'
    },
    {
      title: 'New Arrivals',
      subtitle: 'Fresh Collection',
      description: 'Latest Bengali products',
      bgColor: 'from-blue-600 to-indigo-600',
      link: '/products?filter=new'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Authentic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Bengali Heritage
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Discover our curated collection of traditional Bengali products, from handwoven sarees to authentic sweets, bringing the essence of Bengal to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/categories"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Traditional Saree"
                  className="rounded-2xl shadow-2xl w-full h-32 sm:h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/2306782/pexels-photo-2306782.jpeg?auto=compress&cs=tinysrgb&w=400&h=200"
                  alt="Brass Items"
                  className="rounded-2xl shadow-2xl w-full h-24 sm:h-32 object-cover"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=200"
                  alt="Music Collection"
                  className="rounded-2xl shadow-2xl w-full h-24 sm:h-32 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Bengali Sweets"
                  className="rounded-2xl shadow-2xl w-full h-32 sm:h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-12 sm:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-2">500+</div>
              <div className="text-blue-200 font-medium text-sm sm:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-2">15+</div>
              <div className="text-blue-200 font-medium text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-2">100+</div>
              <div className="text-blue-200 font-medium text-sm sm:text-base">Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {promotions.map((promo, index) => (
              <Link
                key={index}
                to={promo.link}
                className={`group relative bg-gradient-to-r ${promo.bgColor} rounded-2xl p-6 sm:p-8 text-white overflow-hidden transform hover:scale-105 transition-all duration-300`}
              >
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gift className="w-5 h-5" />
                    <span className="text-sm font-medium opacity-90">{promo.title}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{promo.subtitle}</h3>
                  <p className="text-sm sm:text-base opacity-90 mb-4">{promo.description}</p>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Featured <span className="text-blue-600">Products</span>
              </h2>
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked items that showcase the best of Bengali culture and craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                New <span className="text-purple-600">Arrivals</span>
              </h2>
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh additions to our collection, bringing you the latest in Bengali heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { icon: Shield, text: 'SSL Secure' },
              { icon: Truck, text: 'Fast Delivery' },
              { icon: Award, text: 'Genuine Products' },
              { icon: RefreshCw, text: 'Easy Returns' },
              { icon: Headphones, text: '24/7 Support' },
              { icon: Star, text: 'Top Rated' }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <badge.icon className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for exclusive offers and updates on new arrivals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;