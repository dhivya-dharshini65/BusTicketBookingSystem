import React from 'react';
import './Confirmation.css';

const Confirmation = ({ bus, selectedSeats, onBack, onProceedToPayment }) => {
  return (
    <div className="confirmation-container">
      <h2>Booking Confirmation</h2>
      <p>Bus: {bus.type}</p>
      <p>Seats: {selectedSeats.join(', ')}</p>
      <button className="proceed-payment-button" onClick={onProceedToPayment}>
        Proceed to Payment
      </button>
      <button className="back-button" onClick={onBack}>
        Back to Seat Selection
      </button>
    </div>
  );
};

export default Confirmation;
