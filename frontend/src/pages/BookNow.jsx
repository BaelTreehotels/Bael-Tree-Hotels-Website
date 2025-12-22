import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar as CalendarIcon, Users, Check } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import { rooms, hotelInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const BookNow = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(location.state?.roomId || null);
  const [guests, setGuests] = useState(1);
  const [guestDetails, setGuestDetails] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const selectedRoom = rooms.find(r => r.id === selectedRoomId);
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const totalPrice = selectedRoom && nights > 0 ? selectedRoom.price * nights : 0;

  const handleGuestDetailsChange = (e) => {
    setGuestDetails({ ...guestDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Error",
        description: "Please select check-in and check-out dates.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedRoomId) {
      toast({
        title: "Error",
        description: "Please select a room type.",
        variant: "destructive"
      });
      return;
    }

    // Mock booking submission
    const bookingData = {
      ...guestDetails,
      checkIn: format(checkIn, 'yyyy-MM-dd'),
      checkOut: format(checkOut, 'yyyy-MM-dd'),
      roomId: selectedRoomId,
      guests,
      totalPrice,
      nights
    };

    console.log('Booking submitted:', bookingData);
    
    toast({
      title: "Booking Confirmed!",
      description: `Your reservation for ${nights} night(s) has been received. We'll send a confirmation email shortly.`,
    });

    // Reset form
    setCheckIn(null);
    setCheckOut(null);
    setSelectedRoomId(null);
    setGuests(1);
    setGuestDetails({ name: '', email: '', phone: '', specialRequests: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-amber-950 mb-4">Book Your Stay</h1>
          <p className="text-xl text-gray-600">Complete your reservation in a few simple steps</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Date Selection */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Select Dates</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 block">Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-gray-300"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, 'PPP') : 'Select date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label className="mb-2 block">Check-out Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-gray-300"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, 'PPP') : 'Select date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            disabled={(date) => !checkIn || date <= checkIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Room Selection */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Select Room</h2>
                  <div className="space-y-4">
                    {rooms.map((room) => (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          selectedRoomId === room.id
                            ? 'border-amber-700 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {room.amenities.slice(0, 3).map((amenity, idx) => (
                                  <span key={idx} className="text-xs px-2 py-1 bg-white rounded-full border border-amber-200">
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <p className="text-2xl font-bold text-amber-700">₹{room.price}</p>
                            <p className="text-xs text-gray-500">per night</p>
                            {selectedRoomId === room.id && (
                              <div className="mt-2 w-6 h-6 bg-amber-700 rounded-full flex items-center justify-center ml-auto">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Label className="mb-2 block">Number of Guests</Label>
                    <Select value={guests.toString()} onValueChange={(val) => setGuests(parseInt(val))}>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Guest Details */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Guest Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={guestDetails.name}
                        onChange={handleGuestDetailsChange}
                        required
                        placeholder="John Doe"
                        className="mt-1 border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={guestDetails.email}
                        onChange={handleGuestDetailsChange}
                        required
                        placeholder="john@example.com"
                        className="mt-1 border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={guestDetails.phone}
                        onChange={handleGuestDetailsChange}
                        required
                        placeholder="+91 98765 43210"
                        className="mt-1 border-gray-300 focus:border-amber-700 focus:ring-amber-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={guestDetails.specialRequests}
                        onChange={handleGuestDetailsChange}
                        rows={3}
                        placeholder="Early check-in, airport pickup, etc."
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg"
                      disabled={!checkIn || !checkOut || !selectedRoomId}
                    >
                      Confirm Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-white sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Booking Summary</h2>
                  
                  {selectedRoom ? (
                    <div className="space-y-4">
                      <div>
                        <img
                          src={selectedRoom.image}
                          alt={selectedRoom.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold text-lg">{selectedRoom.name}</h3>
                        <p className="text-sm text-gray-600">{selectedRoom.size} • {selectedRoom.bedType}</p>
                      </div>
                      
                      <div className="border-t pt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-in:</span>
                          <span className="font-medium">
                            {checkIn ? format(checkIn, 'dd MMM yyyy') : '-'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-out:</span>
                          <span className="font-medium">
                            {checkOut ? format(checkOut, 'dd MMM yyyy') : '-'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nights:</span>
                          <span className="font-medium">{nights || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guests:</span>
                          <span className="font-medium">{guests}</span>
                        </div>
                      </div>

                      {nights > 0 && (
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">₹{selectedRoom.price} × {nights} nights</span>
                            <span className="font-medium">₹{selectedRoom.price * nights}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold pt-2 border-t">
                            <span>Total</span>
                            <span className="text-amber-700">₹{totalPrice}</span>
                          </div>
                        </div>
                      )}

                      <div className="bg-amber-50 p-3 rounded-lg text-xs space-y-1">
                        <p className="font-medium text-amber-900">✓ Free cancellation up to 24 hours</p>
                        <p className="font-medium text-amber-900">✓ Complimentary breakfast included</p>
                        <p className="font-medium text-amber-900">✓ Free Wi-Fi & parking</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <p>Please select a room to see booking summary</p>
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm text-gray-600 mb-3">Contact us for any questions</p>
                    <a href={`tel:${hotelInfo.phone}`} className="text-amber-700 hover:underline text-sm block">
                      {hotelInfo.phone}
                    </a>
                    <a href={`mailto:${hotelInfo.email}`} className="text-amber-700 hover:underline text-sm block">
                      {hotelInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Info */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Booking Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Check-in/Check-out</h3>
                  <p>Check-in: {hotelInfo.checkIn}</p>
                  <p>Check-out: {hotelInfo.checkOut}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                  <p>Free cancellation up to 24 hours before check-in. Cancellations within 24 hours will incur a one-night charge.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
                  <p>Payment can be made at the hotel. We accept cash and all major credit/debit cards.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BookNow;