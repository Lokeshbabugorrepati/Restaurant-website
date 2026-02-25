# 🍛 Flavora - Authentic South Indian Restaurant Website

A complete full-stack restaurant website for **Flavora** - an authentic South Indian cuisine restaurant. Built with the MERN stack (MongoDB, Express, React, Node.js), featuring a vibrant colorful design, complete menu showcase, testimonials, and a fully functional table booking system.

## ✨ Features

### Website Sections

- **Hero Section**: Eye-catching landing with Flavora branding and Indian theme
- **About Section**: Restaurant story and statistics with images
- **Menu Section**: Interactive South Indian menu with categories (Starters, Mains, Desserts, Drinks)
- **Testimonials**: Customer reviews and ratings
- **Booking System**: Complete table reservation functionality
- **Contact Section**: Restaurant information and hours

### Booking Features

- Book tables with date, time, and guest count
- Real-time updates with toast notifications
- Add special requests and dietary restrictions
- Fully responsive design for all devices

## 🎨 Design Features

- Vibrant Indian color scheme (Saffron, Gold, Crimson, Green)
- Colorful gradients and animations
- Restaurant images from public folder
- Smooth scroll navigation
- Elegant animations and transitions
- Interactive UI elements
- Mobile-friendly responsive design

## 📁 Project Structure

```
restaurant-booking/
├── backend/                 # Node.js + Express backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Request handlers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   ├── server.js          # Server entry point
│   └── package.json
│
└── frontend/               # React frontend
    ├── src/
    │   ├── components/    # React components
    │   │   ├── Header     # Navigation
    │   │   ├── Hero       # Landing section
    │   │   ├── About      # About restaurant
    │   │   ├── Menu       # Interactive menu
    │   │   ├── Testimonials # Customer reviews
    │   │   ├── BookingForm  # Reservation form
    │   │   ├── BookingList  # View bookings
    │   │   └── Footer     # Contact info
    │   ├── services/      # API services
    │   ├── App.jsx        # Main App component
    │   └── main.jsx       # Entry point
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🛠️ Technologies Used

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend

- **React** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **CSS3** - Styling with animations

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. The `.env` file is already configured with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://lokeshbabugorrepati_db_user:lokesh@cluster0.7zucgqa.mongodb.net/restaurant-booking?retryWrites=true&w=majority
PORT=5000
```

4. Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🚦 Usage

1. Open your browser and go to `http://localhost:3000`
2. Fill in the booking form with your details
3. Submit to create a new reservation
4. View all bookings in the "Current Reservations" section
5. Filter bookings by status
6. Update or cancel bookings as needed

## 🎨 Design Features

- Vibrant Indian color palette with gradients
- Colorful backgrounds and animated elements
- Smooth fade-in and slide animations
- Hover effects with scale and rotation
- Custom scrollbar with Indian colors
- Toast notifications for user feedback
- Responsive grid layouts for all screen sizes
- Mobile hamburger menu navigation

## 📡 API Endpoints

### Bookings

- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking status
- `DELETE /api/bookings/:id` - Delete booking

## 📝 Environment Variables

Backend `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## 🔧 Development

### Backend Development

```bash
cd backend
npm run dev
```

This uses nodemon for auto-restart on file changes.

### Frontend Development

```bash
cd frontend
npm run dev
```

Vite provides hot module replacement for instant updates.

## 🏗️ Build for Production

### Frontend Build

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📊 Database Schema

### Booking Model

```javascript
{
  name: String (required),
  email: String (required),
  phone: String (required),
  date: Date (required),
  time: String (required),
  guests: Number (required, 1-20),
  specialRequests: String (optional),
  status: String (enum: pending, confirmed, cancelled),
  timestamps: true
}
```

## 🎨 Color Palette

- **Saffron Orange**: #FF9933 - Primary brand color
- **Gold**: #FFD700 - Accent color
- **Crimson**: #DC143C - Secondary accent
- **Green**: #138808 - Complementary color
- **Light Cream**: #FFF5E6 - Background

## 🖼️ Images

The website uses images from the `public` folder:

- `logo_restaurant.png` - Restaurant logo in header
- `about_restaurant.png` - About section image
- `bg_restaurant.jpg` - Hero section background

## 🤝 Contributing

This is a portfolio project, but suggestions are welcome!

## 📄 License

This project is open source and available for portfolio purposes.

## 👨‍💻 Author

Built as a MERN stack portfolio project

## 🙏 Acknowledgments

- Design inspired by vibrant Indian aesthetics
- Icons from Unicode emoji set
- Fonts from Google Fonts (Georgia, Poppins)
- South Indian cuisine menu items

---

**Flavora** - Experience the Authentic Taste of South India 🍛✨

**Note**: This project is designed for portfolio and learning purposes. For production use, consider adding authentication, payment integration, and additional security measures.
