
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import TicketOptions from './components/TicketOptions'; 
import SearchResults from './components/SearchResults'; 
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}  />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup handleLogin={handleLogin} />} />
          <Route path="/ticket-options" element={<TicketOptions />} /> {/* Add TicketOptions route */}
          <Route path="/search-results" element={<SearchResults />} /> {/* Route for search results */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
