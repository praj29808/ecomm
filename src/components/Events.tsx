import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Durga Puja Celebration 2024',
      date: 'October 15-18, 2024',
      time: '10:00 AM - 10:00 PM',
      location: 'Community Center, Main Hall',
      attendees: '500+',
      description: 'Our grand annual Durga Puja celebration with traditional rituals, cultural programs, and community feast.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300',
      featured: true
    },
    {
      id: 2,
      title: 'Rabindra Jayanti Cultural Evening',
      date: 'May 8, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Auditorium Block A',
      attendees: '200+',
      description: 'An evening dedicated to Rabindranath Tagore with poetry recitation, songs, and dance performances.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=300',
      featured: false
    },
    {
      id: 3,
      title: 'Bengali New Year Celebration',
      date: 'April 14, 2024',
      time: '11:00 AM - 8:00 PM',
      location: 'Open Grounds, Main Campus',
      attendees: '300+',
      description: 'Welcome the Bengali New Year with traditional games, food stalls, and cultural performances.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=500&h=300',
      featured: false
    }
  ];

  const pastHighlights = [
    {
      title: 'Kali Puja 2023',
      participants: '400+',
      description: 'Memorable celebration with traditional rituals and community bonding'
    },
    {
      title: 'Cultural Workshop Series',
      participants: '150+',
      description: 'Monthly workshops on Bengali art, music, and literature'
    },
    {
      title: 'Youth Leadership Program',
      participants: '80+',
      description: 'Empowering young members to take leadership roles'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in celebrating our rich cultural heritage through meaningful events, 
            festivals, and community gatherings that bring us closer together.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h3>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
                event.featured ? 'ring-2 ring-amber-400 shadow-2xl' : ''
              }`}>
                {event.featured && (
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span className="font-semibold text-sm">FEATURED EVENT</span>
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                )}
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <div 
                      className="h-64 lg:h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${event.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Clock className="w-5 h-5 text-green-600" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <MapPin className="w-5 h-5 text-red-600" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">{event.attendees} Expected</span>
                        </div>
                      </div>

                      <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Highlights */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Past Event Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pastHighlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{highlight.title}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{highlight.participants}</div>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to organize an event?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Have an idea for a cultural event or celebration? We'd love to hear from you! 
              Our community thrives on member participation and creative initiatives.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Propose an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;