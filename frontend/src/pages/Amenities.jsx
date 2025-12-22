import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Wifi, Car, Coffee, Shield, Clock, Sparkles, Tv, Wind, MapPin, Zap, Utensils, Briefcase, Building, Shirt, Droplet, Wine, Accessibility, Package, Plane } from 'lucide-react';
import { amenities } from '../mock';

const iconMap = {
  wifi: Wifi,
  car: Car,
  coffee: Coffee,
  shield: Shield,
  clock: Clock,
  sparkles: Sparkles,
  tv: Tv,
  wind: Wind,
  'map': MapPin,
  zap: Zap,
  utensils: Utensils,
  briefcase: Briefcase,
  building: Building,
  shirt: Shirt,
  droplet: Droplet,
  wine: Wine,
  accessibility: Accessibility,
  'package': Package,
  plane: Plane
};

const Amenities = () => {
  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || Shield;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-amber-950 mb-4">Amenities & Facilities</h1>
          <p className="text-xl text-gray-600">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>
      </section>

      {/* Amenities by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {amenities.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-white">
                          {getIcon(item.icon)}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              At Bael Tree Hotels, we prioritize your comfort, safety, and convenience. Our facilities are designed to cater to both business and leisure travelers.
            </p>
            <p>
              We maintain the highest standards of cleanliness and hygiene, ensuring a safe and pleasant stay for all our guests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;