// Mock data for Bael Tree Hotels

export const hotelInfo = {
  name: "Bael Tree Hotels",
  tagline: "Comfortable Stay in the Heart of Hyderabad",
  address: "100 Feet Road, Madhapur, Hyderabad",
  phone: "+91 40 1234 5678",
  whatsapp: "+91 98765 43210",
  email: "reservations@baeltreehotels.com",
  infoEmail: "info@baeltreehotels.com",
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.449353939653!2d78.38854731487695!3d17.43830988804784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
};

export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with modern amenities and city view",
    price: 3500,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    amenities: ["AC", "Wi-Fi", "TV", "Breakfast", "Room Service"],
    maxGuests: 2,
    size: "280 sq ft",
    bedType: "King Size Bed"
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Premium suite with separate living area and workspace",
    price: 5500,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    amenities: ["AC", "Wi-Fi", "TV", "Breakfast", "Room Service", "Mini Bar"],
    maxGuests: 2,
    size: "400 sq ft",
    bedType: "King Size Bed"
  },
  {
    id: 3,
    name: "Family Room",
    description: "Perfect for families with extra space and comfort",
    price: 4500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    amenities: ["AC", "Wi-Fi", "TV", "Breakfast", "Room Service"],
    maxGuests: 4,
    size: "350 sq ft",
    bedType: "Two Queen Beds"
  },
  {
    id: 4,
    name: "Standard Room",
    description: "Comfortable room with all essential amenities",
    price: 2800,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    amenities: ["AC", "Wi-Fi", "TV", "Breakfast"],
    maxGuests: 2,
    size: "250 sq ft",
    bedType: "Queen Size Bed"
  }
];

export const amenities = [
  {
    category: "Room Amenities",
    items: [
      { name: "Air Conditioning", icon: "wind" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Flat Screen TV", icon: "tv" },
      { name: "Room Service", icon: "concierge" },
      { name: "Daily Housekeeping", icon: "sparkles" },
      { name: "Mini Refrigerator", icon: "refrigerator" }
    ]
  },
  {
    category: "Hotel Facilities",
    items: [
      { name: "24/7 Reception", icon: "clock" },
      { name: "Free Parking", icon: "car" },
      { name: "Elevator Access", icon: "building" },
      { name: "CCTV Security", icon: "shield" },
      { name: "Power Backup", icon: "zap" },
      { name: "Laundry Service", icon: "shirt" }
    ]
  },
  {
    category: "Dining & Services",
    items: [
      { name: "Restaurant", icon: "utensils" },
      { name: "Complimentary Breakfast", icon: "coffee" },
      { name: "In-Room Dining", icon: "chef-hat" },
      { name: "Travel Desk", icon: "map" },
      { name: "Airport Transfer", icon: "plane" },
      { name: "Business Center", icon: "briefcase" }
    ]
  }
];

export const galleryImages = [
  {
    id: 1,
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    alt: "Deluxe Room Interior"
  },
  {
    id: 2,
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
    alt: "Executive Suite"
  },
  {
    id: 3,
    category: "Lobby",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
    alt: "Hotel Lobby"
  },
  {
    id: 4,
    category: "Restaurant",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    alt: "Restaurant Area"
  },
  {
    id: 5,
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
    alt: "Hotel Exterior"
  },
  {
    id: 6,
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
    alt: "Bedroom View"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent location and great hospitality. The rooms were clean and comfortable.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    comment: "Perfect for business travelers. Very professional staff and good amenities.",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 4,
    comment: "Great value for money. The breakfast was delicious and the location is convenient.",
    date: "January 2024"
  }
];

export const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are subject to availability."
  },
  {
    question: "Do you provide airport pickup?",
    answer: "Yes, we offer airport transfer services. Please contact us in advance to arrange pickup."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we provide complimentary parking for all our guests."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 24 hours before check-in. Cancellations within 24 hours will incur a one-night charge."
  },
  {
    question: "Do you serve meals?",
    answer: "Yes, complimentary breakfast is included. We also have a restaurant for lunch and dinner, plus 24/7 room service."
  }
];