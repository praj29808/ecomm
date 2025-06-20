import React from 'react';
import { Heart, Target, Eye, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'Preserving and celebrating our rich cultural traditions for future generations'
    },
    {
      icon: Users,
      title: 'Community Unity',
      description: 'Building strong bonds and fostering connections within our diverse community'
    },
    {
      icon: Globe,
      title: 'Global Outreach',
      description: 'Connecting with Bengali communities worldwide while maintaining local roots'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in all our cultural, educational, and social endeavors'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Gaudhuli Parivaar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A vibrant community dedicated to preserving Bengali culture, fostering meaningful connections, 
            and creating lasting memories through shared traditions and celebrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To create a thriving community where Bengali culture flourishes, traditions are passed down 
                through generations, and every member feels connected to their roots while embracing the future.
              </p>
              
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the premier cultural organization that bridges generations, preserves heritage, 
                and creates a global network of Bengali families united by shared values and traditions.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Cultural Celebrations</h4>
                <p className="text-sm opacity-90">Bringing families together through tradition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Executive Committee</h4>
              <p className="text-gray-600">Dedicated leaders guiding our community vision</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Cultural Committee</h4>
              <p className="text-gray-600">Preserving traditions through meaningful events</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Youth Committee</h4>
              <p className="text-gray-600">Engaging the next generation in our heritage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;