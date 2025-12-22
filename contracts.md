# API Contracts - Bael Tree Hotels Website

## Overview
This document outlines the API contracts for the full-stack hotel booking system. Currently, the frontend uses **mock data** from `/app/frontend/src/mock.js`. Backend implementation will replace mock functionality with real database operations.

## Current Mock Data (Frontend Only)
- Hotel information
- Room details with pricing
- Amenities list
- Gallery images
- Testimonials
- FAQs
- Contact form submissions (local state only)
- Booking submissions (local state only)

---

## Backend APIs to Implement

### 1. **GET /api/rooms**
**Purpose**: Fetch all available rooms with details

**Response**:
```json
[
  {
    "id": 1,
    "name": "Deluxe Room",
    "description": "Spacious room with modern amenities and city view",
    "price": 3500,
    "image": "url",
    "amenities": ["AC", "Wi-Fi", "TV", "Breakfast", "Room Service"],
    "maxGuests": 2,
    "size": "280 sq ft",
    "bedType": "King Size Bed"
  }
]
```

---

### 2. **POST /api/bookings**
**Purpose**: Create a new booking

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "checkIn": "2024-12-25",
  "checkOut": "2024-12-27",
  "roomId": 1,
  "guests": 2,
  "totalPrice": 7000,
  "nights": 2,
  "specialRequests": "Early check-in"
}
```

**Response**:
```json
{
  "id": "booking_123",
  "bookingId": "BT20241225001",
  "status": "confirmed",
  "message": "Booking confirmed successfully",
  "bookingDetails": { /* full booking object */ }
}
```

---

### 3. **GET /api/bookings/:id**
**Purpose**: Get booking details by ID

**Response**:
```json
{
  "id": "booking_123",
  "bookingId": "BT20241225001",
  "status": "confirmed",
  "guestDetails": {...},
  "roomDetails": {...},
  "checkIn": "2024-12-25",
  "checkOut": "2024-12-27"
}
```

---

### 4. **POST /api/contact**
**Purpose**: Submit contact form

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "subject": "Inquiry about rooms",
  "message": "I would like to know more about..."
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message received. We'll contact you within 24 hours."
}
```

---

### 5. **GET /api/gallery**
**Purpose**: Fetch gallery images

**Response**:
```json
[
  {
    "id": 1,
    "category": "Rooms",
    "url": "image_url",
    "alt": "Deluxe Room Interior"
  }
]
```

---

### 6. **GET /api/amenities**
**Purpose**: Fetch hotel amenities

**Response**:
```json
[
  {
    "category": "Room Amenities",
    "items": [
      { "name": "Air Conditioning", "icon": "wind" }
    ]
  }
]
```

---

### 7. **POST /api/availability**
**Purpose**: Check room availability for given dates

**Request Body**:
```json
{
  "checkIn": "2024-12-25",
  "checkOut": "2024-12-27",
  "roomId": 1
}
```

**Response**:
```json
{
  "available": true,
  "roomsAvailable": 5
}
```

---

## Database Models Needed

### 1. **Room Model**
```python
{
  "id": int,
  "name": str,
  "description": str,
  "price": float,
  "image": str,
  "amenities": list,
  "maxGuests": int,
  "size": str,
  "bedType": str,
  "totalRooms": int
}
```

### 2. **Booking Model**
```python
{
  "id": str (UUID),
  "bookingId": str (BT20241225001),
  "name": str,
  "email": str,
  "phone": str,
  "checkIn": date,
  "checkOut": date,
  "roomId": int,
  "guests": int,
  "totalPrice": float,
  "nights": int,
  "specialRequests": str,
  "status": str (confirmed/cancelled),
  "createdAt": datetime
}
```

### 3. **Contact Model**
```python
{
  "id": str (UUID),
  "name": str,
  "email": str,
  "phone": str,
  "subject": str,
  "message": str,
  "status": str (new/replied),
  "createdAt": datetime
}
```

### 4. **Gallery Model**
```python
{
  "id": int,
  "category": str,
  "url": str,
  "alt": str
}
```

### 5. **Amenity Model**
```python
{
  "id": int,
  "category": str,
  "items": list[{name: str, icon: str}]
}
```

---

## Frontend-Backend Integration Steps

1. **Remove mock imports** from pages:
   - Remove `import { rooms, hotelInfo, etc. } from '../mock'`
   
2. **Replace with API calls** using axios:
   - `axios.get(\`\${API}/rooms\`)`
   - `axios.post(\`\${API}/bookings\`, bookingData)`
   
3. **Add loading states** for API calls

4. **Add error handling** for failed requests

5. **Keep hotelInfo static** (can be environment config or static data)

---

## Current Status
✅ Frontend complete with mock data (fully functional)  
⏳ Backend API implementation pending  
⏳ Database models pending  
⏳ Frontend-backend integration pending

---

## Testing Checklist (Post-Backend Implementation)

- [ ] All rooms fetch correctly from database
- [ ] Booking submission creates DB entry
- [ ] Booking confirmation email sent
- [ ] Contact form saves to database
- [ ] Room availability check works
- [ ] Date validation prevents past dates
- [ ] Double booking prevention
- [ ] Gallery images load from backend
- [ ] Error handling works for all APIs
- [ ] Loading states display correctly
