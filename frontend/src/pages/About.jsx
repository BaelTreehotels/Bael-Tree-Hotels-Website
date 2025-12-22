import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, Heart, Users, MapPin } from 'lucide-react';
import { hotelInfo } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your trusted hospitality partner in Hyderabad</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Welcome to {hotelInfo.name}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Nestled in the vibrant heart of Madhapur, Hyderabad, Bael Tree Hotels has been serving travelers with warmth and dedication. As a family-run establishment, we understand the importance of making every guest feel at home.
                </p>
                <p>
                  Our 3-star hotel combines comfort, convenience, and affordability, making us the perfect choice for business travelers, couples, and families alike. We take pride in our commitment to cleanliness, safety, and personalized service.
                </p>
                <p>
                  Located strategically in Madhapur, one of Hyderabad's prime business and entertainment districts, we offer easy access to IT parks, shopping centers, restaurants, and major city attractions. Whether you're here for work or leisure, our hotel provides the perfect base for your Hyderabad experience.
                </p>
                <p>
                  At Bael Tree Hotels, we believe in creating memorable experiences through genuine hospitality. Our dedicated team works round the clock to ensure your stay is comfortable, convenient, and exceeds your expectations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Service</h3>
                <p className="text-gray-600">Commitment to excellence in every aspect of your stay</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Warm Hospitality</h3>
                <p className="text-gray-600">Treating every guest like family with personalized care</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
                <p className="text-gray-600">Central location with easy access to key destinations</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Everyone</h3>
                <p className="text-gray-600">Perfect for business, leisure, couples, and families</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Location Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Business Travelers</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Close to major IT parks and corporate offices</li>
                    <li>• Easy access to business districts</li>
                    <li>• Conference and meeting facilities nearby</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Leisure Travelers</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Near popular shopping centers and malls</li>
                    <li>• Multiple dining and entertainment options</li>
                    <li>• Well-connected to major tourist attractions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;