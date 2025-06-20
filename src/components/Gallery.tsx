import React, { useState } from 'react';
import { X, ZoomIn, Heart, Share2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Durga Puja Celebration',
      category: 'Festivals',
      likes: 45
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Cultural Performance',
      category: 'Performances',
      likes: 32
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Community Gathering',
      category: 'Community',
      likes: 28
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Traditional Dance',
      category: 'Performances',
      likes: 56
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2306782/pexels-photo-2306782.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Bengali New Year',
      category: 'Festivals',
      likes: 41
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Youth Program',
      category: 'Community',
      likes: 23
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Cultural Workshop',
      category: 'Education',
      likes: 34
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Music Concert',
      category: 'Performances',
      likes: 67
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      title: 'Family Picnic',
      category: 'Community',
      likes: 38
    }
  ];

  const categories = ['All', 'Festivals', 'Performances', 'Community', 'Education'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-purple-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing precious moments from our cultural celebrations, community gatherings, 
            and meaningful events that define our shared heritage.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-purple-600 hover:bg-purple-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {image.title}
                  </h3>
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{image.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full">
                    {filteredImages[selectedImage].category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{filteredImages[selectedImage].likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Share Your Memories</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Have photos from our events? We'd love to feature them in our gallery! 
              Share your captured moments and help preserve our community's precious memories.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Submit Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;