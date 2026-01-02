import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, Heart, Users, MapPin } from 'lucide-react';
import { hotelInfo, restaurants } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-amber-950 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your trusted hospitality partner in Hyderabad</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/bael-tree-hotel.webp"
                alt="Bael Tree Hotels"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <Card className="bg-white shadow-lg order-1 lg:order-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6 text-center">
                  Welcome to {hotelInfo.name}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-center">
                  <p>
                    Located in the heart of Hyderabad's IT corridor, Bael Tree Hotels, Madhapur blends urban sophistication with a dedicated motto: <span className="font-semibold">Hospitality First, Service Always</span>. Designed for corporate leaders and discerning travelers, we offer an unparalleled stay defined by professional excellence and refined comfort.
                  </p>
                  <p>
                    At Bael Tree, we transform traditional hospitality into a bespoke luxury experience for the modern professional.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-amber-950 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-amber-950 mb-2">Quality Service</h3>
                <p className="text-gray-600">Commitment to excellence in every aspect of your stay</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-amber-950 mb-2">Warm Hospitality</h3>
                <p className="text-gray-600">Treating every guest like family with personalized care</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-amber-950 mb-2">Prime Location</h3>
                <p className="text-gray-600">Central location with easy access to key destinations</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-amber-950 mb-2">For Everyone</h3>
                <p className="text-gray-600">Perfect for business, leisure, couples, and families</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-950 mb-4">
              Enjoy Multi Cuisine Dining at Bael Tree Hotels
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enjoy thoughtfully prepared dishes in a warm, elegant setting where every meal feels comforting. Bael Tree's dining brings together fresh flavours, wholesome vegetarian delights, and soulful non-vegetarian classics under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <img 
                      src={restaurant.logo} 
                      alt={restaurant.name}
                      className="h-48 w-auto object-contain"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {restaurant.type}
                    </span>
                  </div>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {restaurant.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-amber-950 mb-6">Who We Serve</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Bael Tree Hotels serves corporate leaders, IT professionals, and business travelers seeking a comfortable and well-connected hotel in Madhapur, Hyderabad. With high-speed connectivity, professional meeting facilities, and seamless access to HITEC City and major business hubs, we are ideal for work-focused stays.
            </p>
            <p>
              Our in-house dining experiences also attract culinary enthusiasts looking for authentic, premium Indian cuisine in an elegant setting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;