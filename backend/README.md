# Restaurant Booking - Backend API

Backend API for the Restaurant Table Booking application.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Environment variables are already configured in `.env`

3. Start the server:

```bash
npm run dev
```

## API Endpoints

- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get booking by ID
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking status
- `DELETE /api/bookings/:id` - Delete booking

## Technologies

- Node.js
- Express
- MongoDB & Mongoose
- CORS
- dotenv
