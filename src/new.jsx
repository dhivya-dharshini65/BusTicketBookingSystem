import React, { useState } from 'react';
import "./new.css";
const busRoutes = [
  { id: 1, from: "New York", to: "Boston", price: 50 },
  { id: 2, from: "Boston", to: "Washington D.C.", price: 75 },
  { id: 3, from: "Washington D.C.", to: "Philadelphia", price: 60 },
];

const Header = ({ setCurrentPage }) => (
  <header>
      <h1 className="change" style={{textAlign:"center"}}>BUS TICKET BOOKING SYSTEM</h1>
    <nav className="container mx-auto flex justify-between items-center" style={{backgroundColor:'lavender'}}>
      <ul className="flex space-x-4">
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('book')}>Book Ticket</button></li>
        <li><button onClick={() => setCurrentPage('myBookings')}>My Bookings</button></li>
        <li><button onClick={() => setCurrentPage('about')}>About Us</button></li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 BusBooker. All rights reserved.</p>
  </footer>
);

const Home = ({ setCurrentPage }) => (
  <div className="container">
    <div className='Booking'>
    <h2>Welcome to BusBooker</h2>
    <p>Book your bus tickets with ease and convenience.</p>
    <button onClick={() => setCurrentPage('book')}>Book Now</button>
    </div>
    <img src="https://www.hdwallpapers.in/download/closeup_view_of_highway_road_between_red_yellow_autumn_trees_forest_bushes_green_plants_hd_scenery-1920x1080.jpg" alt="dd" className='road'/>
  </div>
);

const BookTicket = ({ addBooking }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [passengerName, setPassengerName] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBookTicket = () => {
    if (selectedRoute && passengerName && seatNumber) {
      const newBooking = {
        id: Date.now(),
        route: selectedRoute,
        passengerName,
        seatNumber,
      };
      addBooking(newBooking);
      setShowConfirmation(true);
      setSelectedRoute(null);
      setPassengerName("");
      setSeatNumber("");
    }
  };

  return (
    <div className="container1">
      <h2>Book a Ticket</h2>
      <br></br>
      <div className="card">
        <form>
          <select onChange={(e) => setSelectedRoute(busRoutes.find(route => route.id === parseInt(e.target.value)))}>
            <option value="">Select a route</option>
            {busRoutes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.from} to {route.to} - ${route.price}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Passenger Name"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Seat Number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
          />
          <button type="button" onClick={handleBookTicket}>
            Book Ticket
          </button>
        </form>
      </div>
      {showConfirmation && (
        <div className="card">
          <p>Booking Confirmed! Your ticket has been successfully booked.</p>
          <button onClick={() => setShowConfirmation(false)}>OK</button>
        </div>
      )}
    </div>
  );
};

const MyBookings = ({ bookings }) => (
  <div className="container2">
    <h2>My Bookings</h2>
    {bookings.length === 0 ? (
      <p>No bookings yet.</p>
    ) : (
      <div className="grid">
        {bookings.map((booking) => (
          <div key={booking.id} className="card">
            <h3>{booking.route.from} to {booking.route.to}</h3>
            <p><strong>Passenger:</strong> {booking.passengerName}</p>
            <p><strong>Seat:</strong> {booking.seatNumber}</p>
            <p><strong>Price:</strong> ${booking.route.price}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const AboutUs = () => (
  <div className="container3">
    <h2>About Us</h2>
    <p>BusBooker is your go-to solution for hassle-free bus ticket bookings. With a user-friendly interface and reliable service, we ensure that your travel is smooth and enjoyable.</p>
    <p>Our mission is to provide a seamless booking experience with transparent pricing, offering a variety of routes across the country.</p>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'book':
        return <BookTicket addBooking={addBooking} />;
      case 'myBookings':
        return <MyBookings bookings={bookings} />;
      case 'about':
        return <AboutUs />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
