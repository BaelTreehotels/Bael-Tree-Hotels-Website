import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Wifi, Car, Coffee, Shield, MapPin, Phone, MessageCircle, Wind, Sparkles, Tv, Zap, Star } from 'lucide-react';
import { rooms, hotelInfo, testimonials } from '../mock';

const Home = () => {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif italic font-bold text-amber-950 mb-6">
            {hotelInfo.tagline}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Experience comfort, convenience, and warm hospitality at {hotelInfo.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg">
                Book Your Stay
              </Button>
            </Link>
            <Link to="/rooms">
              <Button size="lg" variant="outline" className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg">
                View Rooms
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Madhapur, Hyderabad</span>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-amber-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">24/7 Support: {hotelInfo.phone}</span>
            </div>
            <div className="flex space-x-4">
              <a href={`tel:${hotelInfo.phone}`}>
                <Button variant="secondary" size="sm" className="bg-white text-amber-700 hover:bg-gray-100">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" className="bg-white text-amber-700 hover:bg-gray-100">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic font-bold text-amber-950 mb-4">Our Rooms</h2>
            <p className="text-lg text-gray-600">Comfortable accommodations for every traveler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-amber-950 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-amber-700">₹{room.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </div>
                    <Link to="/book">
                      <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/rooms">
              <Button variant="outline" size="lg" className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Amenities */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic font-bold text-amber-950 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Premium amenities for your comfort</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Air Conditioning</h3>
              <p className="text-sm text-gray-600">Climate control comfort</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Room Service</h3>
              <p className="text-sm text-gray-600">24/7 at your service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart TV</h3>
              <p className="text-sm text-gray-600">Entertainment at your fingertips</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Power Backup</h3>
              <p className="text-sm text-gray-600">Uninterrupted service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Wi-Fi</h3>
              <p className="text-sm text-gray-600">High-speed internet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Parking</h3>
              <p className="text-sm text-gray-600">Secure parking space</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Breakfast</h3>
              <p className="text-sm text-gray-600">Complimentary meals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Security</h3>
              <p className="text-sm text-gray-600">CCTV surveillance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic font-bold text-amber-950 mb-4">Guest Reviews</h2>
            <p className="text-lg text-gray-600">What our guests say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-amber-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic font-bold text-amber-950 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">Conveniently located in Madhapur, Hyderabad</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={hotelInfo.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif italic font-bold mb-4">Ready to Experience Comfort?</h2>
          <p className="text-xl mb-8">Book your stay today and enjoy the best hospitality in Hyderabad</p>
          <Link to="/book">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg">
              Book Your Room Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;