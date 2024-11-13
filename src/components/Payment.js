// import React from 'react';
// import './Payment.css';

// const Payment = ({ bus, selectedSeats }) => {
//   return (
//     <div className="payment-container">
//       <h2>Payment</h2>
//       <p>Bus: {bus.type}</p>
//       <p>Seats: {selectedSeats.join(', ')}</p>
//       <p>Total: ₹{bus.price * selectedSeats.length}</p>
//       <button className="pay-now-button">Pay Now</button>
//     </div>
//   );
// };

// export default Payment;
import React from 'react';
import './Payment.css';

const Payment = ({ bus, selectedSeats }) => {
  const totalCost = bus.price * selectedSeats.length;

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Bus: {bus.type}</p>
      <p>Seats Selected: {selectedSeats.join(', ')}</p>
      <p>Number of Seats: {selectedSeats.length}</p>
      <p>Price per Seat: ₹{bus.price}</p>
      <p>Total Amount: ₹{totalCost}</p>
      <button className="pay-now-button">
        Pay Now - ₹{totalCost}
      </button>
    </div>
  );
};

export default Payment;
