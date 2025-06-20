import React from 'react';
import { Heart, Target, Eye, Award, Users, Globe, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'Preserving and celebrating our rich Bengali cultural traditions'
    },
    {
      icon: Users,
      title: 'Community Unity',
      description: 'Building strong bonds within our diverse community'
    },
    {
      icon: Globe,
      title: 'Global Outreach',
      description: 'Connecting Bengali communities worldwide'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Ensuring authentic, high-quality products'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Artisan Partners' }
  ];

  return (
    <div className="pt-32 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Gaudhuli Parivaar</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted destination for authentic Bengali products, connecting you with 
              the rich cultural heritage of Bengal through carefully curated items.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  To make authentic Bengali products accessible to everyone, preserving cultural 
                  traditions while supporting local artisans and communities.
                </p>
                
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the world's leading platform for Bengali cultural products, 
                  bridging generations and connecting communities globally.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Bengali Culture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Gaudhuli Parivaar began as a small initiative to preserve 
                  and share the rich cultural heritage of Bengal. What started as a local 
                  community effort has grown into a global platform connecting Bengali 
                  culture enthusiasts worldwide.
                </p>
                <p>
                  We work directly with skilled artisans, traditional craftspeople, and 
                  cultural experts to ensure every product in our collection is authentic 
                  and of the highest quality. From handwoven textiles to traditional sweets, 
                  each item tells a story of Bengali heritage.
                </p>
                <p>
                  Today, we're proud to serve customers across the globe, helping them 
                  stay connected to their roots while introducing others to the beauty 
                  and richness of Bengali culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate team behind Gaudhuli Parivaar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Executive Team</h4>
              <p className="text-gray-600">Leading our vision and strategy</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Cultural Experts</h4>
              <p className="text-gray-600">Ensuring authenticity and quality</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Success</h4>
              <p className="text-gray-600">Dedicated to your satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from our satisfied customers around the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                location: 'New York, USA',
                text: 'The quality of products is exceptional. It feels like a piece of home delivered to my doorstep.'
              },
              {
                name: 'Rajesh Kumar',
                location: 'London, UK',
                text: 'Authentic Bengali sweets that taste just like my grandmother used to make. Highly recommended!'
              },
              {
                name: 'Anita Das',
                location: 'Toronto, Canada',
                text: 'Beautiful sarees with traditional craftsmanship. The customer service is outstanding.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;