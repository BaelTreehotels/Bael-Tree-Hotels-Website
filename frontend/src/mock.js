// Mock data for Bael Tree Hotels

export const hotelInfo = {
  name: "Bael Tree Hotels",
  tagline: "Comfortable Stay in the Heart of Hyderabad",
  address: "100 Feet Road, Madhapur, Hyderabad",
  phone: "+91-9642325555",
  whatsapp: "+91-9642325555",
  email: "reservations@baeltreehotels.com",
  infoEmail: "info@baeltreehotels.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.449353939653!2d78.38854731487695!3d17.43830988804784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890",
  googleTravelLink: "https://www.google.com/travel/search?ts=CAEaSQopEicyJTB4M2JjYjkxMDA1MTVkMjY4OToweDEyMzg3ODAxMWM0OWQzMzESHBIUCgcI6Q8QDBgXEgcI6Q8QDBgYGAEyBAgAEAAqBwoFOgNJTlI&qs=CAEyE0Nnb0lzYWFuNHBHQW5wd1NFQUU4AkIJCTHTSRwBeDgSQgkJMdNJHAF4OBJIAA&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls",
  logo: "https://customer-assets.emergentagent.com/job_hotel-site-master/artifacts/esjg7cyg_BT%20png%20o.png"
};

export const restaurants = [
  {
    id: 1,
    name: "Kadali Patra",
    description: "A celebration of authentic vegetarian cuisine made with fresh ingredients and traditional recipes. Kadali Patra offers comforting flavours in a serene, family-friendly ambience.",
    logo: "https://customer-assets.emergentagent.com/job_hotel-site-master/artifacts/nkau2o7c_03%20%281%29_page-0001.png",
    type: "Vegetarian"
  },
  {
    id: 2,
    name: "The Soul Curry",
    description: "Indulge in rich, aromatic curries and expertly crafted non-vegetarian specialities. The Soul Curry brings bold flavours and heartfelt cooking to every plate.",
    logo: "https://customer-assets.emergentagent.com/job_hotel-site-master/artifacts/04yxrs5r_pdf%20%281%29_page-0001.png",
    type: "Non-Vegetarian"
  }
];

export const rooms = [
  {
    id: 1,
    name: "Standard",
    description: "Comfortable room with essential amenities for a pleasant stay",
    price: 2500,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    amenities: ["AC", "Wi-Fi", "TV", "Mini Bar"],
    maxGuests: 2,
    size: "10 m² / 108 ft²",
    bedType: "Queen Size Bed"
  },
  {
    id: 2,
    name: "Executive",
    description: "Spacious room with king bed and dedicated workspace",
    price: 4000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    amenities: ["AC", "Wi-Fi", "King Bed", "TV", "Work Desk", "Mini Bar"],
    maxGuests: 2,
    size: "17 m² / 183 ft²",
    bedType: "King Size Bed"
  },
  {
    id: 3,
    name: "Premium",
    description: "Premium room with dining area and enhanced comfort",
    price: 5000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    amenities: ["AC", "Wi-Fi", "King Bed", "TV", "Dining Table", "Work Desk", "Mini Bar"],
    maxGuests: 2,
    size: "22 m² / 237 ft²",
    bedType: "King Size Bed"
  },
  {
    id: 4,
    name: "Suite Room",
    description: "Luxurious suite with lounge area and premium amenities",
    price: 6000,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    amenities: ["AC", "Wi-Fi", "Lounge Area", "Mini Refrigerator", "Mini Bar"],
    maxGuests: 2,
    size: "32 m² / 344 ft²",
    bedType: "King Size Bed"
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
    name: "Naveen Reddy Kolli",
    rating: 5,
    comment: "I had a wonderful experience at Bael Tree Hotel. The staff was friendly, and check-in was quick. My room was clean, comfortable, and had everything I needed. The bed was cozy, and the bathroom was spotless. The hotel's location was perfect for exploring. Overall, a great stay and good value for the price.",
    date: "December 2024"
  },
  {
    id: 2,
    name: "Diani",
    rating: 5,
    comment: "The hotel was very nice, we spent one week in Hyderabad because we had a wedding and the staying was amazing. The hotel is totally new, the room very clean and the staff so kind, specially Ipshita, she speaks very well English too!!",
    date: "November 2024"
  },
  {
    id: 3,
    name: "Somen Debnath",
    rating: 5,
    comment: "The hotel offered an absolutely impeccable stay, combining luxurious room design with seamless check-in to personalized recommendations, was world-class and made the experience truly exceptional.",
    date: "October 2024"
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