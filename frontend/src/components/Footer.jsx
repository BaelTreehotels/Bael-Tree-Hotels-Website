import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { hotelInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Bael Tree Hotels</h3>
            <p className="text-sm mb-4">
              Experience comfort and hospitality in the heart of Hyderabad. Your perfect stay awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rooms" className="hover:text-amber-500 transition-colors">
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-amber-500 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{hotelInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${hotelInfo.phone}`} className="hover:text-amber-500 transition-colors">
                  {hotelInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-amber-500 transition-colors">
                  {hotelInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Check-in Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Check-in Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-white font-medium">Check-in:</span> {hotelInfo.checkIn}
              </li>
              <li>
                <span className="text-white font-medium">Check-out:</span> {hotelInfo.checkOut}
              </li>
              <li className="pt-2">
                <Link to="/book">
                  <button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Book Your Stay
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Bael Tree Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;