import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Users, Maximize, Bed } from 'lucide-react';
import { rooms } from '../mock';

const Rooms = () => {
  const [filter, setFilter] = useState('all');

  const filteredRooms = filter === 'all' ? rooms : rooms.filter(room => {
    if (filter === 'budget') return room.price < 4000;
    if (filter === 'premium') return room.price >= 4000;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif italic font-bold text-amber-950 mb-4">Our Rooms</h1>
          <p className="text-xl text-gray-600">Choose from our comfortable and well-appointed rooms</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-amber-700 hover:bg-amber-800' : 'border-amber-700 text-amber-700 hover:bg-amber-50'}
            >
              All Rooms
            </Button>
            <Button
              variant={filter === 'budget' ? 'default' : 'outline'}
              onClick={() => setFilter('budget')}
              className={filter === 'budget' ? 'bg-amber-700 hover:bg-amber-800' : 'border-amber-700 text-amber-700 hover:bg-amber-50'}
            >
              Budget Friendly
            </Button>
            <Button
              variant={filter === 'premium' ? 'default' : 'outline'}
              onClick={() => setFilter('premium')}
              className={filter === 'premium' ? 'bg-amber-700 hover:bg-amber-800' : 'border-amber-700 text-amber-700 hover:bg-amber-50'}
            >
              Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-4">{room.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-amber-700" />
                        <span>Max {room.maxGuests} Guests</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Maximize className="w-4 h-4 mr-2 text-amber-700" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Bed className="w-4 h-4 mr-2 text-amber-700" />
                        <span>{room.bedType}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-3xl font-bold text-amber-700">₹{room.price}</span>
                          <span className="text-gray-500 text-sm">/night</span>
                        </div>
                        <Link to="/book" state={{ roomId: room.id }}>
                          <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Price Guarantee */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Price Guarantee</h2>
          <p className="text-lg text-gray-600 mb-6">
            Book directly with us and enjoy the best rates. We guarantee you won't find a lower price elsewhere.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
              Book Direct & Save
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rooms;