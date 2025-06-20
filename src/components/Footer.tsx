import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const categories = [
    { name: 'Traditional Wear', path: '/products?category=Traditional%20Wear' },
    { name: 'Music & Arts', path: '/products?category=Music%20%26%20Arts' },
    { name: 'Books & Literature', path: '/products?category=Books%20%26%20Literature' },
    { name: 'Home & Decor', path: '/products?category=Home%20%26%20Decor' },
    { name: 'Jewelry & Accessories', path: '/products?category=Jewelry%20%26%20Accessories' },
    { name: 'Food & Sweets', path: '/products?category=Food%20%26%20Sweets' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'info@gaudhuliparivaar.com' },
    { icon: MapPin, text: '123 Cultural Center Drive, NY 10001' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, name: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Youtube, name: 'YouTube', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Sun className="w-8 h-8 text-amber-400" />
                  <div className="absolute inset-0 animate-pulse">
                    <Sun className="w-8 h-8 text-amber-300 opacity-50" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Gaudhuli Parivaar</h3>
                  <p className="text-sm text-gray-400">Authentic Bengali Heritage</p>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted destination for authentic Bengali products, connecting you 
                with the rich cultural heritage of Bengal.
              </p>

              <div className="flex items-center space-x-2 text-amber-400 mb-4">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Serving customers since 2009</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Categories</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="font-medium mb-3 text-white">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Get updates on new products and special offers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 Gaudhuli Parivaar. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Made with <Heart className="w-3 h-3 inline text-red-400" /> for Bengali culture enthusiasts
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToTop}
                  className="bg-amber-500 hover:bg-amber-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="Back to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;